"use strict";

import nodemailer from "nodemailer";

const mailConfig = {
  host: process.env.MAIL_HOST,
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,
};

export const transporter = nodemailer.createTransport({
  host: mailConfig.host,
  auth: {
    user: mailConfig.user,
    pass: mailConfig.pass,
  },
  secure: true,
});
