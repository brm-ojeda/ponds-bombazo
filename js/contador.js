function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  //operadores ternarios para manejar el numero negativo
  //siempre que la variable t sea menor a 0, se va imprimir 0
  var seconds = t <= 0 ? 00 : Math.floor((t / 1000) % 60);
  var minutes = t <= 0 ? 00 : Math.floor((t / 1000 / 60) % 60);
  var hours = t <= 0 ? 00 : Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = t <= 0 ? 0 : Math.floor(t / (1000 * 60 * 60 * 24)); 

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}


// var deadline = new Date(Date.parse(new Date()) + 3 * 24 * 60 * 60 * 1000);
var deadline = new Date(Date.parse('June 30 2018 23:59:59') );

initializeClock('clockdiv', deadline);

//Scroll Down
//*** Evento scroll para cambiar posición de fixed ***
var altoPagina = document.body.offsetHeight,
    altoViewport = window.innerHeight,
    altoFooter  = document.querySelector('footer').offsetHeight;

window.addEventListener('scroll', function(){
    if (((window.scrollY + altoViewport) - (altoPagina - altoFooter)) > 0) {
        document.querySelector('.cont-contador').classList.add('cont-contador-relative');
    }
    else {
        document.querySelector('.cont-contador').classList.remove('cont-contador-relative');
    }
});
