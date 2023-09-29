let text = document.getElementById('txt');

text.addEventListener('click', () => {
    if(text.classList.contains('hidden')){
        text.classList.remove('hidden');
        text.classList.add('new');
    } else {
        text.classList.add('hidden');
    }   
});