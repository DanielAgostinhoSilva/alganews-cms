import CircleChart from "../components/CircleChart";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Metric} from "../../sdk/@types";
import MetricService from "../../sdk/services/Metric.service";

export default function UserTopTags() {
    const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])

    useEffect(() => {
        MetricService.getTop3Tags()
            .then(setTopTags)
    }, [])

    return <UserTopTagsWrapper>
        {
            topTags.map((tag, index) => {
                return <CircleChart
                    key={index}
                    size={88}
                    progress={tag.percentage}
                    caption={tag.tagName}
                    theme={index === 0 ? 'primary' : 'default'}/>
            })
        }
    </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`