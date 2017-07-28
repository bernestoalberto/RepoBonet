import { RupertoPage } from './app.po';

describe('ruperto App', function() {
  let page: RupertoPage;

  beforeEach(() => {
    page = new RupertoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
