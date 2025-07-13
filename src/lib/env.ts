// Environment variable validation
export function validateEnv() {
	const requiredEnvVars = {
		STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
		NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
		PRICE_ID: process.env.PRICE_ID,
	}

	return {
		STRIPE_SECRET_KEY: requiredEnvVars.STRIPE_SECRET_KEY!,
		NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: requiredEnvVars.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
		PRICE_ID: requiredEnvVars.PRICE_ID!,
	}
}

export const env = validateEnv()
