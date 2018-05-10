import _ from 'lodash';
// import './css/style.css';
// import Rule from './img/rule.jpg';
// import Data from './data/data.xml';
function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');
  // Add the image to our existing div.
  // var myIcon = new Image();
  // myIcon.src = Rule;
  // element.appendChild(myIcon);
  // console.log(Data);
  return element;
}

document.body.appendChild(component());