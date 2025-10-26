import { useLocation, Link } from 'react-router-dom'

export default function PaymentSuccess() {
  const { state } = useLocation()
  return (
    <div className="container-xl py-20 text-center">
      <div className="inline-block px-6 py-4 rounded-xl border border-white/10 bg-white/5">
        <div className="text-2xl font-bold text-gym-red">Payment Successful</div>
        <p className="mt-2 text-gray-300">Thank you for joining IronForce Gym!</p>
        {state?.plan && (
          <p className="mt-2 text-sm text-gray-400">Plan: {state.plan} • Amount: {state.amount}</p>
        )}
        <Link to="/" className="btn-primary mt-4 inline-flex">Go to Home</Link>
      </div>
    </div>
  )
}

