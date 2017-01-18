console.log("hello");

let back = $('<button>');
back.text("back")
back.on('click', () => {
  console.log("back");
  $.get('/b');
})
$(document.body).append(back)

let stop = $('<button>');
stop.text("back")
stop.on('click', () => {
  console.log("stop");
  $.get('/s');
})
$(document.body).append(stop)

let forward = $('<button>');
forward.text("back")
forward.on('click', () => {
  console.log("forward");
  $.get('/f');
})
$(document.body).append(forward)
