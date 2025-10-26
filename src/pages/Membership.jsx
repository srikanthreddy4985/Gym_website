import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Link, useNavigate } from 'react-router-dom'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK || '')

export default function Membership() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const plans = [
    { id: 'plan_monthly', name: 'Monthly', price: 2900, display: '$29/mo' },
    { id: 'plan_quarterly', name: 'Quarterly', price: 7900, display: '$79/quarter' },
    { id: 'plan_yearly', name: 'Yearly', price: 24900, display: '$249/year' },
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
        } catch {}
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
      <h1 className="text-4xl font-bold">Membership Plans</h1>
      <p className="text-gray-300 mt-2">Choose a plan and start your transformation today.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {plans.map((p) => (
          <div key={p.id} className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
            <div className="text-xl font-bold">{p.name}</div>
            <div className="text-3xl font-extrabold mt-2">{p.display}</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>• Full gym access</li>
              <li>• Group classes</li>
              <li>• Trainer guidance</li>
            </ul>
            <button disabled={loading} onClick={() => checkout(p)} className="btn-primary mt-6">{loading ? 'Processing...' : 'Pay Now'}</button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-sm text-gray-400">
        Prefer Razorpay or PayPal? We can enable them with live keys.
      </div>

      <div className="mt-8">
        <Link to="/" className="btn-secondary">Back to Home</Link>
      </div>
    </div>
  )
}

