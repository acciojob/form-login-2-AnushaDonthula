//your JS code here. If required.
function displayFormData() {
    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const emailId = document.getElementById('emailId').value;

    // Format the alert message
    const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;

    // Display the alert
    alert(alertMessage);
}
