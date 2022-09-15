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






// **********Single Page product script ***********
var Main = document.getElementById('MainImg');
var small = document.getElementsByClassName('small-img');

small[0].onclick = function(){
    Main.src = small[0].src;
}
small[1].onclick = function(){
    Main.src = small[1].src;
}
small[2].onclick = function(){
    Main.src = small[2].src;
}
small[3].onclick = function(){
    Main.src = small[3].src;
}