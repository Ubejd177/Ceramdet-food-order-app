import React, { useState } from 'react';

export default function OrderForm({ order, onRemove, onSubmit }: { order: any[]; onRemove: (idx: number) => void; onSubmit: (order: any[], name?: string) => void }) {
  const [customer, setCustomer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (order.length === 0 || !customer) return;
    onSubmit(order, customer);
    setCustomer('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
      <h2>Your Order</h2>
      <ul>
        {order.map((item, idx) => (
          <li key={idx}>
            {item.qty > 1 ? `${item.qty}x ` : ''}{item.name} - ${item.price.toFixed(2)}
            <button type="button" style={{ marginLeft: 8, background: '#e00' }} onClick={() => onRemove(idx)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Your name"
        value={customer}
        onChange={e => setCustomer(e.target.value)}
        required
        style={{ marginRight: 8 }}
      />
      <button type="submit" disabled={order.length === 0 || !customer}>
        Place Order
      </button>
    </form>
  );
}
