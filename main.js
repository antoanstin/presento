$('.brand').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
})
var btn=document.querySelector(".burger-icon");
btn.addEventListener("click",function(e){
    e.target.parentNode.querySelector(".header-res-menu").classList.toggle("calloff")
})
var clos=document.getElementsByClassName("clos")
// console.log(clos);
for(i=0;i<clos.length;i++){
    clos[i].addEventListener("click",function(e){
       e.target.parentNode.parentNode.classList.add("calloff") 
       
    })
}