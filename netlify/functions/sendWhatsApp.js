// netlify/functions/functions.js

const axios = require('axios');

// Function for handling booking requests
exports.handlerBooking = async function (event, context) {
  try {
    const { name, date, ploc, dloc, number } = JSON.parse(event.body);

    const data = {
      "messaging_product": "whatsapp",
      "to": "971504308877",
      "type": "template",
      "template": {
        "name": "bookaljazeera_taxi",
        "language": {
          "code": "en_US"
        },
        "components": [
          {
            "type": "body",
            "parameters": [
              { "type": "text", "text": name },
              { "type": "text", "text": date },
              { "type": "text", "text": ploc },
              { "type": "text", "text": dloc },
              { "type": "text", "text": number }
            ]
          }
        ]
      }
    };

    const config = {
      method: 'post',
      url: 'https://graph.facebook.com/v14.0/113129291576893/messages',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer EAAGPYZBl29wgBAPY5ZC38fPeuBQGEJtsr5goKkNIxvhkaUz0OUvgxDEDeSYMuzA1fYmHTLliV9HM6dgqZArgpk53aL2i6x7Abqjue1GMzGQbo9pOtgOgbNuqWw2n6USNY8I0P5bWAAhyLRy0sq5ALF1jFCkIDxNp7mi3TMPdRuAnmyEnF05'
      },
      data: JSON.stringify(data)
    };

    const response = await axios(config);
    console.log(JSON.stringify(response.data));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Booking successful' })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Something went wrong. Please try again.' })
    };
  }
};
