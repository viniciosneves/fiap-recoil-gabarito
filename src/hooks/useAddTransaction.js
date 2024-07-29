import { useRecoilState } from 'recoil';
    import { transactionsState } from '../recoil/atoms/transactionAtom';

const useAddTransaction = () => {
    const [transactions, setTransactions] = useRecoilState(transactionsState);

    const addTransaction = (transactionType, transactionValue) => {
        const newId = transactions.length + 1;
        const value = parseFloat(transactionValue);
        const newTransaction = {
            id: newId,
            value: (transactionType === 'Depósito') ? Math.abs(value) : -Math.abs(value),
            type: transactionType,
            date: new Date().toISOString()
        };
        setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
    };

    return { addTransaction };
};

export default useAddTransaction;