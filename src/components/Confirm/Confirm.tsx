import styled from "styled-components";
import Button from "../Button/Button";

export interface ConfirmProps {
    title: string
    onConfirm: () => any
    onCancel: () => any
}

export default function Confirm(props: ConfirmProps) {
    return <ConfirWrapper>
        <ConfirmTitle>{props.title}</ConfirmTitle>
        <ConfirmButtonDisplay>
            <Button variant={'danger'} label={'Não'} onClick={props.onCancel}/>
            <Button variant={'primary'} label={'Sim'} onClick={props.onConfirm}/>
        </ConfirmButtonDisplay>
    </ConfirWrapper>
}

const ConfirWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  background-color: #F2F8FA;
  width: 229px;
`

export const ConfirmTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`

export const ConfirmButtonDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`