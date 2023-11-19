// booking.js

document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.querySelector('#bookingForm');
  
    if (bookingForm) {
      bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const name = bookingForm.querySelector('input[name="name"]').value;
        const date = bookingForm.querySelector('input[name="date"]').value;
        const ploc = bookingForm.querySelector('input[name="ploc"]').value;
        const dloc = bookingForm.querySelector('input[name="dloc"]').value;
        const number = bookingForm.querySelector('input[name="number"]').value;
  
        const data = {
          name,
          date,
          ploc,
          dloc,
          number
        };
  
        // You can use the fetch API or any other method to send the data to the server
        // For simplicity, I'll use the fetch API in this example
        fetch('/.netlify/functions/sendWhatsApp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(result => {
            // Handle the booking response here
            console.log(result);
  
            // You can update the UI or show a confirmation message based on the response
            if (result && result.message === 'Booking successful') {
              alert('Your booking is confirmed!');
            } else {
              alert('Something went wrong. Please try again.');
            }
          })
          .catch(error => {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
          });
      });
    }
  });
  