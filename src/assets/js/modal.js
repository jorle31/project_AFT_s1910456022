const buttons = document.querySelectorAll('.trigger[data-modal-trigger]');
for(let button of buttons) {
    modalEvent(button);
}
function modalEvent(button) {
    button.addEventListener('click', () => {
        const trigger = button.getAttribute('data-modal-trigger');
        const modal = document.querySelector(`[data-modal=${trigger}]`);
        const contentWrapper = modal.querySelector('.content-wrapper');
        const close = modal.querySelector('.close');
        close.addEventListener('click', () => modal.classList.remove('open'));
        modal.addEventListener('click', () => modal.classList.remove('open'));
        contentWrapper.addEventListener('click', (e) => e.stopPropagation());
        modal.classList.toggle('open');
    });
}
document.querySelectorAll(".action").forEach(button => {
    button.onclick = function() {
        const trigger = button.getAttribute('data-modal-trigger');
        document.querySelector(`[data-modal=${trigger}]`).classList.remove('open');
    };
});
