import { SMTPClient } from 'emailjs';
import express from 'express';

const app = express();

app.get('/email/:from/:phone/:text', function(req, res) {
    const client = new SMTPClient({
        user: '',
        password: '',
        host: '',
        tls: true,
    });

    client.send(
        {
            text: req.params.text + "\nΤηλέφωνο Πελάτη: \n" + req.params.phone,
            from: req.params.from,
            to: 'perakisperformanceforward@getitparts.com',
            cc: '',
            subject: 'Ραντεβού ' + req.params.from + ' στην Perakis Performance',
        },
        (err, message) => {
            console.log(err || message);
        }
    );
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Server listening on port 4000");
  });