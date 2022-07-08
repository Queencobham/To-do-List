 let todoInput = document.querySelector('.todo-input')
 let submitBtn = document.querySelector('.submit-btn')
 let list = document.querySelector('.lists')

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    // alert('am going to be okay')
    let todoItems = document.createElement('div')
    todoItems.className = ('todo-items')
    
    //new todo items
    let listItems = document.createElement('li')
    listItems.innerText = todoInput.value
    listItems.className = ('list-items')
    todoItems.appendChild(listItems)
  
    //completed todo items
    let completedItems = document.createElement('button')
    completedItems.textContent = 'Check'
    completedItems.className = ('completed-btn')
    todoItems.appendChild(completedItems)
    
    //deleted todo items
    let deletedItems = document.createElement('button')
    deletedItems.textContent = 'Delete'
    deletedItems.className = ('deleted-btn')
    todoItems.appendChild(deletedItems)
   
    list.appendChild(todoItems) 

    todoInput.value = ""     
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
      }


})
 
