
# Customer Details Portal


## Overview

The **Customer Details Portal** is a React-based web application designed to display customer information efficiently. The portal features a customer list on the left side, and upon selecting a customer, detailed information is shown on the right side, including a dynamic photo grid that refreshes every 10 seconds.

![homepage](https://github.com/user-attachments/assets/7c0efdd2-ded7-40c0-b2c9-70926b785878)


## Features

- **Customer List with Optimized Rendering**: The list of customers on the left panel is optimized for scalability, ensuring smooth performance even with a large number of entries.
- **Dynamic Customer Details Display**: Upon clicking a customer card, the corresponding details are shown on the right panel, providing a seamless user experience.
- **Auto-updating Photo Grid**: The photo grid displays nine random images which update every 10 seconds. Photos are fetched from a public API.
- **Best Practices in React and TypeScript**: The application follows React, HTML, CSS, and TypeScript best practices for layout, state management, and performance optimization.

## Project Structure

```
src/
│
├── components/
│   ├── CustomerCard.tsx
│   ├── CustomerDetails.tsx
│   ├── CustomerList.tsx
│   └── PhotoGrid.tsx
│
├── styles/
│   ├── CustomerCard.module.css
│   ├── CustomerDetails.module.css
│   ├── CustomerList.module.css
│   └── PhotoGrid.module.css
│
├── types/
│   └── Customer.ts
│
├── utils/
│   └── api.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## Key Optimizations

1. **Scalability in Customer List Rendering**:
    - The customer list is optimized for large datasets, ensuring minimal re-renders and efficient memory usage.
    
2. **Efficient State Management**:
    - Utilizes React hooks (`useState`, `useEffect`, `useRef` etc.) for managing state across components while preventing unnecessary re-renders.

3. **Auto-updating Photo Grid**:
    - The photo grid leverages `setInterval` within `useEffect` to refresh images every 10 seconds, ensuring up-to-date content display.

4. **TypeScript for Type Safety**:
    - TypeScript is used throughout the project to ensure type safety and reduce runtime errors.

## Installation

1. Clone the repository:

```bash
git clone https://github.com//VivekAsole/Customer_Details_Portal.git
```

2. Navigate to the project directory:

```bash
cd Customer_Details_Portal
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

