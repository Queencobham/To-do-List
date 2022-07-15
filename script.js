 let todoInput = document.querySelector('.todo-input')
 let submitBtn = document.querySelector('.submit-btn')
 let list = document.querySelector('.lists')

  submitBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    if(todoInput.value.trim().length<1){
      alert('Please input text')
    }else{
      let todoItems = document.createElement('div')
      todoItems.className = ('todo-items')
    
      //completed todo items
    let completedItems = document.createElement('button')
    completedItems.innerHTML = '&#10003'
    completedItems.className = ('completed-btn')
    todoItems.appendChild(completedItems)
   
    //new todo items
    let listItems = document.createElement('li')
    listItems.innerText = todoInput.value
    listItems.className = ('list-items')
    todoItems.appendChild(listItems)
    
    //deleted todo items
    let deletedItems = document.createElement('button')
    deletedItems.innerHTML = '&#10006'
    deletedItems.className = ('deleted-btn')
    todoItems.appendChild(deletedItems)
   
    list.appendChild(todoItems) 

    todoInput.value = ""    
  }


    
      
    
}) 

  

list.addEventListener('click', (e)=>{
    // console.log(e.target);
    let item = e.target
    //delete
    if(item.classList[0] === 'deleted-btn'){
      let todo = item.parentElement
      todo.remove()  
    }
    //completed
    if(item.classList[0] === 'completed-btn'){
      let todo = item.parentElement
      todo.classList.toggle('completed')
      console.log(todo);
    }

})
 
