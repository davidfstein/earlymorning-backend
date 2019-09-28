const twilio = require('twilio');
const client = new twilio(process.env.TWILLIO_ID, process.env.TWILLIO_TOKEN);

module.exports = app => {

    sendMessage = (req, res) => {
        console.log(req.body.name)
        return client.messages.create({
            body: req.body.name,
            to: '+16083209137',  // Text this number
            from: '+14242310779' // From a valid Twilio number
        })
        .then((message) => res.send(message));
    }
    
  
    app.post('/api/message', sendMessage);
};