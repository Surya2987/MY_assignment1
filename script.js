function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const errorDiv = document.getElementById("error");
    
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    
    if (!emailValue || !emailRegex.test(emailValue)) {
      errorDiv.innerHTML = "Please enter a valid email address.";
      errorDiv.style.color = "red";
    } else {
      errorDiv.innerHTML = "";
    }
  }

function changeText(sectionId) {
    const section = document.getElementById(sectionId);
    const currentText = section.innerHTML;
    const newText = currentText === "TO know the tip click the button " + sectionId + "." ? "Tip is " + sectionId + "!" : "it’s important to establish a clear schedule for the entire family. Consider how you might coordinate your schedules to accommodate the need for child care – perhaps one spouse works in the mornings while the other works a later day shift" + sectionId + ".";
    section.innerHTML = newText;
  }
  
  const accordions = document.getElementsByClassName("accordion");
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
function toggleSection() {
    const section = document.getElementById("sectionContent");
    if (section.style.display === "none") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }
var accordionButtons = document.getElementsByClassName("accordion-button");

for (var i = 0; i < accordionButtons.length; i++) {
  accordionButtons[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


  