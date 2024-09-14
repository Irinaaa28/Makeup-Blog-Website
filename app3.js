document.addEventListener('DOMContentLoaded', (event) => {
    const menuItems = document.querySelectorAll(' .submeniu2 li');  //folosirea metodelor getComputedStyle si stopPropagation cu un sens relevant;
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            alert('Ai apăsat pe: ' + this.textContent);
            const computedStyle = window.getComputedStyle(this);
            console.log('Stilurile calculate pentru acest element:', computedStyle);
            event.stopPropagation();
        });
    });
});
