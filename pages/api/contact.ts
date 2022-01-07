import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
require('dotenv').config()

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
if (!SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is missing!')
} else {
  sgMail.setApiKey(SENDGRID_API_KEY)
}

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const msg = {
    to: process.env.CONTACT_EMAIL,
    from: `SecureU <${process.env.EMAIL}>`,
    subject: `${req.body.subject || 'SecureU - Get in touch'}`,
    text: req.body.message || 'SecureU - Get in touch',
    html: `
      <div><strong>Full name:</strong> ${req.body.name}</div>
      <div><strong>Phone:</strong> ${req.body.phone}</div>
      <div><strong>Email:</strong> ${req.body.email}</div>
      <div>${req.body.message}</div>
    `
  }

  try {
    // console.log("REQ.BODY", req.body);
    await sgMail.send(msg)
  } catch (error: any) {
    console.log(error)
    return res.status(error.statusCode || 500).json(error)
  }

  console.log('Sent! we’ll be in touch…')
  res.status(200).json({ message: 'Sent! we’ll be in touch…' })
}