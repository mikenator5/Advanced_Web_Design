let container = document.getElementById('formID');

for (let i = 0; i < 4; i++) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML += "<input type='checkbox' id='check" + i + "'>Hey</input>";
    newDiv.setAttribute('id', 'answer');
    newDiv.addEventListener('click', () => {

        let check = document.getElementById('check' + i);
        for (let a = 0; a < 4; a++) {
            document.getElementById('check' + a).checked = false;
        }
        check.checked = true;
    });

    container.append(newDiv);
}
