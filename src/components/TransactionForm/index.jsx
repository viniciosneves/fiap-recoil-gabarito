import { useState } from "react"
import { Button, Card, Form, Heading, Input, Label, Select } from "./styles"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { transactionTypesState } from "../../recoil";
import { transactionsState } from "../../recoil/atoms/transactionAtom";

export const TransactionForm = () => {

    const [transactionType, setTransactionType] = useState('')
    const [transactionValue, setTransactionValue] = useState('')
    const transactionTypes = useRecoilValue(transactionTypesState);
    const setTransactions = useSetRecoilState(transactionsState

    );

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setTransactions(prevTransactions => {
            const newId = prevTransactions.length + 1;
            const newTransaction = {
                id: newId,
                value: parseFloat(transactionValue),
                type: transactionType,
                date: new Date().toISOString()
            };

            return [...prevTransactions, newTransaction];
        });
    };

    return (
        <Card>
            <Heading>
                Nova transação
            </Heading>
            <Form onSubmit={handleSubmit}>
                <Select
                    value={transactionType}
                    onChange={evt => setTransactionType(evt.target.value)}
                >
                    <option value="" disabled hidden>
                        Selecione o tipo de transação
                    </option>
                    {transactionTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </Select>
                <div>
                    <Label>
                        Valor
                    </Label>
                    <Input
                        placeholder="00,00"
                        type="number"
                        value={transactionValue}
                        onChange={evt => setTransactionValue(evt.target.value)}
                    />
                </div>
                <Button>
                    Concluir transação
                </Button>
            </Form>
        </Card>
    )
}