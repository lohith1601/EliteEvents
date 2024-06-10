import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { IEvent } from '@/lib/database/models/event.model';
import { checkoutOrder } from '@/lib/actions/order.actions';

// Ensure the stripe object is loaded
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({ event, userId }: { event: IEvent, userId: string }) => {

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  const onCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show an alert to the user
    alert('Payment integration is under development. You will be able to buy tickets soon.');

    // Prevent further processing since payment system is under development
    return;
  };

  return (
    <form onSubmit={onCheckout} method='post'>
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? 'Get Ticket' : 'Buy Ticket'}
      </Button>
    </form>
  );
};

export default Checkout;
