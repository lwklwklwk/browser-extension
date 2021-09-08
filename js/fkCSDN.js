window.onload = () => {
    enableUserSelect()
}

// setTimeout(enableUserSelect, 5000)
function enableUserSelect() {
    Array(...document.getElementsByClassName('prettyprint')).forEach(element => {
        element.style.userSelect = 'initial'
        Array(...element.children).forEach(child => {
            child.style.userSelect = 'initial'
        })
    });
}