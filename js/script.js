

(() =>{
 
  const openNavMenu = document.querySelector(".open-nav-menu"),
  closeNavMenu = document.querySelector(".close-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
  	navMenu.classList.toggle("open");
  	menuOverlay.classList.toggle("active");
  	document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
      	window.innerWidth <= mediaSize){
      	// prevent default anchor click behavior
      	event.preventDefault();
      	const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
        	collapseSubMenu();
        }
        else{
          // collapse existing expanded menuItemHasChildren
          if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
  	navMenu.querySelector(".menu-item-has-children.active .sub-menu")
  	.removeAttribute("style");
  	navMenu.querySelector(".menu-item-has-children.active")
  	.classList.remove("active");
  }
  function resizeFix(){
  	 // if navMenu is open ,close it
  	 if(navMenu.classList.contains("open")){
  	 	toggleNav();
  	 }
  	 // if menuItemHasChildren is expanded , collapse it
  	 if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
     	resizeFix();
     }
  });

})();
/* dark mode */
const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") document.body.classList.add("dark");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else window.localStorage.setItem("theme", "dark");
});

/* Botoes */


document.addEventListener("DOMContentLoaded", function () {
  const partsToToggle = [
    { buttonId: "toggleCowTorax", elementId: "torax", className: "toggledTorax" },
    { buttonId: "toggleCowHead", elementId: "cabeca", className: "toggledHead" },
    { buttonId: "toggleCowVertebra", elementId: "vertebra", className: "toggledVertebra" },
    { buttonId: "toggleCowForepaw", elementId: "pata-dianteira", className: "toggledForepaw" },
    { buttonId: "toggleCowBackpaw", elementId: "pata-traseira", className: "toggledBackpaw" }
  ];

  function toggleClass(elementId, className) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.classList.toggle(className);
    }
  }

  function addButtonClickListener(buttonId, elementId, className) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", () => {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
          if (targetElement.classList.contains(className)) {
            targetElement.classList.remove(className);
          } else {
            resetAnimalParts();
            targetElement.classList.add(className);
          }
        }
      });
    }
  }

  function resetAnimalParts() {
    partsToToggle.forEach(part => {
      const { elementId, className } = part;
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.classList.remove(className);
      }
    });
  }

  partsToToggle.forEach(part => {
    addButtonClickListener(part.buttonId, part.elementId, part.className);
  });
});

//toggle texts divs
document.addEventListener("DOMContentLoaded", function () {
  const divsToToggle = [
    { buttonId: "toggleCowTorax", elementId: "toraxDiv", className: "toggledToraxDiv" },
    { buttonId: "toggleCowHead", elementId: "headDiv", className: "toggledHeadDiv" },
    { buttonId: "toggleCowVertebra", elementId: "vertebraDiv", className: "toggledVertebraDiv" },
    { buttonId: "toggleCowForepaw", elementId: "forepawDiv", className: "toggledForepawDiv" },
    { buttonId: "toggleCowBackpaw", elementId: "backpawDiv", className: "toggledBackpawDiv" },
  ];

  function toggleDiv(elementId, className) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.classList.toggle(className);
    }
  }

  function addButtonClickListener(buttonId, elementId, className) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", () => {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
          if (targetElement.classList.contains(className)) {
            targetElement.classList.remove(className);
          } else {
            resetAnimalParts();
            toggleDiv(elementId, className);
          }
        }
      });
    }
  }

  function resetAnimalParts() {
    divsToToggle.forEach(part => {
      const { elementId, className } = part;
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.classList.remove(className);
      }
    });
  }

  divsToToggle.forEach(part => {
    addButtonClickListener(part.buttonId, part.elementId, part.className);
  });
});

/* toggle subs */
document.addEventListener("DOMContentLoaded", function () {
  const subsToToggle = [
    { buttonId: "toggleCowTorax", elementId: "text-torax", className: "toggledTextTorax" },
    { buttonId: "toggleCowHead", elementId: "text-cabeca", className: "toggledTextHead" },
    { buttonId: "toggleCowVertebra", elementId: "text-vertebra", className: "toggledTextVertebra" },
    { buttonId: "toggleCowForepaw", elementId: "text-pata-dianteira", className: "toggledTextForepaw" },
    { buttonId: "toggleCowBackpaw", elementId: "text-pata-traseira", className: "toggledTextBackpaw" },
  ];

  function toggleSub(elementId, className) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.classList.toggle(className);
    }
  }

  function addButtonClickListener(buttonId, elementId, className) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", () => {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
          if (targetElement.classList.contains(className)) {
            targetElement.classList.remove(className);
          } else {
            resetAnimalParts();
            toggleSub(elementId, className);
          }
        }
      });
    }
  }

  function resetAnimalParts() {
    subsToToggle.forEach(part => {
      const { elementId, className } = part;
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.classList.remove(className);
      }
    });
  }

  subsToToggle.forEach(part => {
    addButtonClickListener(part.buttonId, part.elementId, part.className);
  });
});
