import { SprachkernPage } from './app.po';

describe('sprachkern App', () => {
  let page: SprachkernPage;

  beforeEach(() => {
    page = new SprachkernPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
