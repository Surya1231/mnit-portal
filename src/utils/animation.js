export function animateValue(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    if (obj === null) obj = document.getElementById(id);
    else obj.innerHTML = current;
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}
