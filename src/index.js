import {cube,square} from 'demo1-houyishuai';
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
function component() {
  var element = document.createElement('div');
  element.innerHTML = [
     'Hello webpack!',
     ' !5 cubed is equal to '  + cube(5)+
     ' !5 squared is equal to ' + square(5)
   ].join('\n\n');
  return element;
}
document.body.appendChild(component());
