let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let container = document.querySelector(".classes-list div");
let span = document.createElement("span");
console.log(container);

add.addEventListener("blur", function () {
  console.log(add.value);
  container.classList.add(add.value.trim());
  add.value = "";
  contain();
});

remove.addEventListener("blur", function () {
  console.log(remove.value);
  let value = remove.value.trim().toLowerCase();
  container.classList.remove(value);
  remove.value = "";
  let classList = container.classList;
  let childs = document.querySelectorAll(`.${value}`);
  childs[0].remove();
});

function contain() {
  let classList = container.classList;
  for (let i = 0; i < classList.length; i++) {
    span.textContent = classList[i];
    span.classList.add(classList[i]);
  }
  container.appendChild(span.cloneNode(true));
}
