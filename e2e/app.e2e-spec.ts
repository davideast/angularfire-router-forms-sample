import { AngularfireRouterFormsSamplePage } from './app.po';

describe('angularfire-router-forms-sample App', function() {
  let page: AngularfireRouterFormsSamplePage;

  beforeEach(() => {
    page = new AngularfireRouterFormsSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
