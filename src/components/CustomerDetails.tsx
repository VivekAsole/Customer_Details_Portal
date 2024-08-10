import React from 'react'
import { Customer } from '../types/Customer'
import PhotoGrid from './PhotoGrid'
import styles from '../styles/CustomerDetails.module.css'

interface CustomerDetailsProps {
  customer: Customer
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  return (
    <div className={styles.customerDetails}>
      <h2>{customer.name}</h2>
      <p>Title: {customer.title}</p>
      <p>Address: {customer.address}</p>
      <PhotoGrid customer={ customer } />
    </div>
  );
};

export default CustomerDetails;
