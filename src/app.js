export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      { route: 'syncbutton',  name: 'syncbutton', moduleId: './test/syncbutton', nav: true, title: 'syncbutton' },
      { route: 'mongotest',  name: 'mongotest', moduleId: './test/mongotest', nav: true, title: ' mongotest' }
    ]);

    this.router = router;
  }
}
