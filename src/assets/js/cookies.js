if (localStorage.getItem('cookie') === '' || localStorage.getItem('cookie') === null){
    const modal = document.querySelector(".cookieModal");
    const contentWrapper = modal.querySelector('.content-wrapper');
    contentWrapper.addEventListener('click', (e) => e.stopPropagation());
    modal.classList.toggle('open');
}

document.querySelectorAll(".action.cookieModal").forEach(button => {
    button.onclick = function() {
        const trigger = button.getAttribute('data-modal-trigger');
        const data = button.getAttribute('data-modal-value');
        document.querySelector(`[data-modal=${trigger}]`).classList.remove('open');
        localStorage.setItem('cookie', data);
    };
});