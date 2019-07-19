(function () {
  const btn = document.querySelector('#calculate');

  //par
  const parSideA = document.querySelector('#parSideA'),
    parSideB = document.querySelector('#parSideB'),
    parAngle = document.querySelector('#parAngle'),
    par = document.querySelector('#par');

  //circle
  const circleR = document.querySelector('#circleR'),
    circle = document.querySelector('#circle');

  //ellipse
  const verticalR = document.querySelector('#ellipseVR'),
    horizontalR = document.querySelector('#ellipseHR'),
    ellipse = document.querySelector('#ellipse');

  //square
  const square = document.querySelector('#square'),
    squareSide = document.querySelector('#squareSide');

  //rectangle
  const rectangle = document.querySelector('#rectangle'),
    rectangleSideA = document.querySelector('#rectangleSideA'),
    rectangleSideB = document.querySelector('#rectangleSideB');

  //triangle
  const triangle = document.querySelector('#triangle'),
    triangleSideA = document.querySelector('#triangleSideA'),
    triangleSideB = document.querySelector('#triangleSideB');

  function draw(h, w, el) {
    if (w > 40 || h > 40 || w < 0 || h < 0) {
      alert(`Invalid value for element => ${el.getAttribute('name')}`);
      return;
    }
    el.style.height = `${h*10}px`;
    el.style.width = `${w*10}px`;
  }

  function drawParallelogram(sideA = 10, sideB = 20, angle = 20) {
    const obj = {
      sideA: sideA,
      sideB: sideB,
      angle: angle
    };
    obj.area = obj.sideA * obj.sideB * Math.abs(Math.sin(obj.angle));
    obj.height = obj.area / obj.sideB;
    draw(obj.height, obj.sideB, par);
    changeSkew(obj.angle, par);
    console.log(obj);
  }

  function drawCircle(radius = 10) {
    const obj = {
      radius: radius,
      diameter: radius * 2
    };
    obj.area = Math.pow(obj.radius, 2) * Math.PI;
    obj.circumference = obj.diameter * Math.PI;
    draw(obj.diameter, obj.diameter, circle);
  }

  function drawEllipse(ellipseHR, ellipseVR) {
    const obj = {
      hRad: ellipseHR,
      vRad: ellipseVR
    };
    obj.area = obj.vRad * obj.hRad * Math.PI;
  }

  function changeSkew(skew, el) {
    el.style.transform = `skew(-${skew}deg)`;
  }

  function render() {
    drawParallelogram(parSideA.value, parSideB.value, parAngle.value);
    drawCircle(circleR.value, circle);
  }

  btn.onclick = render;
  render();
}());
