import React from 'react'
import { useSelector } from 'react-redux';

export default function CustomerView() {
const customers =  useSelector((state)=> state.customers)
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
