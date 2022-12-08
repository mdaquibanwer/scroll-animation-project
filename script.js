const allBox = document.querySelectorAll(".box");

window.addEventListener('scroll',execution);


function execution(){
    const bottomTriggerHeight = window.innerHeight / 5 *4;

    allBox.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop<bottomTriggerHeight){
            box.classList.add('show');
        }else{
            box.classList.remove('show')
        }

    })
}
execution()