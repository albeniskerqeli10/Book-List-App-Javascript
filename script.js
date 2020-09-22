

let menu = document.querySelector(".conta");
let btn1 = document.querySelector(".btn");
let btn2 = document.querySelector(".btn3");
 let second = document.querySelector(".bs");

 let irp = document.querySelector(".date");
let inp = document.querySelector(".input");
let bsd = document.querySelector(".sss");
let brs  = document.querySelector(".marker");
let idp  = document.querySelector(".input2");
let error  = document.querySelector("#alert");
 let b =document.getElementById("blue");



const getItems = () => {
  return JSON.parse(localStorage.getItem("items"));
};

let items = getItems() || [];

const setItems = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

let addBr = (item) => {
  let sd = document.createElement("DIV");
  sd.className = " col-xl-9";
  let br = document.createElement("DIV");
    br.className = "red";

  let rr = document.createElement("I");
  rr.innerHTML = "#";
    let dd  =  document.createElement("H1");
  dd.innerHTML = (item ? item.name : inp.value);

  var bs = document.createElement("H1");
  bs.innerHTML = (item ? item.author : idp.value);
  var bn = document.createElement("H1");
  bn.innerHTML = (item ? item.date : irp.value);

  let newItem = { name: inp.value, date: irp.value  , author:idp.value };
  if (!item) {
    items.push(newItem);
    setItems(items);
  }
 menu.appendChild(sd);
  sd.appendChild(br);
    br.appendChild(rr);
  br.appendChild(bs);
      br.appendChild(dd);

    br.appendChild(bn);

  
  const finalItem = item || newItem;

  let ttt = document.createElement("BUTTON");
  ttt.className = "marker";
  ttt.innerHTML = "Remove";
  br.appendChild(ttt);

if(inp.value === ""  && idp.value === "" && irp.value === "") 
{  
 menu.removeChild(sd);
sd.removeChild(br);


} 


else {
      sd.appendChild(br);
       menu.appendChild(sd);

}



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