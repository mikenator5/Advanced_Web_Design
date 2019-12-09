window.onload = function() {
    var rgb = document.getElementById("rgb");
    var r = randColor();
    var g = randColor();
    var b = randColor();

    rgb.innerHTML += "(" + r + ", " + g + ", " + b + ")";

    let arr = [
        [r, g, b],
        [randColor(), randColor(), randColor()],
        [randColor(), randColor(), randColor()],
        [randColor(), randColor(), randColor()],
        [randColor(), randColor(), randColor()],
        [randColor(), randColor(), randColor()],
    ]
    arr = shuffle(arr);
    console.log(arr);
    
    var gameContainer = document.getElementById("container");
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 3; j++) {
            
        }
        var newDiv = document.createElement("div");
        newDiv.innerHTML += '&nbsp;'; 
        newDiv.setAttribute('class', 'square');
        gameContainer.appendChild(newDiv);
    }


    function randColor() {
        var r = Math.floor((Math.random() * 255) + 1);
        return r;
    }
    
}