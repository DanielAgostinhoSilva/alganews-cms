import CircleChart from "../components/CircleChart";
import styled from "styled-components";

export default function UserTopTags() {
    return <UserTopTagsWrapper>
        <CircleChart size={88} progress={80} caption={'JavaScript'} theme={'primary'}/>
        <CircleChart size={88} progress={30} caption={'Java'} />
        <CircleChart size={88} progress={24} caption={'Scrum'} />
    </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`