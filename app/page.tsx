"use client";
import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import OrderForm from '../components/OrderForm';

export default function HomePage() {
  const [order, setOrder] = useState<any[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [adminInput, setAdminInput] = useState('');
  const [locations, setLocations] = useState<string[]>(["Kuzina", "Extrem", "Bosna", "Chepizza", "Gjakova"]);
  const [activeLocation, setActiveLocation] = useState<string>("Kuzina");
  useEffect(() => {
  fetch('http://192.168.33.55:4000/location')
      .then(res => res.json())
      .then(data => {
        if (data.location && locations.includes(data.location)) {
          setActiveLocation(data.location);
        }
      })
      .catch(() => {});
  }, [locations]);
  const [newLocation, setNewLocation] = useState("");
  const [menus, setMenus] = useState<{ [loc: string]: any[] }>({
  // Only Kuzina and Extrem remain
    "Kuzina": [
      { id: 1, name: 'File pule me sos curry', price: 3.50 },
      { id: 2, name: 'File pule me sos te shpis', price: 3.50 },
      { id: 3, name: 'File pule me sos meksikane', price: 3.50 },
      { id: 4, name: 'Shnicell pule', price: 3.50 },
      { id: 5, name: 'Pule amerikane', price: 3.50 },
      { id: 6, name: 'Gjysme pule', price: 3.50 },
      { id: 7, name: 'Gullash', price: 4.00 },
      { id: 8, name: 'Pasul', price: 3.50 },
      { id: 9, name: 'Paul pa mish', price: 3.00 },
      { id: 10, name: 'Speca te mbushura', price: 3.50 },
      { id: 11, name: 'Hamburger klasik', price: 2.50 },
      { id: 12, name: 'Hamburger pule', price: 2.50 },
      { id: 13, name: 'Cheeseburger', price: 2.50 },
      { id: 14, name: 'Hamburger Kuzina', price: 3.50 },
      { id: 15, name: 'Pide boloneze', price: 3.50 },
      { id: 16, name: 'Pide me porshut', price: 3.00 },
      { id: 17, name: 'Pide me mish pule', price: 3.00 },
      { id: 18, name: 'Pide me suxhuk', price: 3.00 },
      { id: 19, name: 'Pide me tune', price: 3.00 },
      { id: 20, name: 'Samun Kuzina', price: 3.50 },
      { id: 21, name: 'Samun me porshut', price: 2.50 },
      { id: 22, name: 'Samun me mish pule', price: 3.00 },
      { id: 23, name: 'Samun me suxhuk', price: 2.50 },
      { id: 24, name: 'Makarona boloneze', price: 3.50 },
      { id: 25, name: 'Makarona Arabiata', price: 3.50 },
      { id: 26, name: 'Lazanja', price: 4.00 },
    ],
    "Extrem": [
      { id: 1, name: 'Sandwich pule ', price: 3.50, image: 'https://cms.extremeks.com/uploads/30_fcf785d2b9.jpg' },
      { id: 2, name: 'Llokuma', price: 3.20, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F2_9e0c865ad3.jpg&w=256&q=75' },
      { id: 3, name: 'Sandwich Tuna', price: 3.50, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F17_a24cf97c2a.jpg&w=256&q=75' },
      { id: 4, name: 'Risotto Pule', price: 4.50, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FRISOTO_f7b7f8d9cc.jpg&w=256&q=75' },
      { id: 5, name: 'Chicken Fingers', price: 4.00, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F13_a30437f51d.jpg&w=256&q=75' },
      { id: 6, name: 'Chicken Nuggets', price: 4.00, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F14_8c7ec52237.jpg&w=256&q=75' },
      { id: 7, name: 'Cordon Bleu', price: 4.50, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F08_ca6ab9a15a.jpg&w=256&q=75' },
      { id: 8, name: 'Skenderbeg', price: 4.00, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F25_80af55ed74.jpg&w=256&q=75' },
      { id: 9, name: 'Extreme Chicken Burger', price: 3.50, image: 'https://cms.extremeks.com/uploads/00_8604734490.jpg' },
      { id: 10, name: 'Doner pule ne pete', price: 3.00, image: 'https://cms.extremeks.com/uploads/doner_ne_pete_5ae882e0a6.jpg' },
  { id: 11, name: 'Crunch Sandwich Chicken', price: 3.00, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FCRUNCH_07c98d7391.jpg&w=256&q=75' },
  { id: 12, name: 'Sandwich Vegetarian ', price: 3.00, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FVEGJETARIAN_a3fbf1c5f7.jpg&w=256&q=75' },
  { id: 13, name: 'Samun me suxhuk', price: 3.00, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FSAMUNI_ME_SUXHUK_045ebaab7c.jpg&w=256&q=75' },    
  { id: 14, name: 'Samun me doner ', price: 3.00, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2Fxzvzz_dfa36c9f26.jpg&w=256&q=75' },
  { id: 15, name: 'Samun me proshute', price: 3.00, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2Fasdsada_9024726e11.jpg&w=256&q=75' },
  { id: 16, name: 'Samun Mix', price: 3.50, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FSAMUN_MIX_37b0ebc078.jpg&w=256&q=75' },
  { id: 17, name: 'Samun Tune', price: 4.00, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FSAMUN_TUNA_d0283d035d.jpg&w=256&q=75' },
  { id: 18, name: 'Samun Vegjetarian', price: 3.00, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FSAMUNG_VEGJETARINA_c26d5a40c1.jpg&w=256&q=75' },
  { id: 19, name: 'Samun Extreme', price: 3.50, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F1231_09de76a8fc.jpg&w=256&q=75' },
  { id: 20, name: 'Samun Chilli ', price: 3.00, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FSAMUN_CHILLI_ba16954154_copy_c06a25e221.jpg&w=256&q=75' },
  { id: 21, name: 'Banjalluqki ', price: 3.00, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FBANJALLUQKI_e1a398c5b8.jpg&w=256&q=75' },
  { id: 22, name: 'Burger n pitalkë ', price: 3.50, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2F01_2e0a2e4e76_065016f4fe.jpg&w=256&q=75' },
        { id: 23, name: 'Pomfrit i shtëpisë ', price: 3.00, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2Fpomfrit_i_shtepsie_c67f269ea2.jpg&w=256&q=75' },
        { id: 24, name: 'File pule ', price: 4.50, image: 'https://www.extremeks.com/_next/image?url=https%3A%2F%2Fcms.extremeks.com%2Fuploads%2FFILE_PULE_13257a93c0.jpg&w=256&q=75' },
    ],
    "Bosna": [
      { id: 1, name: 'Hamburger me promfrit mrena', price: 3.30 },
      { id: 2, name: 'Hamburger me promfirta jasht', price: 3.30 },
      { id: 3, name: 'gjysm banjalluke', price: 4.00 },
      { id: 4, name: ' banjalluk', price: 6.00 },
      { id: 5, name: 'Sanwich porshute', price: 3.00 },
      { id: 6, name: 'Sanwich pule', price: 3.00 },
      { id: 7, name: 'Burek me djath', price: 1.50 },
      { id: 8, name: 'Burek me spanaq', price: 1.50 },
      { id: 9, name: 'Burek mw mish', price: 1.50 },
      { id: 10, name: 'Promfrit', price: 1.50 },
      { id: 11, name: 'File pule', price: 3.00 },
      { id: 12, name: 'Qebaba 5', price: 3.00 },
      { id: 13, name: 'Qebaba 7', price: 4.00 },
      { id: 14, name: 'Qebaba 8', price: 4.50 },
      { id: 15, name: 'Sendwich pule', price: 3.50 },
    ],
    "Chepizza": [
      { id: 1, name: 'Pizza Peperoni', price: 2.50, image:'https://imageproxy.wolt.com/assets/68590298fde5cbbcef538e72?w=300' },
      { id: 2, name: 'Pizza Margarita', price: 2.50, image:'https://imageproxy.wolt.com/assets/68590298fde5cbbcef538e71?w=300'},
      { id: 3, name: 'Pizza Maksikane', price: 2.50, image:'https://imageproxy.wolt.com/assets/6859029afde5cbbcef538e76?w=300'},
      { id: 4, name: 'Pizza Fungi', price: 2.50, image:'https://imageproxy.wolt.com/assets/68590298fde5cbbcef538e70?w=300'},
      { id: 5, name: 'Pizza Tuna', price: 2.50, image:'https://imageproxy.wolt.com/assets/68590296fde5cbbcef538e6e?w=300'},
      { id: 6, name: 'Pizza Pule', price: 2.50, image:'https://imageproxy.wolt.com/assets/68590296fde5cbbcef538e6c?w=300'},
    ],
    "Gjakova": [
      { id: 1, name: 'Qebaba 5', price: 2.80 },
      { id: 2, name: 'qebaba 6', price: 3.30 },
      { id: 3, name: 'Qbaba 7', price: 3.90 },
      { id: 4, name: 'qebaba 8', price: 4.40 },
      { id: 5, name: 'File kackavall', price: 2.80 },
      { id: 6, name: 'File Kackavall e aljvar', price: 2.80 },
      { id: 7, name: 'File Kajmak', price: 2.80 },
      { id: 8, name: 'Mish ne tel', price: 2.50 },
      { id: 9, name: 'Sallat shope', price: 2.00 },
      { id: 10, name: 'sallat prizreni', price: 2.00 },


    ],
  });
  const [newMenu, setNewMenu] = useState('');

  const handleAdd = (item: any) => {
    setOrder(prev => {
      const idx = prev.findIndex((o) => o.id === item.id && o.name === item.name && o.price === item.price);
      if (idx !== -1) {
        // Item exists, increase quantity
        const updated = [...prev];
        updated[idx] = { ...updated[idx], qty: (updated[idx].qty || 1) + 1 };
        return updated;
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  };

  const handleRemove = (idx: number) => {
    setOrder(order => {
      const updated = [...order];
      if (updated[idx].qty && updated[idx].qty > 1) {
        updated[idx] = { ...updated[idx], qty: updated[idx].qty - 1 };
      } else {
        updated.splice(idx, 1);
      }
      return updated;
    });
  };

  const handleSubmit = async (order: any[], name?: string) => {
    if (name === '54503512345') {
      setAdmin(true);
      setSubmitted(false);
      setOrder([]);
      setCustomerName('');
      return;
    }
    // Send order to backend
  await fetch('http://192.168.33.55:4000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ order, customer: name, location: activeLocation })
    });
    setSubmitted(true);
    setOrder([]);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
        <Menu />
        <h1 style={{ margin: 0 }}>Ceramdent order app</h1>
      </div>
      {/* Admin/location controls and admin code section */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>
          Location: {admin ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <select
                  value={activeLocation}
                  onChange={e => setActiveLocation(e.target.value)}
                  style={{ padding: 6, borderRadius: 4, border: '1px solid #ccc', width: 180, marginRight: 8 }}
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
                <button
                  type="button"
                  style={{ background: '#0070f3', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 14px', marginRight: 8 }}
                  onClick={async () => {
                    await fetch('http://192.168.33.55:4000/location', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ location: activeLocation })
                    });
                    // Fetch the latest location from backend and update state
                    const res = await fetch('http://192.168.33.55:4000/location');
                    const data = await res.json();
                    if (data.location && locations.includes(data.location)) {
                      setActiveLocation(data.location);
                    }
                    alert('Location saved for all users!');
                  }}
                >
                  Save
                </button>
                {locations.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm(`Delete location "${activeLocation}"?`)) {
                        const idx = locations.indexOf(activeLocation);
                        const newLocs = locations.filter(l => l !== activeLocation);
                        setLocations(newLocs);
                        setActiveLocation(newLocs[Math.max(0, idx - 1)] || newLocs[0]);
                      }
                    }}
                    style={{ background: '#e00', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 14px', marginRight: 8 }}
                  >
                    Delete
                  </button>
                )}
              </div>
              <input
                type="text"
                value={newLocation}
                onChange={e => setNewLocation(e.target.value)}
              />
              {admin && (
                <div style={{ marginTop: 16 }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      type="button"
                      style={{ background: '#222', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 14px' }}
                      onClick={async () => {
                        const res = await fetch('http://192.168.33.55:4000/orders');
                        const data = await res.json();
                        if (!data.orders.length) {
                          alert('No orders yet.');
                        } else {
                          const orderStrings = data.orders.map((o: any) => {
                            const date = o.time ? new Date(o.time).toLocaleString() : '';
                            const total = o.order.reduce((sum: number, i: any) => sum + (i.price * (i.qty || 1)), 0).toFixed(2);
                            return `${o.customer} (${o.location})\n${date}\n` + o.order.map((i: any) => `${i.qty || 1}x ${i.name}`).join(', ') + `\nTotal: €${total}`;
                          });
                          const combinedTotal = data.orders.reduce((sum: number, o: any) => sum + o.order.reduce((s: number, i: any) => s + (i.price * (i.qty || 1)), 0), 0).toFixed(2);
                          const itemMap: { [name: string]: number } = {};
                          data.orders.forEach((o: any) => {
                            o.order.forEach((i: any) => {
                              itemMap[i.name] = (itemMap[i.name] || 0) + (i.qty || 1);
                            });
                          });
                          const combinedItems = Object.entries(itemMap)
                            .map(([name, qty]) => `Total: ${qty}x ${name}`)
                            .join('\n');
                          alert(orderStrings.join('\n\n') + `\n\nCombined Total: €${combinedTotal}` + (combinedItems ? `\n${combinedItems}` : ''));
                        }
                      }}
                    >
                      Show All Orders
                    </button>
                    <button
                      type="button"
                      style={{ background: '#0070f3', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 14px' }}
                      onClick={async () => {
                        const res = await fetch('http://192.168.33.55:4000/orders');
                        const data = await res.json();
                        const printWindow = window.open('', '', 'width=800,height=600');
                        if (printWindow) {
                          printWindow.document.write('<html><head><title>All Orders</title></head><body>');
                          printWindow.document.write('<h2>All Orders</h2>');
                          let combinedTotal = 0;
                          const itemMap = {};
                          if (data.orders.length) {
                            data.orders.forEach((o: any) => {
                              const date = o.time ? new Date(o.time).toLocaleString() : '';
                              printWindow.document.write(`<div style=\"margin-bottom:16px;\"><strong>${o.customer} (${o.location})</strong><br>${date}<br>${o.order.map((i: any) => `${i.qty || 1}x ${i.name}`).join(', ')}</div>`);
                              o.order.forEach((i: any) => {
                                itemMap[i.name] = (itemMap[i.name] || 0) + (i.qty || 1);
                                combinedTotal += i.price * (i.qty || 1);
                              });
                            });
                            printWindow.document.write(`<div style=\"margin-top:24px;font-weight:bold;\">Combined Total: €${combinedTotal.toFixed(2)}</div>`);
                            Object.entries(itemMap).forEach(([name, qty]) => {
                              printWindow.document.write(`<div>Total: ${qty}x ${name}</div>`);
                            });
                          } else {
                            printWindow.document.write('<div>No orders yet.</div>');
                          }
                          printWindow.document.write('</body></html>');
                          printWindow.document.close();
                          printWindow.focus();
                          printWindow.print();
                        }
                      }}
                    >
                      Print
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>Location: {activeLocation}</>
          )}
        </div>
        {/* Admin code section as sibling, not nested */}
        <div style={{ marginTop: 16 }}>
          <label htmlFor="admin-code" style={{ fontWeight: 'bold', display: 'block', marginBottom: 4 }}>Admin Code</label>
          <input
            id="admin-code"
            type="password"
            value={adminInput}
            onChange={e => setAdminInput(e.target.value)}
            style={{ padding: 6, borderRadius: 4, border: '1px solid #ccc', width: 140, marginRight: 8 }}
            placeholder="Enter code"
            disabled={admin}
          />
          <button
            type="button"
            onClick={() => {
              if (adminInput === '54503512345') {
                setAdmin(true);
                setAdminInput('');
              } else {
                alert('Invalid code');
              }
            }}
            disabled={admin || !adminInput}
            style={{ background: '#0070f3', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 14px', cursor: admin ? 'not-allowed' : 'pointer' }}
          >
            {admin ? 'Admin' : 'Enter'}
          </button>
          {admin && (
            <button
              type="button"
              style={{ background: '#e00', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 14px', marginTop: 12, display: 'block' }}
              onClick={async () => {
                if (window.confirm('Are you sure you want to reset all orders?')) {
                  const res = await fetch('http://192.168.33.55:4000/orders/reset', { method: 'POST' });
                  if (res.ok) {
                    alert('All orders have been reset!');
                  } else {
                    alert('Failed to reset orders.');
                  }
                }
              }}
            >
              Reset All Orders
            </button>
          )}
        </div>
      </div>
      {/* Menu section below admin controls */}
      <div style={{ marginBottom: 24 }}>
        {menus[activeLocation] && menus[activeLocation].length > 0 ? (
          <ul style={{ display: 'flex', flexWrap: 'wrap', padding: 0, listStyle: 'none' }}>
            {menus[activeLocation].map((item, idx) => (
              <li
                key={item.id}
                style={{
                  flex: '0 0 50%',
                  boxSizing: 'border-box',
                  padding: '0 8px 16px 0',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {item.image && (
                  <img src={item.image} alt={item.name} style={{ width: 144, height: 144, objectFit: 'cover', marginRight: 8, borderRadius: 6 }} />
                )}
                <span>{item.name} - €{item.price.toFixed(2)}</span>
                <button style={{ marginLeft: 8 }} onClick={() => handleAdd(item)}>
                  Add
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div>No menu items for this location.</div>
        )}
      </div>
          {menus[activeLocation] && menus[activeLocation].length > 0 ? (
            <ul style={{ display: 'flex', flexWrap: 'wrap', padding: 0, listStyle: 'none' }}>
              {menus[activeLocation].map((item, idx) => (
                <li
                  key={item.id}
                  style={{
                    flex: '0 0 50%',
                    boxSizing: 'border-box',
                    padding: '0 8px 16px 0',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {item.image && (
                    <img src={item.image} alt={item.name} style={{ width: 144, height: 144, objectFit: 'cover', marginRight: 8, borderRadius: 6 }} />
                  )}
                  <span>{item.name} - €{item.price.toFixed(2)}</span>
                  <button style={{ marginLeft: 8 }} onClick={() => handleAdd(item)}>
                    Add
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div>No menu items for this location.</div>
          )}
  {/* End menu section */}
      {admin ? (
        <div style={{ color: 'red', fontWeight: 'bold', fontSize: 20, marginBottom: 24 }}>Admin Mode Activated</div>
      ) : null}
      <OrderForm order={order} onRemove={handleRemove} onSubmit={(order, name) => { setCustomerName(name || ''); handleSubmit(order, name); }} />
      {submitted && <div style={{ color: 'green', marginTop: 16 }}>Order placed! Thank you!</div>}
    </main>
  );
}
