function buildMap(id, color){
    var div = document.getElementById(id);
    var ul = document.createElement("ul");
    div.appendChild(ul);
    var li = document.createElement("li");
    for(var s = 0; s < 11; i++){
        li.textContent = "home page" + s;
       document.body.style.Color = color;
        div.appendChild(li);
    }
    
}