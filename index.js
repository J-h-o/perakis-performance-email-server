import { SMTPClient } from 'emailjs';
import * as express from 'express';

const app = express();


const client = new SMTPClient({
	user: '',
	password: '',
	host: '',
	tls: true,
});

app.get('/email/:from/:phone/:text', function(req, res) {
    client.send(
        {
            text: req.params.text + "\nΤηλέφωνο Πελάτη: \n" + req.params.phone,
            from: req.params.from,
            to: 'perakisperformanceforward@getitparts.com',
            cc: '',
            subject: 'Ραντεβού πελάτη στην Perakis Performance' + req.params.from,
        },
        (err, message) => {
            console.log(err || message);
        }
    );
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Server listening on port 4000");
  });