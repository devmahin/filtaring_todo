const input = document.querySelector(".input");
const select = document.querySelector(".select_box");
const todo = document.querySelector(".todo");
const plus = document.querySelector(".plus");

function addTodo(e) {
  let div = document.createElement("div");
  div.classList.add("todo_list");

  let li = document.createElement("li");
  li.classList.add("todo_item");
  li.innerText = input.value;

  let btnCheck = document.createElement("button");
  btnCheck.innerHTML = `<i class="checki ri-check-line"></i>`;
  btnCheck.classList.add("check");

  let btnDelete = document.createElement("button");
  btnDelete.innerHTML = `<i class="deletei ri-delete-bin-7-line"></i>`;
  btnDelete.classList.add("delete");

  div.appendChild(li);
  div.appendChild(btnCheck);
  div.appendChild(btnDelete);
  todo.appendChild(div);
  input.value = "";
}

function deleteFun(e) {
  let todo = e.target;
  if (todo.classList[0] === "delete") {
    let item = todo.parentElement;
    item.remove();
  }
  if (todo.classList[0] === "check") {
    let item1 = todo.parentElement;
    item1.classList.add("opacitys");
  }
}

function filters(e) {
    let todos = todo.children
    console.log(todos)
    todos.forEach((a) => {
        console.log(a)
    })
    

}

document.querySelector(".select_box")
    .addEventListener("change", filters);


todo.addEventListener("click", deleteFun);
plus.addEventListener("click", addTodo);
