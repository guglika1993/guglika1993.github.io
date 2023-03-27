const ul = document.querySelector("#ul");
const input = document.querySelector("#input");
const form = document.querySelector("#form");
const firstText = document.querySelector("p");
const symbol = document.querySelector("#smb");



input.required = true;

form.addEventListener("submit", send);



function send(event){
    event.preventDefault();
    const text = input.value;
    const newItem = document.createElement("li");
    newItem.setAttribute("class", "fs-4");
    newItem.innerText = text;

    const del = document.createElement("button");
    del.setAttribute("role", "button");
    del.innerText = "Удалить";
    del.style["margin-left"] = "10px";
    del.style["margin-top"] = "5px";
    del.setAttribute("class", "btn btn-danger btn-sm");
    newItem.append(del);
    del.addEventListener("click", function(){
       this.closest("li").remove();
       check();
    })
    
    firstText.innerText="";
    ul.append(newItem);
    input.value = "";
    input.focus();
    

    

}

function check(){
    const check = document.querySelector("li");
    if(check == null){
        firstText.innerText = `${symbol.innerText} список пустой...`;
    }
}

