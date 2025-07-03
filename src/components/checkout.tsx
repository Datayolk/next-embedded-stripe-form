'use client'

import { fetchClientSecret } from '@/action/stripe'
import {
	EmbeddedCheckout,
	EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

export default function Checkout() {
	return (
		<div id="checkout">
			<EmbeddedCheckoutProvider
				stripe={stripePromise}
				options={{ fetchClientSecret: fetchClientSecret as () => Promise<string> }}
			>
				<EmbeddedCheckout />
			</EmbeddedCheckoutProvider>
		</div>
	)
}