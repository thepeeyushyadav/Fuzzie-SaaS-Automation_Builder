'use client'
import React from 'react'

type Props = {
  onPayment(id: string): void
  products: any[]
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const SubscriptionCard = ({ onPayment, products }: Props) => {
  return (
    <section className="flex w-full justify-center md:flex-row flex-col gap-6">
      {products &&
        products.map((product: any) => (
          <Card
            className="p-3"
            key={product.id}
          >
            <CardHeader>
              <CardTitle>{product.nickname}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <CardDescription>
                {product.nickname == 'Unlimited'
                  ? 'Enjoy unlimited automation power — ideal for large-scale workflows.'
                  : product.nickname == 'Pro'
                  ? 'Supercharge your workflows with expanded capacity and priority support.'
                  : product.nickname == 'Free' &&
                    'Get started with Fuzzie and explore automation basics at no cost.'}
              </CardDescription>
              <div className="flex justify-between">
                <p>
                  {product.nickname == 'Free'
                    ? 'Starter'
                    : product.nickname == 'Pro'
                    ? 'Pro'
                    : product.nickname == 'Unlimited' && 'Unlimited'}{' '}
                  plan
                </p>
                <p className="font-bold">
                  {product.nickname == 'Free'
                    ? 'Free'
                    : product.nickname == 'Pro'
                    ? '$29.99'
                    : product.nickname == 'Unlimited' && '$99.99'}
                  /mo
                </p>
              </div>
              <Button
                onClick={() => onPayment(product.id)}
                variant="outline"
              >
                Purchase
              </Button>
            </CardContent>
          </Card>
        ))}
    </section>
  )
}
