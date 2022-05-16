import React from "react";
import styled from "styled-components";
import Button from "../../../../uikit/src/components/Button/Button";
import Text from "../../../../uikit/src/components/Text/Text";
import LinkExternal from "../../../../uikit/src/components/Link/LinkExternal";
import Flex from "../../../../uikit/src/components/Box/Flex";
import { Modal } from "../../../../uikit/src/widgets/Modal";
import CopyToClipboard from "./CopyToClipboard";
import { useWalletModal } from "./index";

interface Props {
  account: string;
  logout: () => void;
  login: any;
  onDismiss?: () => void;
  recentTransaction?: any;
  rowStatus?: any
  chainId?: any;
  clearTransaction?: any;
  isSwap?: any,
  transactionsForUIKit?: any
}

const Wrapper = styled.div`
  padding-bottom: 64px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0;
  }
`

const ConnectedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TransactionWrapper = styled.div`
  border-radius: 16px;
  padding: 24px;
  background-color: #F2F6FC;
`


const AccountModal: React.FC<Props> = ({transactionsForUIKit, isSwap, account, logout, onDismiss = () => null, login,recentTransaction,chainId,clearTransaction}) =>{

  const { onPresentConnectModal } = useWalletModal(login, logout, account,recentTransaction,chainId);

  const changeWalletHandler = async () => {
    await onDismiss();
    await logout();
    onPresentConnectModal();
  }

  const ClearAndDismiss = () => {
    clearTransaction();
    onDismiss();
  }

  return (
    <Modal title="Your wallet" onDismiss={onDismiss}>
      <Wrapper>
        <ConnectedWrapper>
          <Text fontSize='14px' fontWeight='400' lineHeight='21px' color='#1DC872'>Connected</Text>
          <Button onClick={changeWalletHandler} scale='sm' variant='primary'>Change</Button>
        </ConnectedWrapper>
        <Text
          fontSize="14px"
          fontWeight='600'
          color='#07162D'
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginBottom: "8px",
            marginTop: '16px'
          }}
        >
          {account}
        </Text>
        <Flex mb="32px">
          <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
          <LinkExternal ml='26px' small href={`https://bscscan.com/address/${account}`} mr="16px">
            View on BscScan
          </LinkExternal>
        </Flex>
        {
          isSwap && (
            <TransactionWrapper>
              <Flex justifyContent='space-between' alignItems='center'>
                <Text fontSize='14px' fontWeight='600' lineHeight='21px' color='#07162D'>
                  Recent transactions
                </Text>
                <Button m={0} p={0} scale='sm' variant='text' onClick={ClearAndDismiss}>
                  Clear All
                </Button>
              </Flex>
              <>
                {transactionsForUIKit()}
              </>
            </TransactionWrapper>
          )
        }
        <Flex>
          <Button
            style={{ width: '100%' }}
            mt='24px'
            variant="secondary"
            onClick={() => {
              logout();
              onDismiss();
            }}
          >
            Logout
          </Button>
        </Flex>
      </Wrapper>
    </Modal>
  );

}

export default AccountModal;
