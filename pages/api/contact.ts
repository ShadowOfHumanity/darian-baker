// Next.js API route for sending contact emails
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Configure your SMTP credentials here
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: email,
      to: 'darianbakerbray@gmail.com',
      subject: `Contact from ${name}`,
      text: message
    })
    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
