# Next.js Stripe Embedded Payment Form Template

A complete template for creating sales pages with embedded Stripe payment forms, designed specifically for non-technical users working with bolt.new AI-generated webapps.

## 🚀 What This Template Provides

This template is perfect for:

- **Non-technical entrepreneurs** who want to create sales pages quickly
- **bolt.new AI users** looking for a reliable payment integration template
- **Anyone** who needs a simple, secure payment solution without complex setup

## ✨ Features

- ✅ **Embedded Stripe Checkout** - Secure payment processing without redirects
- ✅ **Mobile-responsive design** - Works perfectly on all devices
- ✅ **TypeScript support** - Better code reliability and development experience
- ✅ **Modern UI with Tailwind CSS** - Beautiful, customizable styling
- ✅ **Server-side security** - Stripe keys handled securely on the backend
- ✅ **Return page handling** - Proper post-payment user experience

## 🔧 Quick Setup Guide

### Step 1: Create Your Stripe Account

1. Go to [stripe.com](https://stripe.com) and create a free account
2. Complete the account verification process
3. Navigate to your Stripe Dashboard

### Step 2: Create Your Product

1. In your Stripe Dashboard, go to **Products** → **Add Product**
2. Fill in your product details:
   - Product name
   - Description
   - Price
   - Currency
3. Copy the **Price ID** (it looks like `price_1234567890`)

### Step 3: Get Your API Keys

1. In Stripe Dashboard, go to **Developers** → **API Keys**
2. Copy your **Publishable Key** (starts with `pk_`)
3. Copy your **Secret Key** (starts with `sk_`)

### Step 4: Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
PRICE_ID=price_your_price_id_here
```

### Step 5: Install Dependencies & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your payment form in action!

## 🎨 Customization

### Modify the Sales Page

- Edit `src/app/page.tsx` to customize your sales page content
- Update `src/app/globals.css` for styling changes
- Replace images in the `public/` folder

### Customize the Payment Form

- Edit `src/components/checkout.tsx` to modify the payment form appearance
- Update `src/action/stripe.ts` to change payment settings (currency, mode, etc.)

### Update the Return Page

- Edit `src/app/return/page.tsx` to change the support email from `orders@example.com` to your actual support email address

## 📱 Using with bolt.new

This template is optimized for bolt.new AI generation:

1. **Fork or download** this repository
2. **Upload to bolt.new** as your starting template
3. **Prompt the AI** to modify the sales page content:
   - "Make this a landing page for selling online courses"
   - "Create a product showcase for digital downloads"
   - "Add testimonials and feature sections"
4. **Keep the payment integration** - it's already configured!

## 🔒 Security Notes

- Never expose your Stripe Secret Key in client-side code
- This template properly handles all sensitive operations on the server
- The `.env.local` file is ignored by Git for security

## 📚 Learn More & Documentation

### Stripe Resources

- [Stripe Documentation](https://stripe.com/docs) - Complete integration guide
- [Stripe Embedded Checkout](https://stripe.com/docs/checkout/embedded) - Specific documentation for this implementation
- [Stripe Testing](https://stripe.com/docs/testing) - Test card numbers and scenarios

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - Framework features and API
- [Next.js Learn](https://nextjs.org/learn) - Interactive tutorials
- [Next.js GitHub](https://github.com/vercel/next.js) - Source code and issues

### bolt.new Resources

- [bolt.new Documentation](https://bolt.new/docs) - AI webapp generation guide

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy with one click!

### Deploy on Netlify

1. Connect your GitHub repo to [Netlify](https://netlify.com)
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Add environment variables in Netlify dashboard

## 🆘 Common Issues & Solutions

### "Stripe key not found" error

- Ensure your `.env.local` file is in the project root
- Check that your environment variable names match exactly
- Restart your development server after adding environment variables

### Payment form not loading

- Verify your Stripe Publishable Key is correct
- Check browser console for JavaScript errors
- Ensure your Price ID exists in your Stripe account

### Test payments not working

- Use Stripe's test card numbers: `4242 4242 4242 4242`
- Make sure you're using test keys (not live keys) during development
- Check that your webhook endpoints are properly configured

## 💝 Support

Found this template helpful? Give it a ⭐ on GitHub!

Need help? Check the [Issues](https://github.com/your-username/next-embedded-stripe-form/issues) section or create a new issue.
