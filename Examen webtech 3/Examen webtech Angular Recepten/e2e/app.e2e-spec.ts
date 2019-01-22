import { EerstePage } from './app.po';

describe('eerste App', function() {
  let page: EerstePage;

  beforeEach(() => {
    page = new EerstePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
