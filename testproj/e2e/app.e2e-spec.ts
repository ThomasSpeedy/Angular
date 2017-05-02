import { TestprojPage } from './app.po';

describe('testproj App', function() {
  let page: TestprojPage;

  beforeEach(() => {
    page = new TestprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hmi works!');
  });
});
