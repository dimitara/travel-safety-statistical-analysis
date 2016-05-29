import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { StatisticalAnalysisAppComponent } from '../app/statistical-analysis.component';

beforeEachProviders(() => [StatisticalAnalysisAppComponent]);

describe('App: StatisticalAnalysis', () => {
  it('should create the app',
      inject([StatisticalAnalysisAppComponent], (app: StatisticalAnalysisAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'statistical-analysis works!\'',
      inject([StatisticalAnalysisAppComponent], (app: StatisticalAnalysisAppComponent) => {
    expect(app.title).toEqual('statistical-analysis works!');
  }));
});
