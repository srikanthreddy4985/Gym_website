import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Razorpay from 'razorpay'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// In-memory storage for demo; replace with DB in production
const feedbackItems = []

app.get('/api/health', (req, res) => {
  res.json({ ok: true, status: 'healthy' })
})

app.post('/api/feedback', (req, res) => {
  const { name, email, phone, rating, message } = req.body || {}
  if (!name || !email || !rating) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }
  const item = { id: Date.now().toString(), name, email, phone, rating, message, createdAt: new Date().toISOString() }
  feedbackItems.push(item)
  res.json({ ok: true, item })
})

app.get('/api/feedback', (req, res) => {
  res.json({ ok: true, items: feedbackItems })
})

app.post('/api/create-razorpay-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt = `rcpt_${Date.now()}` } = req.body || {}
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return res.status(400).json({ ok: false, error: 'Razorpay keys are not configured' })
    }
    if (!amount || Number.isNaN(Number(amount))) {
      return res.status(400).json({ ok: false, error: 'Invalid amount' })
    }
    const razorpay = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET })
    const order = await razorpay.orders.create({ amount, currency, receipt })
    res.json({ ok: true, order })
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Failed to create order', details: err?.message })
  }
})

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`)
})


