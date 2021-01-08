const siam = document.querySelector('.siamVai');
const info = document.querySelector('.info');
info.addEventListener('click', ()=>{
  siam.classList.toggle('d-none');
});

siam.addEventListener('click', (e)=>{
  if(e.target.classList.contains('reject')){
    const parent = e.target.parentElement.parentElement.parentElement;
    if(parent.classList.contains('d-none') != true){
      parent.classList.add('d-none');
    }
  }
});




