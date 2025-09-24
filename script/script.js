

var Icon=document.getElementById('bars');//menu-bars-icon

var Menu=document.getElementById('primary__nav');//nav-menu


Icon.addEventListener('click',()=>{
    Menu.classList.toggle('hidden')
    
})


// product-card__description
// 
const buttons = document.querySelectorAll('.des__btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.product-card');
    const subtitle = card.querySelector('.learn-more');
    subtitle.classList.toggle('hidden');
  });
});
