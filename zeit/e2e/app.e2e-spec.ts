import { ZeitPage } from './app.po';

describe('zeit App', () => {
  let page: ZeitPage;

  beforeEach(() => {
    page = new ZeitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hmi works!');
  });
});
