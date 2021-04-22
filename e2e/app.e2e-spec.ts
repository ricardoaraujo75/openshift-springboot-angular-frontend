import { TasksFePage } from './app.po';

describe('tasks-fe App', () => {
  let page: TasksFePage;

  beforeEach(() => {
    page = new TasksFePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
