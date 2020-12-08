var opacity = 0.2;
document.body.addEventListener("mousemove", function() {
  opacity = opacity + 0.005;
  var color = 'rgba(253, 245, 165,'+ opacity + ')';
  document.body.style.backgroundColor = color;
});

