function buildMap(id){
    var div = document.getElementById(id);
    var ul = document.createElement("ul");
    div.appendChild(ul);
    for(var s = 0; s <= 11; s++){
        var li = document.createElement("li");
        if(s == 0){
            li.textContent = "Back to Home";
        }
        if(s == 1){
            li.textContent = "My Bio";
        }
        if(s == 2){
            li.textContent = "More Stuff";
        }
        if(s == 3){
            li.textContent = "One Rule...";
        }
        if(s == 4){
            li.textContent = "Riddle?";
        }
        if(s == 5){
            li.textContent = "Color Test";
        }
        if(s == 6){
            li.textContent = "Html Test";
        }
        if(s == 7){
            li.textContent = "Making a List";
        }
        if(s == 8){
            li.textContent = "Tic-Tac-Toe";
        }
        if(s == 9){
            li.textContent = "Multiplication Board";
        }
        if(s == 10){
            li.textContent = "Chalk Board";
        }
        if(s == 11){
            li.textContent = "Mulitplication Table With Slider";
        }
        div.appendChild(li);
    }
}