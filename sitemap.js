function buildMap(id){
    var div = document.getElementById(id);
    var ul = document.createElement("ul");
    div.appendChild(ul);
    var li = document.createElement("li");
    for(var i = 0; i < 11; i++){
        li.textContent = "home page";
        div.appendChild(li);
    }
    
}