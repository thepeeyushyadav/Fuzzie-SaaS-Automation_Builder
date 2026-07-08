'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SubscriptionCard } from './subscription-card'

type Props = {}

const BillingDashboard = (props: Props) => {
  const [stripeProducts, setStripeProducts] = useState<any>([])

  const onStripeProducts = async () => {
    const { data } = await axios.get('/api/payment')
    if (data) {
      setStripeProducts(data)
    }
  }

  useEffect(() => {
    onStripeProducts()
  }, [])

  const onPayment = async (id: string) => {
    const { data } = await axios.post(
      '/api/payment',
      { priceId: id },
      { headers: { 'Content-Type': 'application/json' } }
    )
    window.location.assign(data)
  }

  return (
    <div className="flex gap-5 p-6">
      <SubscriptionCard
        onPayment={onPayment}
        products={stripeProducts}
      />
    </div>
  )
}

export default BillingDashboard
