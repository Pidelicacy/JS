var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/
function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

multiply(4,7);
multiply(20,20);
multiply(0.5,3);