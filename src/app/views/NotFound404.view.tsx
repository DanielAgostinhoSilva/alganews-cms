import notFound from '../../assets/NotFound.svg'
import Button from "../components/Button/Button";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

export default function NotFound404() {
    const navigate = useNavigate();
    return <NofFound404Wrapper>
        <span>Oops!</span>
        <h1>Não encontramos esta página</h1>
        <img src={notFound} alt="Não encontrado"/>
        <Button
            variant={'primary'}
            label={'Ir para a home'}
            onClick={() => navigate("/", {replace: true})}
        />
    </NofFound404Wrapper>
}

const NofFound404Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  
  span {
    font-size: 72px;
  }
  
  h1 {
    font-size: 18px;
    font-weight: 400;
  }
`