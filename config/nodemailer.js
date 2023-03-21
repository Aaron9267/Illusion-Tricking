import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: email,
        pass,
    },
    tls: {
        rejectUnauthorized: false
      }
})

export const mailOptions = {
    from:email,
    to: email,
}