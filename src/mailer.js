import nodemailer from 'nodemailer';

const from = '"Pathfinder Party Manager" <info@PPM.com>';

function setup(){
  return nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
}

export function sendConfirmationEmail(user){
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Welcome to Pathfinder Party Manager",
    text: `
      Welcome to Pathfinder Party Manager. Please confirm your email.

      ${user.generateConfirmationUrl()}
    `
  };

  transport.sendMail(email);
}
