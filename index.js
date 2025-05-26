import { Resend } from 'resend';
import 'dotenv/config'

const resend = new Resend(process.env.RESEND_API_KEY);

resend.emails.send({
  from: 'fabio@sushicompolenta.com.br',
  to: 'fabioseno+test@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});
