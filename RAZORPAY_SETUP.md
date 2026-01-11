# Razorpay Test/Sandbox Keys Configuration Guide
# ================================================

## How to Set Up Razorpay Test Payments:

1. **Create a Razorpay Account:**
   - Visit: https://razorpay.com/
   - Sign up for a free account

2. **Get Test API Keys:**
   - Go to Dashboard > Settings > API Keys
   - Switch to "Test Mode" (toggle at top)
   - Click "Generate Test Keys"
   - You'll get:
     - Key ID (starts with rzp_test_...)
     - Key Secret (keep this confidential)

3. **Configure Environment Variables:**
   Create a `.env` file in the project root with:
   ```
   VITE_RAZORPAY_KEY_ID=rzp_test_your_key_here
   RAZORPAY_KEY_ID=rzp_test_your_key_here
   RAZORPAY_KEY_SECRET=your_secret_key_here
   PORT=5000
   ```

4. **Test Payment Details:**
   When testing payments in Test Mode, use:
   - **Test Card Number:** 4111 1111 1111 1111
   - **CVV:** Any 3 digits (e.g., 123)
   - **Expiry Date:** Any future date (e.g., 12/25)
   - **Name:** Any name
   - **Email:** Any valid email

5. **Current Status:**
   - ✅ Membership prices updated to Indian Rupees (₹)
   - ✅ Payment integration code is ready
   - ⚠️  Add your Razorpay test keys to `.env` file to enable payments
   - 💡 Without keys, payment will simulate success after 800ms

6. **Verify Integration:**
   - Restart the server after adding .env variables
   - Click "Pay Now" on any membership plan
   - Razorpay checkout should open with test mode
   - Use test card details to complete payment

## Additional Test Cards:
- **Visa:** 4111 1111 1111 1111
- **Mastercard:** 5555 5555 5555 4444
- **Rupay:** 6073 7491 3842 4826

For more test cards: https://razorpay.com/docs/payments/payments/test-card-details/
