import { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState';

export default function TransactionForm() {

    const {addTransaction} = useGlobalState()

    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0);


    const handleSubmit = (e)=> {
        e.preventDefault();
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount: +amount
        })
        setAmount(0)
        setDescription('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full' value={description}
                    type="text" placeholder='Enter a Description' onChange={(e) => setDescription(e.target.value)} />
                <input className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full' value={amount}
                    type="number" step="0.01" placeholder='00.00' onChange={(e) => setAmount(e.target.value)} />
                <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full'>Add Transaction</button>
            </form>
        </div>
    )
}
