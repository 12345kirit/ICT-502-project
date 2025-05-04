function calculateTuition() {
  const program = document.getElementById("program").value;
  const semester = document.getElementById("semester").value;
  let feePerSemester;

  // Define tuition fees based on the program
  if (program === "undergraduate") {
    feePerSemester = 5000;
  } else if (program === "postgraduate") {
    feePerSemester = 8000;
  }

  // Calculate total tuition fee
  const totalTuition = feePerSemester * semester;
  document.getElementById("tuitionResult").innerText = `Total Tuition Fee: $${totalTuition}`;
}

function handleSubmitForm(event) {
  event.preventDefault();  // Prevent the default form submission
  alert("Your inquiry has been submitted successfully. We will contact you soon!");
  document.getElementById("inquiryForm").reset();  // Reset the form after submission
}
