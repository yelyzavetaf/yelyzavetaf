angular.module("tasks").component('setTasks', {
     templateUrl:"tasks/tasks.template.html",
     controller: ['$scope',  '$http',  
     function tasksController ($scope, $http) {
     
         $scope.orderProp = "id";
                 
//Current List
            $scope.currentList = null;

         function isCurrentList (list) {
                return $scope.currentList !== null && list.id === $scope.currentList.id;
          }

          function setCurrentList (list) {
               $scope.currentList = list;
               cancelCreating();
               cancelEditing();
            }

            
//Create Task and List
            $scope.newList = {"name": "" }
            $scope.newToDo = { "action": "",
            "list": $scope.currentList }

            function createToDo (toDo) {
                        if (toDo.action) {
                  toDo.id = $scope.toDos.length;
                  toDo.list = $scope.currentList.name;
                  toDo.done = false;
                  toDo.starred = false;
                  $scope.toDos.push(toDo);
                  resetCreateTask();
                         }
            }

            function createList (list) {
                        if (list.name) {
                  list.id = $scope.lists.length;
                   $scope.lists.push(list);
                   resetCreateList () ;
                         }
            } 
            
            function resetCreateTask () {
                  $scope.newToDo = {
                        "action": "",
                        "list": $scope.currentList
                  }
            };

            function resetCreateList () {
                  $scope.newList = {
                        "name": "",
                    }
            };
            
//Delete Task and List
             function  deleteTask  (toDo) {
                  var index = $scope.toDos.indexOf(toDo);
                  $scope.toDos.splice(index, 1);    
             }
           
              function deleteList (list) {
               var conf = confirm ("Do you want to delete list " + list.name + " with all the To-Dos in it forever?");
                  if (conf) {
                        for (var i=0; i in $scope.toDos; i++) {
                              if ( $scope.toDos[i].list == list.name) {
                                    deleteTask($scope.toDos[i]);
                                    i--;
                               };
                         }
                       if ($scope.currentList == list) {
                               $scope.currentList = null;
                        }
                   var index = $scope.lists.indexOf(list);
                   $scope.lists.splice(index, 1);    
                  }
             }


/// Done/ Undone
            $scope.showDones = false;

            function seeDones () {
                  $scope.showDones = true;
            }

            function hideDones () {
                  $scope.showDones = false;
            }

            function taskDone (toDo) {
                  toDo.done = true;
            }

            function taskUndone (toDo) {
                  toDo.done = false;
            }
          
///Create and Edit States
            $scope.isCreating = false;
            $scope.isCreatingList = false;
            $scope.isEditing = false;

            function startCreating () {
                  cancelCreatingList ();
                  $scope.isCreating = true;
                  $scope.isEditing = false;
            }

            function cancelCreating () {
                  $scope.isCreating = false;
                  resetCreateTask ();
            }

            function startCreatingList () {
                  cancelCreating ();
                  $scope.isCreatingList = true;
            }
            function cancelCreatingList () {
                  $scope.isCreatingList = false;
                  resetCreateList ();
            }

 //Editing To-Do
            function startEditing () {
                  $scope.isCreating = false;
                  $scope.isEditing = true;    
            }

            function cancelEditing () {
                  $scope.isEditing = false;
            }

            function shouldShowCreating () {
                  return $scope.currentList && !$scope.isEditing;
            }

            $scope.editedToDo = null;
          
            function setEditedToDo (toDo) {
                 $scope.oldEditedToDo = toDo;
                 $scope.shownEditedToDo = angular.copy(toDo);
                  $scope.editedToDo = angular.copy(toDo);
           }

            function updateToDo(toDo) {
                  if (toDo.action) {
                  var index = toDo.id;
                  $scope.toDos[index] = toDo;
                  $scope.editedToDo = null;
                  $scope.isEditing = false; 
                  }
            }
      
// Stars
            function getStarred(toDo) {
                  toDo.starred = true;
            }

            function getUnstarred (toDo) {
                  toDo.starred = false;
            }

            $scope.resetCreateList = resetCreateList;
            $scope.deleteList = deleteList;  
            $scope.seeDones = seeDones;
            $scope.hideDones = hideDones;
            $scope.taskUndone = taskUndone;
            $scope.taskDone = taskDone;     
            $scope.deleteTask = deleteTask;
            $scope.resetCreateList = resetCreateList;
            $scope.getUnstarred = getUnstarred;
            $scope.getStarred = getStarred;
            $scope.updateToDo = updateToDo;
            $scope.setEditedToDo = setEditedToDo;
            $scope.startCreating = startCreating;
            $scope.cancelCreating = cancelCreating;
            $scope.startCreatingList = startCreatingList;
            $scope.cancelCreatingList = cancelCreatingList;
            $scope.startEditing = startEditing;
            $scope.cancelEditing = cancelEditing;
            $scope.shouldShowCreating = shouldShowCreating;
            $scope.createToDo = createToDo;
            $scope.createList = createList;
            $scope.isCurrentList = isCurrentList;
            $scope.setCurrentList = setCurrentList;
           
            $http.get ('tasks/tasks.json').then(function (response) {$scope.lists = response.data.lists;});                           
            $http.get ('tasks/tasks.json').then(function (response) {$scope.toDos = response.data.tasks;});
           
     }]
});
       
           
            
            
          



