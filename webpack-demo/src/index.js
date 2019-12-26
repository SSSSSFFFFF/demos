import './style.css'
// import MyImage from './my-image.png'
import printMe from './print.js';

console.log(3);
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
        // Lodash, now imported by this script
    element.innerHTML = 'hello webpack!'
    element.classList.add('hello');
    var img= new Image();
    // img.src = MyImage
    element.appendChild(img)
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;     
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());


 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }