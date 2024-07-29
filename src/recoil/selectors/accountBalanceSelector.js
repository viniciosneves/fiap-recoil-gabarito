// accountBalanceSelector

import { selector } from 'recoil';
import { transactionsState } from '../atoms/transactionAtom';

export const accountBalanceSelector = selector({
    key: 'accountBalanceSelector',
    get: ({ get }) => {
        const transactions = get(transactionsState);
        return transactions.reduce((total, transaction) => total + transaction.value, 0);
    },
});