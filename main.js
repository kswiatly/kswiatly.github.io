window.onbeforeunload = function () {
	window.scrollTo(0, 0);
  }
  
const scroll = new SmoothScroll('.navbar a,[href*="#"]', {
	speed: 800
});

const scroll1 = new SmoothScroll1('.contact-invitation a,[href*="#"]', {
	speed: 800
});


