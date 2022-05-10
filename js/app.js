const modalImagen = document.querySelector("#modal-imagen");

modalImagen.addEventListener("show.bs.modal", function (e) {
	const enlace = e.relatedTarget;
	const rutaImagen = enlace.getAttribute("data-alfgow");
	const imagen = document.createElement("IMG");
	imagen.src = `./img/${rutaImagen}.jpg`;
	imagen.classList.add("img-fluid");
	imagen.alt = "Imagen Galeria";

	const mostarImg = document.querySelector(".modal-body");

	while (mostarImg.firstChild) {
		mostarImg.removeChild(mostarImg.firstChild);
	}

	mostarImg.appendChild(imagen);
});
