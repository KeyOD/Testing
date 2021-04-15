function said()
{
    console.log("Hi");
};

function hover() {
    let target = event.target;
    target.style.background = 'yellow';
    target.style.color = 'black';
};

function leave() {
    let target = event.target;
    target.style.background = '';
    target.style.color = 'white';
};