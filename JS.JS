// Update Date and Time
const updateDateTime = () => {
    document.getElementById("date-time").innerText = new Date().toLocaleString();
  };
  setInterval(updateDateTime, 1000); // Update every second
  
  // Form Validation and Calculation
  function validateAndCalculate() {
    let isValid = true;
  
    // Name Validation
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
      isValid = false;
      nameError.innerText = "Name is required.";
      name.classList.add("invalid");
    } else {
      nameError.innerText = "";
      name.classList.remove("invalid");
      name.classList.add("valid");
    }
  
    // Age Validation
    const age = document.getElementById("age");
    const ageError = document.getElementById("ageError");
    if (age.value <= 0 || age.value > 120 || age.value.trim() === "") {
      isValid = false;
      ageError.innerText = "Please enter a valid age (1-120).";
      age.classList.add("invalid");
    } else {
      ageError.innerText = "";
      age.classList.remove("invalid");
      age.classList.add("valid");
    }
  
    // Height Validation
    const height = document.getElementById("height");
    const heightError = document.getElementById("heightError");
    if (height.value <= 0 || height.value.trim() === "") {
      isValid = false;
      heightError.innerText = "Height must be greater than 0.";
      height.classList.add("invalid");
    } else {
      heightError.innerText = "";
      height.classList.remove("invalid");
      height.classList.add("valid");
    }
  
    // Weight Validation
    const weight = document.getElementById("weight");
    const weightError = document.getElementById("weightError");
    if (weight.value <= 0 || weight.value.trim() === "") {
      isValid = false;
      weightError.innerText = "Weight must be greater than 0.";
      weight.classList.add("invalid");
    } else {
      weightError.innerText = "";
      weight.classList.remove("invalid");
      weight.classList.add("valid");
    }
  
    // Gender Validation
    const gender = document.querySelector('input[name="gender"]:checked');
    const genderError = document.getElementById("genderError");
    if (!gender) {
      isValid = false;
      genderError.innerText = "Please select your gender.";
    } else {
      genderError.innerText = "";
    }
  
    // Fitness Goals Validation
    const goals = document.querySelectorAll('input[name="goals"]:checked');
    const goalsError = document.getElementById("goalsError");
    if (goals.length === 0) {
      isValid = false;
      goalsError.innerText = "Please select at least one fitness goal.";
    } else {
      goalsError.innerText = "";
    }
  
    // Perform BMI Calculation if the form is valid
    if (isValid) {
      const bmi = (weight.value / ((height.value / 100) ** 2)).toFixed(2);
      let healthStatus = "";
  
      if (bmi < 18.5) healthStatus = "Underweight";
      else if (bmi >= 18.5 && bmi <= 24.9) healthStatus = "Normal weight";
      else if (bmi >= 25 && bmi <= 29.9) healthStatus = "Overweight";
      else healthStatus = "Obese";
  
      // Generate Report
      const report = `
        Name: ${name.value}
        Age: ${age.value}
        BMI: ${bmi}
        Health Status: ${healthStatus}
        Goals: ${Array.from(goals).map((g) => g.value).join(", ")}
      `;
      document.getElementById("report").value = report;
    }
  }