// import _ from 'lodash';
// import { cube } from './math.js';
// import printMe from './print.js';
import {cube,square} from 'demo1-houyishuai';

function component() {
  var element = document.createElement('div');
//   // var btn = document.createElement('button');

//   // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = [
     'Hello webpack!',
     ' !5 cubed is equal to '  + cube(5)+
     ' !5 squared is equal to ' + square(5)
   ].join('\n\n');
//   // btn.innerHTML = 'Click me and check the console!';
//   // btn.onclick = printMe;
//   // element.appendChild(btn);
//   // element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
