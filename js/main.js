let prev=document.querySelector('.prev')
let next=document.querySelector('.next')
let box=document.querySelector('.box')
let dots= document.getElementsByClassName('dot')
let slideIndex=1
let degree=0
prev.addEventListener('click',function(){
    degree+=45
    box.style=`transform:perspective(1000px) rotateY(${degree}deg);`
    slideIndex-=1
    slidShow(slideIndex)
})
next.addEventListener('click',function(){
    degree-=45
    box.style=`transform:perspective(1000px) rotateY(${degree}deg);`
    slideIndex+=1
    slidShow(slideIndex)

    
})
function currentSlider(number,degree){
        degree=-degree
        box.style=`transform:perspective(1000px) rotateY(${degree}deg);`
        slidShow(slideIndex=number)
}
function slidShow(n){
    if(n>dots.length-1){slideIndex=0}
    if(n<1){slideIndex=dots.length; n=slideIndex;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className=dots[i].className.replace('active','')
    }
    dots[n-1].classList.add('active')

}
// autoplay Slider
autoPlay()
function autoPlay(){
    let autoslide=setInterval(() => {
        slidShow(slideIndex)
        slideIndex++
        degree-=45
        box.style=`transform:perspective(1000px) rotateY(${degree}deg);`
        
    }, 3000);
    box.addEventListener('mouseenter',()=>{
        clearInterval(autoslide)
    })
}
box.addEventListener('mouseleave',()=>{
    autoPlay()
})

// touched swap
let pressed=false
let startX=45
box.addEventListener('mousedown',(e)=>{
    pressed=true
    startX+=45
    console.log(startX);
    box.style.cursor='grabbing'
})

window.addEventListener('mouseup',(e)=>{
    pressed=false
    box.style.cursor='grab'
})
box.addEventListener('mousemove',(e)=>{
    if(!pressed){
        return
    }
    box.style=`transform:perspective(1000px) rotateY(${startX}deg);`   
})