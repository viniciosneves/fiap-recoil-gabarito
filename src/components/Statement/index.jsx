import { useRecoilValue } from "recoil";
import { Transaction } from "../Transaction";
import { Container, Heading, TransactionsList } from "./styles";
import { transactionSelector } from "../../recoil/selectors/transactionSelector";

export const Statement = () => {

    const transactions = useRecoilValue(transactionSelector);
    
    return (<Container>
        <Heading>
            Extrato
        </Heading>
        <TransactionsList>
            {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)}
        </TransactionsList>
    </Container>)
}