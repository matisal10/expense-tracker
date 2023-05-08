import { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState';

export default function TransactionForm() {

    const {addTransaction} = useGlobalState()

    const [description, setDescription] = useState()
    const [amount, setAmount] = useState(0);


    const handleSubmit = (e)=> {
        e.preventDefault();
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter a Description' onChange={(e) => setDescription(e.target.value)} />
                <input type="number" step="0.01" placeholder='00.00' onChange={(e) => setAmount(e.target.value)} />
                <button>Add Transaction</button>
            </form>
        </div>
    )
}
