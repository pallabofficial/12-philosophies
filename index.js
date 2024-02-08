

let buttons = document.querySelectorAll(".buttons");
buttons.forEach(function(val,index){
    val.addEventListener("click", function(){
        gsap.to("#circle", {
            rotate: (index-3+1)* (-30),
            ease:"linear",
            duration:2,
        })
    })
})