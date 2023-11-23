
document.getElementById('custm-btn').addEventListener('click',function(){
  var searchButton=document.getElementById('custm-btn');
  
  var searchInputt=document.getElementById('input-cstm');
  if(searchInputt.classList.contains('hidden-input') ) 
   {
    searchInputt.classList.remove('hidden-input');
  }
  else{
    searchInputt.classList.add('hidden-input'); 
  }
});
window.addEventListener('scroll',function(){
 const navbar=document.getElementById('navbar');
 const scrolled=window.scrollY>50;
 if(scrolled)
 {
  navbar.classList.remove('bg-transparent');
 }
 else{
  navbar.classList.add('bg-transparent');
 }
});



function position(id){
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}
