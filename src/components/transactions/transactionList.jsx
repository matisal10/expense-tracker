import { useGlobalState } from '../../context/GlobalState';
import TransactionItem from './transactionItem';

export default function transactionList() {

    const { transactions } = useGlobalState()

    return (
        <>
            <h3 className='text-slate-300 text-xl font-bold block'>History</h3>
            <ul>
                {
                    transactions.map(transaction => (
                        <TransactionItem transaction={transaction} key={transaction.id} />
                    ))
                }
            </ul>
        </>
    )
}

