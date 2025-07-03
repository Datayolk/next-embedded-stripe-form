import { redirect } from 'next/navigation'

import { stripe } from '../../lib/stripe'

export default async function Return({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
	const { session_id } = await searchParams

	if (!session_id) return

	const session = await stripe.checkout.sessions.retrieve(session_id as string, {
		expand: ['line_items', 'payment_intent']
	})
	const { status, customer_details } = session
	const customerEmail = customer_details?.email

	if (status === 'open') {
		return redirect('/')
	}

	if (status === 'complete') {
		return (
			<section id="success">
				<p>
					We appreciate your business! A confirmation email will be sent to{' '}
					{customerEmail}. If you have any questions, please email{' '}
				</p>
				{/* TODO: Change this email */}
				<a href="mailto:orders@example.com">orders@example.com</a>.
			</section>
		)
	}
}