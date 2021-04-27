document.addEventListener("scroll", function (e){
    let top = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector("#imgPostcard").offsetTop;

    if (isVisible) {
        document.getElementById("imgPostcard").classList.add("animationImgPostcard");
    }
})

document.addEventListener("scroll", function (e){
    let top = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector("#textPostcard").offsetTop;

    if (isVisible) {
        document.getElementById("textPostcard").classList.add("animationTextPostcard");
    }
})