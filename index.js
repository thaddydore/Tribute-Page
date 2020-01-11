const toggleButttton = () => {
	let icon = document.querySelector("#icon");

	const toggleList = () => {
		let navList = document.querySelectorAll(".nav-list");
		console.log(navList);
		navList.forEach(list => {
			list.classList.toggle("appear");
		});
	};

	icon.addEventListener("click", toggleList);
};

toggleButttton();
