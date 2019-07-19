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

  function changeParams(w, h, el) {
    if (w > 40 || h > 40 || w < 0 || h < 0) {
      alert(`Invalid value for element => ${el.getAttribute('name')}`);
      return;
    }
    el.style.width = `${w*10}px`;
    el.style.height = `${h*10}px`;
  }

  function changeSkew(skew, el) {
    el.style.transform = `skew(-${skew}deg)`;
  }

  btn.onclick = function () {
    changeParams(parSideA.value || 20, parSideB.value || 10, par);
    changeSkew(parAngle.value || 20, par);

    const containerHW = circleR.value * 2 || 10;
    changeParams(containerHW || 20, containerHW || 20, circle);

    const ellipseH = verticalR.value * 2;
    const ellipseW = horizontalR.value * 2;
    changeParams(ellipseW || 20, ellipseH || 10, ellipse);

    changeParams(squareSide.value || 20, squareSide.value || 20, square);

    changeParams(rectangleSideA.value || 20, rectangleSideB.value || 10, rectangle);

    changeParams(triangleSideA.value || 20, triangleSideB.value || 10, triangle);
  }
}());
