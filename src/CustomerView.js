import React from 'react'

export default function CustomerView({customers}) {
  return (
    <div>
      <h2>Customer List</h2>
      <ul style={{listStyle: 'none',}}>
        {customers.map((customer) => (
          <li>{customer}</li>
        ))}
      </ul>
    </div>
  );
}
