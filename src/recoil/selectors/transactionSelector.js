import { selector } from 'recoil';
import { transactionsState } from '../atoms/transactionAtom';

export const transactionSelector = selector({
    key: 'transactionSelector',
    get: ({ get }) => {
        const transactions = get(transactionsState);
        return transactions.map(transaction => ({
            ...transaction,
            date: new Date(transaction.date)
        }));
    }
});