angular.module("logIn").
component("logIn", {
    templateUrl: 'login/login.template.html',
    controller: ['$scope', function logInController ($scope) {
        $( "#login-form" ).submit(function( event ) {
            var isValid = true;
               if (!isValid) {
                     e.preventDefault();
                 } 
                 else {
                    window.location.href = '#!/tasks';
                  }
            });
    }]
});