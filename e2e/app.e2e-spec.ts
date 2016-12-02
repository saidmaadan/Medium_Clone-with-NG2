import { Ng2EpostPage } from './app.po';

describe('ng2-epost App', function() {
  let page: Ng2EpostPage;

  beforeEach(() => {
    page = new Ng2EpostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
