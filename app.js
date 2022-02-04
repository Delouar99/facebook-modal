
const button = document.getElementById('apply');
const modal = document.querySelector('.haq-modal');
const alert = document.querySelector('.haq-alert');
const mclose = document.querySelector('.haq-modal .close');
const aclose = document.querySelector('.haq-alert .close');
const keep = document.getElementById('keep');
const discard = document.getElementById('discard');

button.addEventListener('click', function () {
 
    modal.classList.add('active');

});

mclose.addEventListener('click', function () {
   alert.style.display = 'flex';
})

aclose.addEventListener('click', function () {
   alert.style.display = 'none';
})

keep.addEventListener('click', function () {
   alert.style.display = 'none';
})

discard.addEventListener('click', function () {
    alert.style.display = 'none';
    modal.classList.remove('active');
})



modal.addEventListener('click', function (e) {
    if(e.target== this){
        modal.classList.remove('active');
    }
    
})


