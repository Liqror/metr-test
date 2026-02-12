import {
  Component,
  ElementRef,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from './components/child.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MetrikaService } from './services/metrika.service';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // private metrika: MetrikaService;

  constructor(private configService: ConfigService) {
    // по умолчанию fallback
    // this.metrika = new FallbackMetrikaService();
  }
}
