// Selection =====================

const  body = document.querySelector('body')
const ControlNightDay = document.querySelector('.fa-cloud-sun') 
const newTudoInput = document.querySelector('.add_todo_input') 
const tudoContainer = document.querySelector('.todo_list')
const addTask = document.querySelector('.addtudobtn')
const editBtn = document.querySelector('.edit')
const form  = document.querySelector('.create_new_task_input')
const counter = document.querySelector('.craud_oparation small span')
let count = 0



// event lestiner =================


ControlNightDay.addEventListener('click', changeMOde)
form.addEventListener('submit',addtudos )

// function ===================



function changeMOde(e){
    body.classList.toggle('dark')
    if(ControlNightDay.classList.contains('fa-cloud-sun')){
        ControlNightDay.classList.remove('fa-cloud-sun')
        ControlNightDay.classList.add('fa-moon')
    }else{
        ControlNightDay.classList.remove('fa-moon')
        ControlNightDay.classList.add('fa-cloud-sun')

    }
}


function addtudos(e){
    if(newTudoInput.value == ''){
        
        alert("Don't allaw Emty tudo , type sumthing")

    }else{
        let newTudoValue = newTudoInput.value
        console.log(newTudoValue)
        getelement(newTudoValue)
        newTudoInput.value = ''
        count ++
        counter.innerHTML = count
    }
}






function getelement(listValue){

     let li  = document.createElement('li')
     let div = document.createElement('div')
     div.classList.add('content_li')
     let btnDiv = document.createElement('div')
     btnDiv.classList.add('btn_grop')
     let deleteBtn = document.createElement('button')
     deleteBtn.classList.add('delete')
     deleteBtn.innerText = 'DELETE'
     let editBtn = document.createElement('button')
     editBtn.classList.add('edit')
     editBtn.innerText =' EDIT'
     let input = document.createElement('input')
     input.type = 'text'
     input.classList.add('li_text_input')
     input.value = listValue
    input.setAttribute('readonly', 'readonly')
    //  append 
    btnDiv.appendChild(editBtn)
    btnDiv.appendChild(deleteBtn)
    div.appendChild(input)
    div.appendChild(btnDiv)
    li.appendChild(div)
  
    tudoContainer.appendChild(li)

    editBtn.addEventListener('click', ()=>{
       if(editBtn.innerText.toUpperCase() == 'EDIT'){
        input.removeAttribute('readonly')
        input.focus()
        editBtn.innerText ='SAVE'
       }else{
    
        if(input.value == ''){
            alert('plese type anyThing than save OR Delete This todo ')
        }else{
            input.setAttribute('readonly' , 'readonly')
           // input.style.color ='var(--Very_Light_Gray)'
           
            editBtn.innerText ='EDIT'
        }
       }
    })

    deleteBtn.addEventListener('click', (e)=>{
        tudoContainer.removeChild(li)
        console.log(e.target)
        count--
        counter.innerHTML = count

    })
}


