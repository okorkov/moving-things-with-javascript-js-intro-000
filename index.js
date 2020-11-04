
var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 25}px`
  }
}
function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', '')
  var right = parseInt(rightNumbers, 10)
 
  if (right > 0) {
    dodger.style.left = `${right + 25}px`
  }
}
function moveDodgerUp() {
  var upNumbers = dodger.style.bottom.replace('px', '')
  var up = parseInt(upNumbers, 10)
 
  if (up >= 0) {
    dodger.style.bottom = `${up + 25}px`
  }
}
function moveDodgerDown() {
  var downNumbers = dodger.style.bottom.replace('px', '')
  var down = parseInt(downNumbers, 10)
 
  if (down > 0) {
    dodger.style.bottom = `${down - 25}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
  if (e.which === 39) {
    moveDodgerRight()
  }
  if (e.which === 38) {
    moveDodgerUp()
  }
  if (e.which === 40) {
    moveDodgerDown()
  }
})