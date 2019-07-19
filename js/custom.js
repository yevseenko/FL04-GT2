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
  //square
  //rectangle
  //triangle
  
  function changeParams(w, h, el) {
    if (w > 30 || h > 30 || w < 0 || h < 0) {
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
    changeSkew(parAngle.value || 25, par);

    const containerHW = circleR.value * 2 || 10;
    changeParams(containerHW, containerHW, circle);
  }
}());
