document.addEventListener("DOMContentLoaded", function(){

   const tabItem = document.querySelectorAll(".support__tab");
   const tabContent = document.querySelectorAll(".support__content");
   const tabItemAdaptive = document.querySelectorAll(".support__tab-adaptive");
   const tabContentAdaptive = document.querySelectorAll(".support__content-adaptive");


   function tabChanger(item, content) {
      item.forEach((tab, index) => {
         tab.addEventListener('click', function(){
            content.forEach(content => {
               content.classList.remove('active');
            })
            item.forEach(tab => {
               tab.classList.remove('active');
            })
          
            
            content[index].classList.add('active');
            item[index].classList.add('active'); 
           
            
         })
      })
   }
   function tabChangerAdaptive(item, content) {
      item.forEach((tab, index) => {
         tab.addEventListener('click', function(){
          
            
            content[index].classList.toggle('active');
            item[index].classList.toggle('active'); 
           
            
         })
      })
   }
   tabChanger(tabItem, tabContent);
   tabChangerAdaptive(tabItemAdaptive, tabContentAdaptive);

})