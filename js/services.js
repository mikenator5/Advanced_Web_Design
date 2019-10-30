function create_gallery(images) {

    var count = 0;
    for (var a = 0; a < Object.keys(images.names).length / 3; a++) {

        var divRow = document.createElement("div");
        divRow.className = "row";
        for (var b = 0; b < 3; b++) {

            var divCol = document.createElement("div");
            divCol.className = "column";
            var columnImage = document.createElement("img");
            columnImage.setAttribute("src", "../images/" + String(images.names[count]) + ".jpeg");
            console.log(images.names[count]);
            var columnDescription = document.createElement("h3");
            columnDescription.setAttribute("class", "desc")
            columnDescription.innerHTML = images.text[count];
            count++;;
            
            columnImage.setAttribute("alt", String(images[count - 1]));
            columnImage.setAttribute("class", 'imageInRows');
            divCol.appendChild(columnImage);
            divCol.appendChild(columnDescription);
            divRow.appendChild(divCol);
        }
       
        

        document.body.appendChild(divRow);
    }
}


