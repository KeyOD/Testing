function said()
{
    console.log("Hi");
};

const menuItem = document.querySelectorAll("a");

function hover() {
    let target = event.target;
    target.style.background = 'pink';
    target.style.color = 'black';
};

function leave() {
    let target = event.target;
    target.style.background = '';
    target.style.color = 'white';
};