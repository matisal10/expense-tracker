import React from 'react'
import { useGlobalState } from '../../context/GlobalState';

export default function transactionList() {

    const { transactions } = useGlobalState()

    

    return (
        <div> {
            transactions.map(transaction => (
                <div key={transaction.id}>
                    <p>{transaction.description}</p>
                    <span>{transaction.amount}</span>
                    <button onClick={()=>{}}>X</button>
                </div>
            ))
        } </div>
    )
}
