// import './css/main.css'; 
const popupOpenButton = document.querySelectorAll(".product"); 
const popupCloseButton = document.querySelectorAll(".close_pop-up"); 
 
popupOpenButton.forEach((node, i) => { 
  node.addEventListener("click", () => { 
    const popupWindow = document.querySelectorAll(".pop-up-section")[i]; 
    popupWindow.classList.toggle("active"); 
  }); 
}); 
popupCloseButton.forEach((node, i) => { 
  node.addEventListener("click", () => { 
    const popupWindow = document.querySelectorAll(".pop-up-section")[i]; 
    popupWindow.classList.toggle("active"); 
  }); 
});