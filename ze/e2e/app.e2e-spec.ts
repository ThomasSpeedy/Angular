import { ZePage } from './app.po';

describe('ze App', () => {
  let page: ZePage;

  beforeEach(() => {
    page = new ZePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
