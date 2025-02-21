// Toggle Hamburger Menu
document.getElementById("hamburger-menu").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});

// Search Functionality
document.getElementById("search-bar").addEventListener("input", function() {
    let query = this.value.toLowerCase();
    document.querySelectorAll(".menu-item").forEach(item => {
        let name = item.querySelector("h3").innerText.toLowerCase();
        item.style.display = name.includes(query) ? "block" : "none";
    });
});
