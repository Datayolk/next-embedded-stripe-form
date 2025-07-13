import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: [
							"default-src 'self'",
							"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com",
							"style-src 'self' 'unsafe-inline'",
							"img-src 'self' data: https:",
							"connect-src 'self' https://api.stripe.com",
							"frame-src https://js.stripe.com",
							"font-src 'self'"
						].join('; ')
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY'
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin'
					}
				]
			}
		]
	}
};

export default nextConfig;
