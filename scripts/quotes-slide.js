function nextSlide() {
	if (typeof $ == "undefined") var $ = function(sel) { return document.querySelector(sel); }
	$(".slides").appendChild($(".slides img:first-child"));
}
setInterval(nextSlide, 6000)
