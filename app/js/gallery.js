const activePic = document.querySelector('.active-pic img');
const thumbNails = document.querySelectorAll('.thumbnail img');
const thumbNailsParent = document.querySelectorAll('.thumbnail');



activePic.setAttribute("src",`images/image-product-1.jpg`);

thumbNails.forEach((number,index) =>{

    index = index + 1;
    number.addEventListener('click',()=>{
       activePic.setAttribute("src",`images/image-product-${index}.jpg`);

       thumbNailsParent.forEach(thumbnail =>{
            if(thumbnail.classList.contains('selected')){
                thumbnail.classList.remove('selected');
            }
        });

        number.parentElement.classList.add('selected');

    });
});

//console.log(thumbNails)

