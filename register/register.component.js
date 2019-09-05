angular.module("register").
component("register", {
    templateUrl: 'register/register.template.html',
    controller: ['$scope', function logInController ($scope) {
   
        $( "#register-form" ).submit(function( event ) {
            var isValid = true;
            var pswd = $("#registerPassword").val();
            if (pswd.length < 5 ) {
                 $("#passwordAlert").text("Your password is too short");
                 isValid = false;
                 $("#registerPassword").css("border", "solid 1px #dc3545")
                 } 
             else {
                 $("#passwordAlert").text("");}

             if($("#rules").prop("checked") == true){
                    window.location.href = '#!/tasks';}
                else 
                    if($("#rules").prop("checked") == false) {
                        alert("You need to agree with the rules." );
                         isValid = false;
                     }

                if (!isValid) {
                    e.preventDefault();
                     } 
                else {
                    window.location.href = '#!/tasks';
                     }
          });
    }]
});