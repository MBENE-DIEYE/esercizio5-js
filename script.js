const todos = [
  { id: 1, task: "Comprare il latte", completed: false },
  { id: 2, task: "Fare esercizio", completed: true },
  { id: 3, task: "Studiare JavaScript", completed: false },
  { id: 4, task: "Leggere un libro", completed: false },
  { id: 5, task: "Pulire la casa", completed: true }
];

const elementUl = document.querySelector(".list")
console.log(elementUl)
// const elementLi = document.createElement("li")
todos.forEach((item) =>{
    const elementLi1 = document.createElement("li")
    elementLi1.innerText= item.task
    elementUl.appendChild(elementLi1)
})