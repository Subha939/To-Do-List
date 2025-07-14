const input = document.querySelector("input");
console.log(input)
const ulElement = document.querySelector(".list")



function addfunction () {
    if ( input.value==""){
        alert("wrong!!!! type someting meaning full..")
    } else {
        let li = document.createElement("li")
        li.innerHTML=input.value
         ulElement.appendChild(li);
          input.value="";
        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span);
        }
        
    

}


input.addEventListener("keypress", (e) =>{
    if(e.key=="Enter" || e.shiftKey==true){
        addfunction();
    }
})

ulElement.addEventListener("click", (event) => {
    if (event.target.tagName==="LI"){
        console.log("yes")
        event.target.classList.toggle("cheaked")
    }

    else if (event.target.tagName="SAPN"){
        event.target.parentElement.remove()
    }

            
        });