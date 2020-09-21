

let menu = document.querySelector(".bs");
let btn1 = document.querySelector(".btn");
let btn2 = document.querySelector(".btn3");
 
 let irp = document.querySelector(".date");
let inp = document.querySelector(".input");
let bsd = document.querySelector(".sss");
let brs  = document.querySelector(".marker");
let idp  = document.querySelector(".input2");




const getItems = () => {
  return JSON.parse(localStorage.getItem("items"));
};

let items = getItems() || [];

const setItems = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

let addBr = (item) => {
  let br = document.createElement("DIV");
  var rr = document.createElement("I");
rr.className = "fas fa-book";
  let dd  =  document.createElement("H1");
  dd.innerHTML = (item ? item.name : inp.value);
  br.className = "red";

  var bs = document.createElement("H1");
  bs.innerHTML = (item ? item.author : idp.value);
  var bn = document.createElement("H1");
  bn.innerHTML = (item ? item.date : irp.value);

  let newItem = { name: inp.value, date: irp.value  , author:idp.value };
  if (!item) {
    items.push(newItem);
    setItems(items);
  }

  menu.appendChild(br);
    br.appendChild(rr);
  br.appendChild(bs);
    br.appendChild(bn);

  
  const finalItem = item || newItem;

  let ttt = document.createElement("BUTTON");
  ttt.className = "marker";
  ttt.innerHTML = "Remove";
  br.appendChild(ttt);



  // This is the important change. Part of creating the .ttt element
  // is setting up its event listeners!
  ttt.addEventListener('click', () => {
    const i = items.indexOf(finalItem);
    if(i !== -1) items.splice(i, 1);
    setItems(items);
    br.remove();
  });
};

for (const item of items) {
  addBr(item);
}

btn1.addEventListener("click", () => addBr());