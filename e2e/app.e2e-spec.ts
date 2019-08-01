import { HuevoRancheroPage } from './app.po';

describe('huevo-ranchero App', function() {
  let page: HuevoRancheroPage;

  beforeEach(() => {
    page = new HuevoRancheroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
