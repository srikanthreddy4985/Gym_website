import { useState } from 'react'
import { motion } from 'framer-motion'
import { loadStripe } from '@stripe/stripe-js'
import { Link, useNavigate } from 'react-router-dom'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK || '')

export default function Membership() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const plans = [
    { id: 'plan_monthly', name: 'Monthly', price: 2900, display: '₹2,900/mo' },
    { id: 'plan_quarterly', name: 'Quarterly', price: 7900, display: '₹7,900/quarter' },
    { id: 'plan_yearly', name: 'Yearly', price: 24900, display: '₹24,900/year' },
  ]

  function loadRazorpayScript() {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true)
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  async function checkout(plan) {
    setLoading(true)
    try {
      const key = import.meta.env.VITE_RAZORPAY_KEY_ID
      const canUseRazorpay = key && await loadRazorpayScript()

      if (canUseRazorpay) {
        // Optional: create an order on backend if keys are configured
        let order = null
        try {
          const orderRes = await fetch('/api/create-razorpay-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: plan.price * 100, currency: 'INR' })
          })
          const orderJson = await orderRes.json()
          if (orderRes.ok && orderJson.ok) order = orderJson.order
        } catch { }
        const options = {
          key,
          amount: plan.price * 100, // paise (demo multiply to show amount clearly)
          currency: 'INR',
          name: 'IronForce Gym',
          description: `${plan.name} Membership`,
          image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d04c?q=80&w=400&auto=format&fit=crop',
          order_id: order?.id,
          handler: function (response) {
            navigate('/payment-success', { state: { plan: plan.name, amount: plan.display, paymentId: response.razorpay_payment_id } })
          },
          prefill: { name: '', email: '', contact: '' },
          notes: { plan: plan.id },
          theme: { color: '#ff2d2d' }
        }
        const rzp = new window.Razorpay(options)
        rzp.open()
        return
      }

      // Fallback demo: simulate success without payment SDK
      await new Promise(r => setTimeout(r, 800))
      navigate('/payment-success', { state: { plan: plan.name, amount: plan.display } })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container-xl py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Link to="/" className="btn-secondary">Back</Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gym-red bg-clip-text text-transparent">
          Membership Plans
        </h1>
        <p className="text-gray-300 mt-2">Choose a plan and start your transformation today.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {plans.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 flex flex-col overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gym-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="text-xl font-bold">{p.name}</div>
              <div className="text-3xl font-extrabold mt-2 bg-gradient-to-r from-gym-red to-red-400 bg-clip-text text-transparent">
                {p.display}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-gym-red">✓</span> Full gym access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gym-red">✓</span> Group classes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gym-red">✓</span> Trainer guidance
                </li>
              </ul>
              <motion.button
                disabled={loading}
                onClick={() => checkout(p)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary mt-6 w-full relative overflow-hidden"
              >
                {loading ? 'Processing...' : 'Pay Now'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

