window.onload = () => {
    observer.observe(document.body, {subtree: true, childList: true});
}
const callback = function(mutationsList, observer) {
    if(!isEnableUserSelectFinished) {
        enableUserSelect()
    }
};
const observer = new MutationObserver(callback);


let isEnableUserSelectFinished = false
function enableUserSelect() {
    [...document.getElementsByTagName('pre')].forEach(element => {
        element.style.userSelect = 'initial';
        [...element.children].forEach(child => {
            isEnableUserSelectFinished = true
            child.style.userSelect = 'initial'
        })
    });
}