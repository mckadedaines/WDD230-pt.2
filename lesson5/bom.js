const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", function(){
    if (input.value !== '') {
        const li = document.createElement("li");
        const del = document.createElement("button");

        li.innerText = input.value;
        del.textContent = "❌";

        list.append(li, del);
        
        del.addEventListener("click", function(){
            li.remove();
            del.remove();
        });

        input.value = '';
    }
});