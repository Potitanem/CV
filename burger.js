let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-list");
let body = document.querySelector("body");

hamburger.addEventListener("click", event =>{
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	body.classList.toggle("lock");
	event.stopPropagation();
})

document.querySelectorAll(".nav-link").forEach(element => 
	element.addEventListener("click", ()=>{
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
		body.classList.remove("lock");
	})
);

document.querySelectorAll('.nav-link').forEach(link =>{
	link.addEventListener('click', function(event){
		event.preventDefault();
		const link = event.target;
		const idFromHref = link.getAttribute('href').slice(1);
		const scrollTarget = document.getElementById(idFromHref);
		const offsetPosition = scrollTarget.getBoundingClientRect().top
		 - document.querySelector('.header-wrapper').offsetHeight;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		})
	})
})