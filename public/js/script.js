let humberger = document.querySelector(".humberger");
let nav = document.querySelector(".nav ul")
let next = document.querySelector(".btn1 .next");
let back = document.querySelector(".btn1 .back");
let item = document.querySelectorAll(".item1");
let active = 0;
let textNav = document.querySelectorAll(".nav ul li a")
let spanHum = document.querySelectorAll(".humberger span")
let text1 = document.querySelectorAll(".text1");
let titles = document.querySelector(".titlescinema");
let profile = document.querySelector(".profile");



setInterval(()=>{
    if(active >= 3){
        active = -1;
    }
    let itemActive = document.querySelector(".item1.active");
    active = active + 1
    let textActive = document.querySelector(".text1.active")
    text1[active].classList.add("active")
    textActive.classList.remove("active")
    item[active].classList.add("active")
    itemActive.classList.remove("active")
},5000)



next.addEventListener("click",()=>{
if(active >= item.length){
    active = -1;
}
active = active + 1;
let itemActive = document.querySelector(".item1.active");
let textActive = document.querySelector(".text1.active")
text1[active].classList.add("active")
textActive.classList.remove("active")
item[active].classList.add("active")
itemActive.classList.remove("active")
})

back.addEventListener("click",()=>{
if(active <= 0){
    active = item.length;
}
active = active - 1;
let itemActive = document.querySelector(".item1.active");
let textActive = document.querySelector(".text1.active")
text1[active].classList.add("active")
textActive.classList.remove("active")
item[active].classList.add("active")
itemActive.classList.remove("active")

})

humberger.addEventListener("click",()=>{
    nav.classList.toggle("active");
    for (let i = 0; i < 3; i++) {
        spanHum[i].classList.toggle("active")
        
    }
})


document.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    let nav = document.querySelector(".nav ul");
    let navs = document.querySelector(".nav");
    let navbars = document.querySelector(".navbar");
    let navColor = document.querySelectorAll(".nav ul li a")
    let wrapContet4 = document.querySelector(".wrapcontent4")
    let wrapContet5 = document.querySelector(".wrapcontent5")

    // if(window.scrollY >= 300){
    //     humberger.classList.add("active");
    //     navbars.classList.add("scrolled")
    //     nav.classList.add("scrolled");
    //     navs.classList.add("active");
    //     for (let i = 0; i < 4; i++) {
    //        navColor[i].classList.add("active")
            
    //     }
    
    // }else{
   
    //     humberger.classList.remove("active");
    //     navbars.classList.remove("scrolled")
    //     nav.classList.remove("scrolled");
    //     navs.classList.remove("active");
    //     for (let i = 0; i < 4; i++) {
    //         navColor[i].classList.remove("active")
             
    //      }
    // }
    
// console.log(window.scrollY);

//     if(window.scrollY > 500){
//         wrapContet4.classList.add("active")
//     }else{
//         wrapContet4.classList.remove("active")
//     }
//     if(window.scrollY > 700){
//         wrapContet5.classList.add("active")
//     }else{
//         wrapContet5.classList.remove("active")
//     }
})




