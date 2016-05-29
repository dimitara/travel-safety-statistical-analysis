import { StatisticalAnalysisPage } from './app.po';

describe('statistical-analysis App', function() {
  let page: StatisticalAnalysisPage;

  beforeEach(() => {
    page = new StatisticalAnalysisPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('statistical-analysis works!');
  });
});
