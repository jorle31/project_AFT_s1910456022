//simple click handler for the bottom buttons
document.querySelectorAll(".thumbnail").forEach(shoe => {
    shoe.onclick = function() {
        //change image
        document.querySelector(".nike").src = this.getAttribute('src');
        //change background
        const sec = document.querySelector('.sec');
        sec.style.background = this.getAttribute('data-bg');
    };
});