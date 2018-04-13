import nodemailer from 'nodemailer'
import Email from 'email-templates'

var transporter = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS
  }
});

class Mailer {

  static send (data, callback) {
    const email = new Email({
      message: {
        from: data.from
      },
      transport: transporter,
      send: true,
      views: { root: 'src/emails' }
    });

    email
      .send({
        template: 'deals',
        message: {
          to: data.to,
          subject: data.subject
        },
        locals: {
          deal: data.deal
        }
      })
      .then((data) => callback(null, data))
      .catch((data) => callback(data));

  }
}
export default Mailer;
