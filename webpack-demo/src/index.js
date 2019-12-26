function component() {
    var element = document.createElement('div');
        // Lodash, now imported by this script
        element.innerHTML = 'hello webpack!'
    return element;
}

document.body.appendChild(component());