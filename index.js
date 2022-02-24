let navlist = document.querySelector('.navList');
let openicon = document.querySelector('.open');
let closeicon = document.querySelector('#cross');



openicon.addEventListener('click' , show)
    
 function show(){
    // navlist.style.display = 'flex';
    navlist.style.left = '0';
 }


 closeicon.addEventListener('click' , shut)

 function shut(){
    navlist.style.left = '-100%';
 }