const selectElement = (e)=>document.querySelector(e);
const selectAll = (e)=>document.querySelectorAll(e);

// Abre o menu hamburger 
selectElement(".open").addEventListener("click",()=>{
	selectElement(".nav-list").classList.add("active");
});
//fecha o menu hamburger
selectElement(".close").addEventListener("click",()=>{
	selectElement(".nav-list").classList.remove("active");
});

// defini um scroll liso até a parte da tela escolhida
selectAll("a[href^='#']").forEach(anchor =>{
	anchor.addEventListener("click", (e)=>{
		e.preventDefault();
		selectElement(anchor.getAttribute('href')).scrollIntoView({behavior:"smooth"})
	});
});

