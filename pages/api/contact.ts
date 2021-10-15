import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
require('dotenv').config()

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  secure: true,
})

console.log(process.env.EMAIL)

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mailData = {
    from: `SecureU <${process.env.EMAIL}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `${req.body.subject || 'SecureU - Get in touch'}`,
    text: req.body.message,
    html: `
      <div><strong>Full name:</strong> ${req.body.name}</div>
      <div><strong>Phone:</strong> ${req.body.phone}</div>
      <div><strong>Email:</strong> ${req.body.email}</div>
      <div>${req.body.message}</div>
    `
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err)
      res.status(500).json(err)
    } else {
      console.log(info)
      res.status(200).json({ message: 'Sent! we’ll be in touch…' })
    }
  })
}