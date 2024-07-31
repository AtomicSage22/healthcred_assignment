# HealthCRED Dashboard

HealthCRED Dashboard is a React-based application designed to visualize financial and claims data for hospitals. The dashboard provides an interactive interface to display various statistics using Chart.js.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Customization](#customization)
- [License](#license)

## Overview

The HealthCRED Dashboard fetches data from the HealthCRED API to present key metrics such as repayment amounts, claims status, and fund utilization. The user-friendly interface and responsive design make it easy to access and interpret the data.

## Features

- **Repayment Overview**: Visual representation of the amount repaid, upcoming repayments, and total due.
- **Claims Status**: Pie chart depicting the status of claims (Paid vs. Pending).
- **Limit Utilization**: Doughnut chart showing the percentage of utilized and unutilized funds.
- **Responsive Design**: Optimized for different devices and screen sizes.

## Technologies Used

- **Frontend**: React, Tailwind CSS, Chart.js
- **Backend**: HealthCRED API for data retrieval
- **Build Tool**: Vite
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js (version 14 or above)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/healthcred-dashboard.git
   cd healthcred-dashboard
   
2. **Install dependencies**:
    ```sh
    npm install
    # or
    yarn install

### Running the Application
1. **Start the development server**:
    ```sh
    npm run dev
    # or
    yarn dev
2. **Access the application**:
    ```sh
    Open your browser and navigate to http://localhost:5173.

## Customization
1. **Styling**:
Tailwind CSS is used for styling. You can customize the styles by modifying the classes in the component files or by updating the Tailwind configuration in tailwind.config.js.

2. **Chart Customization**:
The charts are implemented using Chart.js. You can customize the appearance and behavior of the charts by adjusting the options in the respective component files, such as RepaymentOverview.jsx, ClaimsStatus.jsx, and LimitUtilization.jsx.