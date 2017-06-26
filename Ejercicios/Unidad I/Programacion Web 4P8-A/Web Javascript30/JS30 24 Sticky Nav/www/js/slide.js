const nav = document.querySelector("#main");
let topOfNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY>=topOfNav){
        document.body.style.paddingTop=nav.offsetHeight+'px';
        document.body.classList.add('fixed-nav');
    }else{
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop=0;
    }
}

function checkSlide(e){
    sliderImages.forEach(slideImage=>{
       const slideInAt =  (window.scrollY + window.innerHeight)-slideImage.height/2;
        const imageBotton = slideImage.offsetTop+slideImage.height;
        const isHalfShown = slideInAt>slideImage.offsetTop;
        const isNotScrolledPast = window.scrollY <imageBotton;
        
        if(isHalfShown && isNotScrolledPast){
            slideImage.classList.add('active');
        }else {
             slideImage.classList.remove('active');
        }
    });
}

function debounce(func,wait=20,inmediate=true){
    var timeout;
    return function(){
        var context = this,args = arguments;
        var later = function(){
            timeout=null;
            if(!inmediate)func.apply(context.args);
        };
        var callNow = inmediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,wait);
        if(callNow)func.apply(context,args);
    };
};

const sliderImages = document.querySelectorAll('.slide-in');

window.addEventListener('scroll',debounce(checkSlide));
window.addEventListener('scroll',fixNav);