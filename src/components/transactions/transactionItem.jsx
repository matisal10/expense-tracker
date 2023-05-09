import { useGlobalState } from '../../context/GlobalState';
import PropTypes from 'prop-types';

export default function TransactionItem({ transaction }) {

    const { deleteTransaction } = useGlobalState()

    return (
        <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center'>
            <p className='text-sm'>{transaction.description}</p>
            <div>
                <span> $ {transaction.amount}</span>
                <button className='ml-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm p-3  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
                    onClick={() => deleteTransaction(transaction.id)}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="18" height="18"
                        viewBox="0 0 24 24">
                        <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path>
                    </svg></button>
            </div>
        </li>
    )
}

TransactionItem.propTypes = {
    transaction: PropTypes.any
};
