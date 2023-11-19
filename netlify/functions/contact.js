
// Function for handling contact form submissions
exports.handlerContact = async function (event, context) {
    try {
      const { name, number, email, msg } = JSON.parse(event.body);
  
      const data = {
        "messaging_product": "whatsapp",
        "to": "971504308877",
        "type": "template",
        "template": {
          "name": "bookaljazeera_complaint",
          "language": {
            "code": "en_US"
          },
          "components": [
            {
              "type": "body",
              "parameters": [
                { "type": "text", "text": name },
                { "type": "text", "text": msg },
                { "type": "text", "text": number },
                { "type": "text", "text": email }
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
        body: JSON.stringify({ message: 'Message sent successfully' })
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Something went wrong. Please try again.' })
      };
    }
  };