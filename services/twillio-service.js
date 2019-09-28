const twilio = require('twilio');
const client = new twilio(process.env.TWILLIO_ID, process.env.TWILLIO_TOKEN);

module.exports = app => {

    sendMessage = (_, res) => {
        console.log('hello');
        return client.messages.create({
            body: 'Early Morning Notification',
            to: '+16083209137',  // Text this number
            from: '+14242310779' // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
    }
    
  
    app.post('/api/message', sendMessage);
};