angular.module ('app'). 
config( ['$routeProvider',
function config ($routeProvider) {
    $routeProvider.

  when ('/login', {
        template: '<log-in></log-in>' }).
  when ('/register', { 
     template: '<register></register>'   }).
   when ('/tasks', {
           template: '<set-tasks></set-tasks>' }).
   otherwise ({redirectTo: '/login'});
    }
  ]);