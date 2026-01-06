import gsap from "gsap";
import ScrollToPlugin from "gsap/src/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const handleNav = (e, id) => {
	// use gsap to nav

	const target = document.getElementById(id);
	e.preventDefault();
	gsap.to(window, {
		scrollTo: target,
		duration: 0.3,
		ease: "power3.inOut",
	});
};

export default handleNav;
