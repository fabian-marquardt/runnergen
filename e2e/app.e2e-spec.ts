import { RunnergenPage } from './app.po';

describe('runnergen App', () => {
  let page: RunnergenPage;

  beforeEach(() => {
    page = new RunnergenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
