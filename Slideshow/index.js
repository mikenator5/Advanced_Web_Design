
let a = document.getElementById('slideshow');
let b = document.getElementById('next');
let pics = ['hills', 'lake', 'mountain', 'river'];
var count = 0;

b.addEventListener('click', () => {
    count++;
    if (count == 4) {
        count = 0;
    }
    a.src = "images/" + pics[count] + ".jpg";
});



