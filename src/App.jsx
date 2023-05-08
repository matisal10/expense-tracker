import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import Header from './components/header'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/transactionForm'
import TransactionList from './components/transactions/transactionList'

function App() {
  return (
    <div>

      <GlobalProvider >
        <Header />
        <Balance />
        <TransactionForm />
        <TransactionList />
      </GlobalProvider>
    </div>
  )
}

export default App