import styled from "styled-components";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";
import {useEffect, useState} from "react";
import {User} from "../../sdk/@types";
import UserService from "../../sdk/services/User.service";

export default function UserEarnings() {
    const [user, setUser] = useState<User.Detailed>()

    useEffect(() => {
        UserService
            .getDeatiledUser(7)
            .then(setUser)
    }, [])

    if(!user)
        return null

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