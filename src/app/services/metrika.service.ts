export abstract class MetrikaService {
  abstract init(counterId: number): void;
  abstract reachGoal(goal: string): void;
}
