import { NextResponse, NextRequest } from 'next/server'
import Stripe from 'stripe'

export async function GET(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET!)

  const products = await stripe.prices.list({
    limit: 3,
    expand: ['data.product'],
  })

  // Normalize so each price has a nickname (use product name as fallback)
  const normalized = products.data.map((price: any) => ({
    ...price,
    nickname: price.nickname || price.product?.name || 'Plan',
  }))

  return NextResponse.json(normalized)
}

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET!)
  const data = await req.json()
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: data.priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url:
      `${process.env.NEXT_PUBLIC_URL}/billing?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/billing`,
  })
  return NextResponse.json(session.url)
}
