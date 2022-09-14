const bar = document.getElementById('bar');
const cls = document.getElementById('close');
const list = document.getElementById('list');

if(bar){
    bar.addEventListener('click', ()=>{
        list.classList.add('active');
    })
}

if(cls){
    cls.addEventListener('click', ()=>{
        list.classList.remove('active');
    })
}

