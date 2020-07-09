var typed = {
  strings: ['Web dev', 'UI UX', 'DIY', 'Arduino', 'IOT', 'Flutter'],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  startDelay: 500,
  loop: true,
};

var typed = new Typed('#typed', typed);

let url, mess;
function sendWhatsapp() {
  mess = document.getElementById('message').value;
  url = `http://wa.me/+919048814964/?text=${mess}`;
  window.open(url);
}
