const img = document.querySelector('.image');

img.addEventListener('click' , function(){
    if(img.classList.contains('imgFadeOut' || 'imgFadeIn' || 'imgPos2')){
        img.classList.remove('image')
        img.classList.add('imgPos1')
        img.classList.remove('imgFadeOut')
        img.classList.remove('imgFadeIn')

    }else{
        img.classList.add('imgFadeOut')
        setTimeout(function(){
            img.classList.add('imgFadeIn')
            img.classList.toggle('imgPos2')
        }, 1000)
    }   
    })
