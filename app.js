/* Requirements:
user needs to input a task into the input box
user needs to be able to click button to add task to list
user can delete task 
user can complete task
User can edit task

user should be able to filter the list based on what the category is (home, personal, work, )


*/

const list = [
    {
        id: 1,
        task: "Do the laundry",
        category: "Home",
    },
    {
        id: 2,
        task: "Get Groceries",
        category: "Home",
    },
    {
        id: 3,
        task: "Workout",
        category: "Personal",
    },
    {
        id: 4,
        task: "Office Meeting",
        category: "Work",
    },

]


//Selectors
let input = document.querySelector('.task-input');
const add_btn = document.querySelector('.btn-add');
const delete_btn = document.querySelector('.delete');
const incomplete_btn = document.querySelector('.incomplete');
let task_list = document.querySelector('.items-list');
const filter_option = document.querySelector('.dropdown-menu')


//Event Listeners
add_btn.addEventListener('click', addTodo);
task_list.addEventListener('click', deleteCheck);
filter_option.addEventListener('click', filterTodo);

    
// Add event listener to add button so it can perform action
    function addTodo (){
        //create li
        const todoLi = document.createElement('li');  
        todoLi.classList.add('item','list-group-item','bg-light','border','text-dark');
        todoLi.innerText = input.value;
        //Create i delete
        
        const delete_item = document.createElement('i');
        delete_item.innerHTML = '<i class="delete bi bi-trash"></i>';
        //delete_item.classList.add('delete','bi','bi-trash');
        todoLi.appendChild(delete_item);
        
        //Create i incomplete
        const incomplete_item = document.createElement('i');
        incomplete_item.innerHTML = '<i class="incomplete bi bi-check-square"></i>';
        //incomplete_item.classList.add('incomplete');
        todoLi.appendChild(incomplete_item);
        
        //add to do item to do
        task_list.appendChild(todoLi);
        /// clear to do input value
        input.value = "";

    };

   
    function deleteCheck(e) {
        const item = e.target;
        //delete todo
       //console.log(item);
       //console.log(item.parentElement)
        if (item.classList[0] === 'delete') {
            const i = item.parentElement;
            const todo = i.parentElement;
            todo.remove();
        }

        //checkmark
        if (item.classList[0] === 'incomplete') {
            const i = item.parentElement;
            const todo = i.parentElement;
            todo.classList.toggle('complete');
        }
        
    };

    function filterTodo(e) {

        const todos = task_list.childNodes;
    
        todos.forEach(function (todo) { 
    
            const mStyle = todo.style;  
    
            if(mStyle != undefined && mStyle != null){
    
                switch (e.target.value) {
    
                    case "All":
    
                        mStyle.display = "flex";
    
                        break;
    
                    case "Complete":
    
                        if (todo.classList.contains('complete')) {
    
                            mStyle.display = 'flex';
    
                        } else {
    
                            mStyle.display = "none";
    
                        }
    
                        break;
    
                    case "Incomplete":
    
                        if (todo.classList.contains('complete')){
    
                            mStyle.display = 'none';
    
                        }
    
                        else{
    
                            mStyle.display = "flex";
    
                        }
    
                        break;
    
                }
    
            }
    
        })
    
    }


