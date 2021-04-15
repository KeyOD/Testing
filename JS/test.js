function said()
{
    console.log("Hi");
};
const menu = document.querySelectorAll('#menu > li > a')
menu.forEach(elem => {
    elem.addEventListener("mouseenter", function(e) {
        this.style.background = 'yellow';
     });
     elem.addEventListener("mouseout", function(e) {
        elem.removeAttribute('style');
        console.log('lvv');
     });
});