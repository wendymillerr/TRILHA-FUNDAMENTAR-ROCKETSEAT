const button =  document.getElementById('openModal');
const modalWrapper = document.querySelector('.modal-wrapper');

button.onclick = function(){
    modalWrapper.classList.remove('invisible');
}
//procure dps verificar se a classe invisible ja existe pq ta em loop
document.addEventListener('keydown', function(event){
    const isEscKey = event.key == 'Escape';

    if(isEscKey){
        modalWrapper.classList.add('invisible') //loop
    }
})