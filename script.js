const carousel = document.querySelector(".carousel-container");

window.onload = () =>{

    let firstX = 0,
        pressed = false,
        perc = 0,
        isMoving = 0;
    
    window.addEventListener("mousedown", function(e){
        firstX = e.clientX;
        pressed = true;
    })
    
    window.addEventListener("mousemove", function(e){
        if(!pressed) return;
    
        const mouvement = parseFloat(firstX) - e.clientX;
        firstX = e.clientX;
    
        if(isMoving > carousel.offsetWidth) isMoving = carousel.offsetWidth;
        if(isMoving < 0) isMoving = 0;
        isMoving += mouvement;

        // perc = isMoving * 100 / (carousel.offsetWidth);
        perc = isMoving * 100 / (window.innerWidth / 2);
    
        perc = Math.min(Math.max(parseInt(perc), 0), 100);
        
        carousel.animate(
            {transform: `translate3d(-${perc}%,-50%, 0)`},
            {duration: 2000, fill: "forwards"}
        );

        for(const image of carousel.children){
            image.animate(
                {objectPosition: `${perc}% center`},{duration: 1200, fill: "forwards"}
            )
        };
    
    })

    window.addEventListener("mouseup", function(e){
        firstX = 0;
        pressed = false;
    })
    
}