<<<<<<< HEAD
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

=======
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

>>>>>>> e37c3d33ff3f6a6dff200d54fa43c169401c664a
window.addEventListener('scroll',debounce(checkSlide));