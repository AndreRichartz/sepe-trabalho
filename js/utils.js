export function addButtonClickListener(buttonId, elementId, className, arrToToggle, aditionalFunc = false) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", () => {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
          if (targetElement.classList.contains(className)) {
            targetElement.classList.remove(className);
          } else {
            resetParts(arrToToggle)
            aditionalFunc ? toggleContainerDescription(elementId, className) : targetElement.classList.add(className);
          }
        }
      });
    }
  }

const resetParts = (arrToToggle) => {
    arrToToggle.forEach(item => {
      const { elementId, className } = item;
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.classList.remove(className);
      }
    });
  }

const toggleContainerDescription = (elementId, className) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.classList.toggle(className);
    }
}
