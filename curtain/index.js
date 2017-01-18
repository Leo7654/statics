console.log("hello");
let secs = 2 * 60 * 1000;
let back = $('<button>');
back.text("open")
back.on('click', () => {
  console.log("back");
  $.get('/b/'+secs);
})
$(document.body).append(back)

let stop = $('<button>');
stop.text("stop")
stop.on('click', () => {
  console.log("stop");
  $.get('/s');
})
$(document.body).append(stop)

let forward = $('<button>');
forward.text("close")
forward.on('click', () => {
  console.log("forward");
  $.get('/f/'+secs);
})
$(document.body).append(forward)
