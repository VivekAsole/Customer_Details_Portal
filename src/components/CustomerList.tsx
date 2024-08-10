import React, { useState, useRef, useEffect } from 'react'
import { Customer } from '../types/Customer'
import CustomerCard from './CustomerCard'
import styles from '../styles/CustomerList.module.css'

interface CustomerListProps {
  customers: Customer[]
  onSelect: (customer: Customer) => void
  selectedCustomer: Customer | null
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onSelect, selectedCustomer }) => {
  const [visibleCustomers, setVisibleCustomers] = useState<Customer[]>(customers.slice(0, 10))
  const containerRef = useRef<HTMLDivElement>(null)
  const firstVisibleIndexRef = useRef(0)
  const lastVisibleIndexRef = useRef(9)

  const handleScroll = () => {
    if (!containerRef.current) return

    const { scrollTop, clientHeight, scrollHeight } = containerRef.current

    // If the user has scrolled to the top of the list (upward scrolling)
    if (scrollTop === 0) {
      const prevIndex = firstVisibleIndexRef.current - 5
      if (prevIndex >= 0) {
        const newVisibleCustomers = customers.slice(prevIndex, prevIndex + 5)
        setVisibleCustomers((prev) => [...newVisibleCustomers, ...prev.slice(0, -5)])
        firstVisibleIndexRef.current -= 5
        lastVisibleIndexRef.current -= 5

        // Maintain scroll position after prepending items
        if (containerRef.current) {
          containerRef.current.scrollTop = 25
        }
      }
      return
    }

    // If the user has scrolled to the bottom of the list (downward scrolling)
    else if (scrollTop + clientHeight >= scrollHeight) {
      console.log("else if")
      const nextIndex = lastVisibleIndexRef.current + 1
      if (nextIndex < customers.length) {
        const newVisibleCustomers = customers.slice(nextIndex, nextIndex + 5)
        setVisibleCustomers((prev) => {

          return [...prev.slice(5), ...newVisibleCustomers]
        })
        firstVisibleIndexRef.current += 5
        lastVisibleIndexRef.current += 5
      }
    }

  }

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const containerHeight = window.innerHeight - 60

  return (
    <div ref={containerRef} className={styles.customerList} style={{ height: containerHeight, overflowY: 'auto' }}>
      {visibleCustomers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          onClick={() => onSelect(customer)}
          isSelected={selectedCustomer?.id === customer.id}
        />
      ))}
    </div>
  )
}

export default CustomerList;


