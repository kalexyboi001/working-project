// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }   
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));


// eventlistner for a click event 
// document.querySelector("#show-login").addEventListener("click", function(){
//     document.querySelector(".pop-up-content").classList.add("active");
// });
// document.querySelector(".pop-up-content, .close-btn").addEventListener("click",function (){
//     document.querySelector('.pop-up-content').classList.remove("active");
   
// });

// document.querySelector(".pop-up, .pop-up-content").addEventListener('click',function()
// {
//     document.querySelector(".pop-up").classList.remove("active");
// });

// pop up modal

document.getElementById("show-login").addEventListener("click",function(){
    document.querySelector(".pop-up").style.display = "flex";
    document.querySelector('.pop-up-content').classList.add("active");
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
    })
});
document.querySelector(".close-btn").addEventListener("click",function (){
        document.querySelector('.pop-up-content').classList.remove("active");
        document.querySelector(".pop-up").style.display = "none";
       
     });


    //  for the hamburger menu

    const hamburger = document.querySelector(".hamburger");
    const ul= document.querySelector("ul");


    hamburger.addEventListener("click", () =>{
    ul.classList.toogle("active");
    });

    

    //  FORM VALIDATION FOR THE FIRST POP UP MODAL


    // pop up modal for partnership button 
    // document.getElementById("show-partnership").addEventListener("click",function(){
    //     document.querySelector(".pop-up-partnership").style.display = "flex";
    //     document.querySelector('.pop-up-content-partnership').classList.add("active");
    //     form.addEventListener("submit", (e)=>{
    //         e.preventDefault()
    //     })
    // });
    // document.querySelector(".close-button").addEventListener("click",function (){
    //         document.querySelector('.pop-up-content-partnership').classList.remove("active");
    //         document.querySelector(".pop-up-partnership").style.display = "none";
           
    //      });