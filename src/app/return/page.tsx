import { redirect } from 'next/navigation'
import { stripe } from '../../lib/stripe'

export default async function Return({ searchParams }: { searchParams: Promise<{ session_id: string }> }) {
	try {
		const { session_id } = await searchParams

		if (!session_id || typeof session_id !== 'string') {
			return redirect('/')
		}

		const session = await stripe.checkout.sessions.retrieve(session_id, {
			expand: ['line_items', 'payment_intent']
		})

		const { status, customer_details } = session
		const customerEmail = customer_details?.email

		if (status === 'open') {
			return redirect('/')
		}

		if (status === 'complete') {
			return (
				<section id="success" className="container mx-auto px-4 py-8">
					<div className="max-w-md mx-auto text-center bg-green-50 p-6 rounded-lg border border-green-200">
						<h2 className="text-2xl font-semibold text-green-800 mb-4">Payment Successful!</h2>
						<p className="text-gray-700 mb-4">
							We appreciate your business! A confirmation email will be sent to{' '}
							<span className="font-semibold">{customerEmail}</span>.
						</p>
						<p className="text-sm text-gray-600">
							If you have any questions, please email{' '}
							{/* TODO: Change this email */}
							<a href="mailto:support@yourcompany.com" className="text-blue-600 hover:underline">
								support@yourcompany.com
							</a>
						</p>
					</div>
				</section>
			)
		}

		return (
			<section className="container mx-auto px-4 py-8">
				<div className="max-w-md mx-auto text-center bg-yellow-50 p-6 rounded-lg border border-yellow-200">
					<h2 className="text-2xl font-semibold text-yellow-800 mb-4">Payment Status Unknown</h2>
					<p className="text-gray-700">
						Please contact support if you need assistance.
					</p>
				</div>
			</section>
		)
	} catch {
		return redirect('/')
	}
}