
function toggleLeftShortcuts() {
   let quick= document.querySelector(".page-content .left-shortcuts .quick-items");
   let detailed= document.querySelector(".page-content .left-shortcuts .detailed-items");

   if(quick.style.display=="none"){
    quick.style.display="block"
    detailed.style.display = "none";
   }
   else {
    quick.style.display="none"
    detailed.style.display = "block";
   }
}