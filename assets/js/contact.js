// contact.js

// Select the contact form by its ID
const contactForm = document.querySelector('#contactForm');

// Check if the contact form exists on the page
if (contactForm) {
  // Add a submit event listener to the contact form
  contactForm.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form input values
    const name = contactForm.querySelector('input[name="name"]').value;
    const number = contactForm.querySelector('input[name="number"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const msg = contactForm.querySelector('input[name="msg"]').value;

    // Create a data object with the form values
    const data = {
      name,
      number,
      email,
      msg
    };

    // Use the fetch API to send the data to the serverless function
    fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        // Handle the contact form submission response here
        console.log(result);

        // Update the UI or show a confirmation message based on the response
        if (result && result.message === 'Message sent successfully') {
          alert('Your message has been sent successfully!');
        } else {
          alert('Something went wrong. Please try again.');
        }
      })
      .catch(error => {
        // Handle errors and show an alert message
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
      });
  });
}
