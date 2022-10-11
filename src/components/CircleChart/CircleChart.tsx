import * as CC from './CircleChart.styles'
import {useEffect, useState} from "react";

export interface CircleChartProps {
    size: number
    progress: number
    caption?: string
    theme?: 'default' | 'primary'
    strokeWidth?: number
}

function CircleChart (props: CircleChartProps) {

    const getThemeColor = () => props.theme === 'primary' ? '#09f' : '#274060'

    const THEME = getThemeColor();
    const STROKE_WIDTH = props.strokeWidth || 8
    const STROKE_COLOR = THEME

    const CENTER = props.size / 2
    const RADIUS = props.size / 2 - STROKE_WIDTH / 2
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS

    const [offset, setOffeset] = useState(CIRCUMFERENCE)
    
    useEffect(() => {
        const progressOffset = ((100 - props.progress) / 100) * CIRCUMFERENCE
        setOffeset(progressOffset)
    },[setOffeset, CIRCUMFERENCE, props.progress, offset])

    return <CC.Wrapper>
        todo: circle chart
    </CC.Wrapper>
}

export default CircleChart