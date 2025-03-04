import config from '../config';

import transporter from '../emailConfig';

export function sendEmail(to: string, subject: string, text: string) {
  const mailOptions = {
    from: config.email.user,
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
}
