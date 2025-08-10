
const scrollTopBtn = document.getElementById("scroll-top-btn");

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

