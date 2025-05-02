function proceed() {
    const dropdown = document.getElementById("nameDropdown");
    const name = dropdown.value;
  
    if (!name) {
      alert("Please select your name before proceeding.");
      return;
    }
  
    // Redirect to Page 2
    window.location.href = "page2.html";
  }
  