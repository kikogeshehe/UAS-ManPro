// Efek smooth scroll ke bagian keunggulan
document.querySelector(".btn-utama").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#keunggulan").scrollIntoView({
        behavior: "smooth"
    });
});

// Navbar shadow saat scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }
});