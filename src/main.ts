import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from './app/services/config.service';
import { MetrikaService } from './app/services/metrika.service';
import { RealMetrikaService } from './app/services/real-metrika.service';
import { FallbackMetrikaService } from './app/services/fallback-metrika.service';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err),
// );

// 1️⃣ Получаем счетчики через ConfigService (можно фейковые)
const configService = new ConfigService();

firstValueFrom(configService.getMetrikaConfig())
  .then((cfg) => {
    // 2️⃣ Выбираем сервис в зависимости от результата
    const metrika: MetrikaService = cfg
      ? new RealMetrikaService()
      : new FallbackMetrikaService();

    if (cfg) {
      metrika.init(cfg.counterId);
    }

    console.log(
      cfg ? 'RealMetrikaService selected' : 'FallbackMetrikaService selected',
    );

    // 3️⃣ Bootstrap приложения
    bootstrapApplication(AppComponent, {
      providers: [
        provideRouter(routes),
        provideHttpClient(),
        { provide: MetrikaService, useValue: metrika }, // DI получает выбранный сервис
      ],
    }).catch((err) => console.error(err));
  })
  .catch((err) => {
    // Если ошибка при fetch
    const metrika = new FallbackMetrikaService();
    console.log('FallbackMetrikaService selected (error)', err);

    bootstrapApplication(AppComponent, {
      providers: [
        provideRouter(routes),
        provideHttpClient(),
        { provide: MetrikaService, useValue: metrika },
      ],
    }).catch((err) => console.error(err));
  });
