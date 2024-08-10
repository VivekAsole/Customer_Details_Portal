import React, { useState } from 'react'
import CustomerList from './components/CustomerList'
import CustomerDetails from './components/CustomerDetails'
import { Customer } from './types/Customer'

//Sample Customer List
const customers: Customer[] = [
  { "id": "1", "name": "Customer 01", "title": "CEO", "address": "123 Main St, Anytown" },
  { "id": "2", "name": "Customer 02", "title": "CTO", "address": "456 Maple Ave, Othertown" },
  { "id": "3", "name": "Customer 03", "title": "CFO", "address": "789 Oak St, Anycity" },
  { "id": "4", "name": "Customer 04", "title": "COO", "address": "321 Pine St, Thistown" },
  { "id": "5", "name": "Customer 05", "title": "VP of Marketing", "address": "654 Birch Rd, Thatcity" },
  { "id": "6", "name": "Customer 06", "title": "VP of Sales", "address": "987 Cedar Blvd, Somewhere" },
  { "id": "7", "name": "Customer 07", "title": "VP of Engineering", "address": "135 Walnut St, Overthere" },
  { "id": "8", "name": "Customer 08", "title": "Director of Operations", "address": "246 Ash Ave, Yourtown" },
  { "id": "9", "name": "Customer 09", "title": "Director of Finance", "address": "579 Elm St, Mycity" },
  { "id": "10", "name": "Customer 10", "title": "Director of HR", "address": "864 Spruce St, Theircity" },
  { "id": "11", "name": "Customer 11", "title": "Manager of IT", "address": "753 Willow Ln, Anyplace" },
  { "id": "12", "name": "Customer 12", "title": "Manager of Operations", "address": "492 Fir St, Othertown" },
  { "id": "13", "name": "Customer 13", "title": "Manager of Finance", "address": "619 Maple St, Overthere" },
  { "id": "14", "name": "Customer 14", "title": "Manager of HR", "address": "248 Oak Ave, Anytown" },
  { "id": "15", "name": "Customer 15", "title": "Lead Developer", "address": "357 Pine St, Thatcity" },
  { "id": "16", "name": "Customer 16", "title": "Senior Developer", "address": "468 Birch Rd, Somewhere" },
  { "id": "17", "name": "Customer 17", "title": "Software Engineer", "address": "579 Cedar Blvd, Mycity" },
  { "id": "18", "name": "Customer 18", "title": "System Administrator", "address": "681 Walnut St, Yourtown" },
  { "id": "19", "name": "Customer 19", "title": "Network Engineer", "address": "792 Ash Ave, Thistown" },
  { "id": "20", "name": "Customer 20", "title": "Database Administrator", "address": "904 Elm St, Theircity" }, 
]

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0])

  return (
    <div>
      <header className='header'>Customer Details Portal</header>
      <div className="app">
        <CustomerList customers={customers} onSelect={setSelectedCustomer} selectedCustomer={selectedCustomer} />
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  )
}

export default App;
