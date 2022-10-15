import styled from "styled-components";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings() {
    return <UserEarningsWrapper>
        <ValueDescriptor description={'ganhos no mês'} value={560322.32} color={'primary'} isCurrency={true}/>
        <ValueDescriptor description={'ganhos na semana'} value={560322.32} color={'primary'} isCurrency={true}/>
        <ValueDescriptor description={'ganhos no sempre'} value={560322.32} color={'default'} isCurrency={true}/>
        <ValueDescriptor description={'total de palavras'} value={2_345_347} color={'default'} isCurrency={false}/>
    </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`