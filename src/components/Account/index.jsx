import { useRecoilValue } from "recoil";
import { Balance } from "./Balance";
import { BalanceWrapper, Card, DateWrapper, Heading } from "./styles"
import { accountBalanceSelector } from "../../recoil/selectors/accountBalanceSelector";


const options = {
  weekday: 'long',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
};

export const Account = () => {

    const balance = useRecoilValue(accountBalanceSelector);


    return (<Card>
        <div>
            <Heading>
                Olá, Joana! :)
            </Heading>
            <DateWrapper>
                {new Date().toLocaleDateString('pt-BR', options)}
            </DateWrapper>
        </div>
        <BalanceWrapper>
            <Balance valor={balance}/>
        </BalanceWrapper>
    </Card>)
}