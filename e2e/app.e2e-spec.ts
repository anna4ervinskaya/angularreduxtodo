import { AngulareduxTodoPage } from './app.po';

describe('angularedux-todo App', function() {
  let page: AngulareduxTodoPage;

  beforeEach(() => {
    page = new AngulareduxTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
