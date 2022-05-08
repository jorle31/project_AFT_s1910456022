//simple click handler for the bottom buttons
document.querySelectorAll(".thumbnail").forEach(shoe => {
    shoe.onclick = function() {
        //change image
        document.querySelector(".nike").src = this.getAttribute('src');
        //change background
        const container = document.querySelector('.container-fluid');
        container.style.background = this.getAttribute('data-bg');
    };
});