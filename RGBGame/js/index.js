
    // Add functionality to buttons
    start("hard");

    function randColor() {
        var r = Math.floor((Math.random() * 255) + 1);
        return r;
    }

    function newColors(diff) {
        document.getElementById("container").innerHTML = "";
        document.getElementById("rgb").innerHTML = "RGB";
        start(diff);
    }
    
    function shuffle(array) {
        var copy = [], n = array.length, i;
        while (n) {
          i = Math.floor(Math.random() * array.length);
          if (i in array) {
            copy.push(array[i]);
            delete array[i];
            n--;
          }
        }
        return copy;
      }

    function clearEvents() {
        var b = document.getElementsByClassName("square");
        let c = document.getElementsByClassName("main")[0].style.backgroundColor;
        for (var a = 0; a < 6; a++) {
            b[a].style.backgroundColor = c;
            
        }
    }

    function start(mode) {
        document.getElementById("newGame").innerHTML = "New Colors";
        document.getElementsByClassName("main")[0].style.backgroundColor = "#233343";
        document.getElementById('message').innerHTML = "";
        
        var rgb = document.getElementById("rgb");
        var r = randColor();
        var g = randColor();
        var b = randColor();
        console.log(mode);
        rgb.innerHTML += "(" + r + ", " + g + ", " + b + ")";
    
        let arr = [];
        if (mode.localeCompare("easy") == 0) {
            arr.push([r, g, b], [randColor(), randColor(), randColor()], [randColor(), randColor(), randColor()]);
        } else {

            arr.push([r, g, b], [randColor(), randColor(), randColor()], [randColor(), randColor(), randColor()], [randColor(), randColor(), randColor()], [randColor(), randColor(), randColor()], [randColor(), randColor(), randColor()]);
        }
        arr = shuffle(arr);
        
        var gameContainer = document.getElementById("container");
        for (var i = 0; i < 6; i++) {
            var newDiv = document.createElement("div");
            newDiv.innerHTML += '&nbsp;'; 
            newDiv.setAttribute('class', 'square');
            newDiv.style.backgroundColor = 'rgb(' + arr[i] + ')';
            newDiv.addEventListener("click", function() {
                
                let color = this.style.backgroundColor.split(',');
                let r1 = color[0].substr(4);
                let g1 = color[1].substr(1);
                let b1 = color[2].substr(1).split(")");
                console.log(r1 + " " + g1 + " " + b1[0]);
                if ( (r1 == r) && (g1 == g) && (b1[0] == b)) {
                    console.log('a');
                    let a = document.getElementsByClassName("main");
                    a[0].style.backgroundColor = this.style.backgroundColor;
                    let b = document.getElementById("message");
                    b.innerHTML = "You Win!";
                    let c = document.getElementById("newGame");
                    c.innerHTML = "Play Again?";
                    clearEvents();
                } else {
                    this.style.backgroundColor = document.getElementsByClassName("game")[0].style.backgroundColor;
                    
                    let b = document.getElementById("message");
                    b.innerHTML = "Try Again!";
                }
            });
    
            gameContainer.appendChild(newDiv);
            
        }
    }

