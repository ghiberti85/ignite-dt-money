import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/dt-money-logo.svg'
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoImg} alt="" />

                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <NewTransactionButton>Nova Transação</NewTransactionButton>
                        </Dialog.Trigger>
                    </Dialog.Root>

                    <Dialog.Portal>
                        <Dialog.Overlay />
                        <Dialog.Content>
                            <Dialog.Title>Nova Transação</Dialog.Title>
                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>

                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}