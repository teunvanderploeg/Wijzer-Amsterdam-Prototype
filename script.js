document.getElementById("bot-button").addEventListener("click", zichtbaar);
document.getElementById("bot").addEventListener("click", zichtbaarButton);
document.getElementById("bot").style.display = "none";

function zichtbaar() {
  var x = document.getElementById('bot');
  var y = document.getElementById('bot-button');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      y.style.display = 'none';
    } else {
      x.style.display = 'none';
      y.style.display = 'block';
    }
};

function zichtbaarButton() {
  var x = document.getElementById('bot');
  var y = document.getElementById('bot-button');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      y.style.display = 'none';
    } else {
      x.style.display = 'none';
      y.style.display = 'block';
    }
};
