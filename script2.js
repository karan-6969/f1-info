function CursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
    })
    document.querySelector("#info1").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: `translate(-50%,-50%) scale(0)`,
        })
    })
    
    document.querySelector("#info1").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: `translate(-50%,-50%) scale(1)`,
        })
    })
     
    document.querySelector("#info2").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: `translate(-50%,-50%) scale(0)`,
        })
    })
    
    document.querySelector("#info2").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: `translate(-50%,-50%) scale(1)`,
        })
    })
    
    document.querySelector("#info3").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: `translate(-50%,-50%) scale(0)`,
        })
    })
    
    document.querySelector("#info3").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: `translate(-50%,-50%) scale(1)`,
        })
    })
    
    document.querySelector("#info4").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: `translate(-50%,-50%) scale(0)`,
        })
    })
    
    document.querySelector("#info4").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: `translate(-50%,-50%) scale(1)`,
        })
    })

}
 CursorAnimation();