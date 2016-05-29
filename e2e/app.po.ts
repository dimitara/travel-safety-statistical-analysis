export class StatisticalAnalysisPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('statistical-analysis-app h1')).getText();
  }
}
