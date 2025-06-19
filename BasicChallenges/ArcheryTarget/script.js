const fakeArrow = document.getElementById("fake-arrow");

document.querySelectorAll('.circle1, .circle2, .circle3, .circle4').forEach(circle => {
    circle.addEventListener("click", (e) => {

        fakeArrow.style.left = `${e.pageX - 5}px`;
        fakeArrow.style.top = `${e.pageY - 5}px`;
        fakeArrow.style.display = "block";
    });
});
