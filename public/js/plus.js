document.querySelectorAll(".popup").forEach(p => p.addEventListener("click", () => {
	location.href = "#next"; 
}));

document.querySelectorAll(".popup__window").forEach(p => p.addEventListener("click", (e) => {
	e.stopPropagation(); 
}));