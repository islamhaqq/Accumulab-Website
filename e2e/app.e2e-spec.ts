import { AccumulabWebsitePage } from './app.po';

describe('accumulab-website App', function() {
  let page: AccumulabWebsitePage;

  beforeEach(() => {
    page = new AccumulabWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
