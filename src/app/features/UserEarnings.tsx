import styled from "styled-components";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";
import {useEffect} from "react";
import Skeleton from "react-loading-skeleton";
import useUser from "../../core/hooks/useUser";

export default function UserEarnings() {
    const {user, fetchUser} = useUser();

    useEffect(() => {
       fetchUser();
    }, [fetchUser])

    if(!user)
        return <UserEarningsWrapper style={{height: 123}}>
            <Skeleton width={150} height={40}/>
            <Skeleton width={150} height={40}/>
            <Skeleton width={150} height={40}/>
            <Skeleton width={150} height={40}/>
        </UserEarningsWrapper>

    return <UserEarningsWrapper>
        <ValueDescriptor description={'ganhos no mês'} value={user.metrics.monthlyEarnings} color={'primary'} isCurrency={true}/>
        <ValueDescriptor description={'ganhos na semana'} value={user.metrics.weeklyEarnings} color={'primary'} isCurrency={true}/>
        <ValueDescriptor description={'ganhos no sempre'} value={user.metrics.lifetimeEarnings} color={'default'} isCurrency={true}/>
        <ValueDescriptor description={'total de palavras'} value={user.metrics.lifetimeWords} color={'default'} isCurrency={false}/>
    </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`