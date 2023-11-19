// contact.js


    const contactForm = document.querySelector('#contactForm');
  
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
          event.preventDefault();
      
          const name = contactForm.querySelector('input[name="name"]').value;
          const number = contactForm.querySelector('input[name="number"]').value;
          const email = contactForm.querySelector('input[name="email"]').value;
          const msg = contactForm.querySelector('input[name="msg"]').value;
      
          const data = {
            name,
            number,
            email,
            msg
          };
  
        // You can use the fetch API or any other method to send the data to the server
        // For simplicity, I'll use the fetch API in this example
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
  
            // You can update the UI or show a confirmation message based on the response
            if (result && result.message === 'Message sent successfully') {
              alert('Your message has been sent successfully!');
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

  