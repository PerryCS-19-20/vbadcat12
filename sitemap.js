function buildMap(id){
    var div = document.getElementById(id);
    var ul = document.createElement("ul");
    div.appendChild(ul);
    for(var s = 0; s <= 12; s++){
        var aTag = document.createElement("a");
        var li = document.createElement("li");
        if(s == 0){
            li.textContent = "Back to Home";
            aTag.setAttribute('href',"index.html");
        }
        if(s == 1){
            li.textContent = "My Bio";
            aTag.setAttribute('href',"bio.html");
        }
        if(s == 2){
            li.textContent = "More Stuff";
            aTag.setAttribute('href',"404.html");
        }
        if(s == 3){
            li.textContent = "One Rule...";
            aTag.setAttribute('href',"alert.html");
        }
        if(s == 4){
            li.textContent = "Riddle?";
            aTag.setAttribute('href',"pop-up.html");
        }
        if(s == 5){
            li.textContent = "Color Test";
            aTag.setAttribute('href',"color-test.html");
        }
        if(s == 6){
            li.textContent = "Html Test";
            aTag.setAttribute('href',"htmltest.html");
        }
        if(s == 7){
            li.textContent = "Making a List";
            aTag.setAttribute('href',"todolist.html");
        }
        if(s == 8){
            li.textContent = "Tic-Tac-Toe";
            aTag.setAttribute('href',"tictactoe.html");
        }
        if(s == 9){
            li.textContent = "Multiplication Board";
            aTag.setAttribute('href',"multitable.html");
        }
        if(s == 10){
            li.textContent = "Chalk Board";
            aTag.setAttribute('href',"chalkboard.html");
        }
        if(s == 11){
            li.textContent = "Mulitplication Table With Slider";
            aTag.setAttribute('href',"slider.html");
        }
        if(s == 12){
            li.textContent = "Midpoint Calculator";
            aTag.setAttribute('href',"calculator.html");
        }
        aTag.appendChild(li);
        div.appendChild(aTag);
    }
}