const removeSVG = '<svg id="remove" class="fill noFill" height="427pt" viewBox="-40 0 427 427.00131" width="427pt" xmlns="http://www.w3.org/2000/svg"><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/></svg>';
const completeSVG = ' <svg version="1.1" class="noFill tick" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0 c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7 C514.5,101.703,514.499,85.494,504.502,75.496z"/> </g></svg>';
const editSVG = '<svg version="1.1" class="noFill editing " id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 469.331 469.331" style="enable-background:new 0 0 469.331 469.331;" xml:space="preserve"><g><path d="M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z"/></svg>'
                

const addBtn = document.getElementById('add-btn');
let input = document.getElementById("itemInput");
let ul = document.getElementsByClassName('todo');
let list = document.querySelectorAll('li');


// add to list function
function clickToAdd() {
  let item = document.getElementById("itemInput").value;
  if(item) {
    addItemTodo(item);
    document.getElementById("itemInput").value="";
  }else{
    alert('you need to enter a task');
  }
};

// enter key press to add to list function
function pressedKey(event) {
  let value = document.getElementById("itemInput").value;
  if (event.which === 13 && value) {
    addItemTodo(value);
    // item.value = ""; it also works
    document.getElementById("itemInput").value="";
  }

}


addBtn.addEventListener('click',clickToAdd);
input.addEventListener('keypress',pressedKey);


// removing item function
function removeItem() {
 let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  parent.removeChild(item); 
}

//completing item function
function completeItem() {
  let item = this.parentNode.parentNode;
  //console.log(this.parentNode.parentNode);
  let parent = item.parentNode;
  let id = parent.id;

  let target;
  target = (id ==='todo') ? document.getElementById('completed'):target = document.getElementById('todo');
  
  
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);

}

function editItem() {
  let editTask = document.getElementById("itemInput")
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.editItem;

  parent.removeChild(item);
  editTask.value= item.textContent;
    
}


function addItemTodo(text) {
  var list = document.getElementById('todo');

  let item = document.createElement('li');
  item.textContent = text;

  let buttons = document.createElement('div');
  buttons.classList.add("buttons");

  let edit = document.createElement('button');
  edit.classList.add('edit');
  edit.innerHTML = editSVG;

  //add click event for editing item
  edit.addEventListener('click', editItem);
  

  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;

  //add click event for removing item
  remove.addEventListener('click', removeItem);


  let complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;

  //add click event for completing item
  complete.addEventListener('click', completeItem);

  

  buttons.appendChild(edit);
  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
  
};

