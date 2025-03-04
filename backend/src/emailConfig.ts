import nodemailer from 'nodemailer';

import config from '@/config';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: config.email.user,
    pass: config.email.password,
  },
});

export default transporter;
