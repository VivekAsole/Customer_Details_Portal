import React from 'react'
import { Customer } from '../types/Customer'
import styles from '../styles/CustomerCard.module.css'

interface CustomerCardProps {
  customer: Customer
  onClick: () => void
  isSelected: boolean
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, onClick, isSelected }) => {
  return (
    <div
      className={`${styles.customerCard} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </div>
  )
}

export default CustomerCard;
