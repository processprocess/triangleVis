let scene = document.querySelector('a-scene');

for(i=2;i<500;i++){

  let squareElement = document.createElement('a-entity');
  squareElement.setAttribute('className', `testClass${i}`);
  squareElement.setAttribute('position', '0 0 0');
  squareElement.setAttribute('rotation', '0 0 90');
  let setColor = 'color: ' + "#"+((1<<24)*Math.random()|0).toString(16)
  squareElement.setAttribute('material', setColor);
  squareElement.setAttribute('geometry', 'primitive: ring; segments-phi: 4; segments-theta: 3; radius-inner: 1; radius-outer: 2;');
  scene.appendChild(squareElement);

  let animationPosition = document.createElement('a-animation');
  animationPosition.setAttribute('className', `animation${i}ClassPosition`);
  animationPosition.setAttribute('delay', `${i}`);
  animationPosition.setAttribute('attribute', 'position');
  animationPosition.setAttribute('from', '0 0 4');
  animationPosition.setAttribute('to', '0 0 -20');
  animationPosition.setAttribute('fill', 'forwards');
  animationPosition.setAttribute('repeat', 'indefinite');
  animationPosition.setAttribute('direction', 'alternate');
  animationPosition.setAttribute('ease', 'ease-in-out');
  animationPosition.setAttribute('dur', `${i}000`);
  squareElement.appendChild(animationPosition);

  // let animationRotation = document.createElement('a-animation');
  // animationRotation.setAttribute('className', `animation${i}ClassRotation`);
  // animationRotation.setAttribute('delay', `${i}`);
  // animationRotation.setAttribute('attribute', 'rotation');
  // animationRotation.setAttribute('from', '0 0 0');
  // animationRotation.setAttribute('to', '0 0 360');
  // animationRotation.setAttribute('fill', 'forwards');
  // animationRotation.setAttribute('repeat', 'indefinite');
  // animationRotation.setAttribute('direction', 'alternate');
  // animationRotation.setAttribute('ease', 'ease-in-out');
  // animationRotation.setAttribute('dur', `${i}000`);
  // squareElement.appendChild(animationRotation);

}

for(i=10;i<25;i++){
// for(i=2;i<500;i++){
  let raondomElement = document.createElement('a-entity');
  raondomElement.setAttribute('className', `testClass${i}`);
  raondomElement.setAttribute('position', '0 0 0');
  raondomElement.setAttribute('rotation', '0 0 90');
  let setColor = 'color: ' + "#"+((1<<24)*Math.random()|0).toString(16)
  raondomElement.setAttribute('material', setColor);
  raondomElement.setAttribute('geometry', `primitive: ring; segments-phi: 4; segments-theta: ${(Math.random() * 8) + 3}; radius-inner: ${(Math.random() * .1) + .1}; radius-outer: ${(Math.random() * .12) + .1};`);
  scene.appendChild(raondomElement);

  let randomAnimationPosition = document.createElement('a-animation');
  randomAnimationPosition.setAttribute('className', `animationRandom${i}ClassPosition`);
  randomAnimationPosition.setAttribute('delay', `${i}`);
  randomAnimationPosition.setAttribute('attribute', 'position');
  randomAnimationPosition.setAttribute('from', '0 0 -20');
  randomAnimationPosition.setAttribute('to', `${(Math.random() * .4) - .12} ${(Math.random() * .8) - .22} 4`);
  // randomAnimationPosition.setAttribute('to', `${(Math.random() * .1) + 0;} .1 4`);
  randomAnimationPosition.setAttribute('fill', 'forwards');
  randomAnimationPosition.setAttribute('repeat', 'indefinite');
  randomAnimationPosition.setAttribute('direction', 'foreward');
  randomAnimationPosition.setAttribute('ease', 'ease-in-out');
  randomAnimationPosition.setAttribute('dur', `${i}000`);
  raondomElement.appendChild(randomAnimationPosition);

  let animationRotation = document.createElement('a-animation');
  animationRotation.setAttribute('className', `animation${i}ClassRotation`);
  animationRotation.setAttribute('delay', `${i}`);
  animationRotation.setAttribute('attribute', 'rotation');
  animationRotation.setAttribute('from', '0 0 0');
  animationRotation.setAttribute('to', '0 0 360');
  animationRotation.setAttribute('fill', 'forwards');
  animationRotation.setAttribute('repeat', 'indefinite');
  animationRotation.setAttribute('direction', 'alternate');
  animationRotation.setAttribute('ease', 'ease-in-out');
  animationRotation.setAttribute('dur', `${i}000`);
  raondomElement.appendChild(animationRotation);
}