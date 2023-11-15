import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/dt-money-logo.svg'

export function Header() {
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoImg} alt="" />
                    
                    <NewTransactionButton>Nova Transação</NewTransactionButton>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}