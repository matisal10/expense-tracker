import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import PropTypes from 'prop-types';


const initialState = {
    transactions: []
}

export const Context = createContext()

export const useGlobalState = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalState");
    }
    return context
}

export const GlobalProvider = ({ children }) => {
    

    const [state, dispatch] = useReducer(AppReducer, initialState,
        () => {
            const localData = localStorage.getItem('transactions')
            return localData ? JSON.parse(localData) : initialState
        }
    );

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(state))
    }, [state]);

    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRASANCTION",
            payload: id
        })
    }

    return (
        <Context.Provider value={{ transactions: state.transactions, addTransaction, deleteTransaction }}>
            {children}
        </Context.Provider>
    )
}

GlobalProvider.propTypes = {
    children: PropTypes.any
};
