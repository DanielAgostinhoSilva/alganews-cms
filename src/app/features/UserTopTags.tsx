import CircleChart from "../components/CircleChart";
import styled from "styled-components";
import {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import {Metric, MetricService} from "das-agnews-sdk";

export default function UserTopTags() {
    const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])
    const [error, setError] = useState<Error>()

    useEffect(() => {
        MetricService.getTop3Tags()
            .then(setTopTags)
            .catch(error => {
                setError(new Error(error.message))
            })
    }, [])

    if(error)
        throw error

    if(!topTags.length)
        return <UserTopTagsWrapper>
            <Skeleton height={88} width={88} circle />
            <Skeleton height={88} width={88} circle />
            <Skeleton height={88} width={88} circle />
        </UserTopTagsWrapper>

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