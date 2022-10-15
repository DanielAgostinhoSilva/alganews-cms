import {Link} from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
    return <>
        <List>
            <Item><Link to="/">Home</Link></Item>
            <Item><Link to="contato">Contato</Link></Item>
        </List>
    </>
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`

const Item = styled.li`
  text-transform: lowercase;
  font-size: 16px;
  
  a {
    text-decoration: none;
    color: #274060
  }
  
`