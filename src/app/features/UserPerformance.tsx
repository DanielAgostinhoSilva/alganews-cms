import Chart, {ChartProps} from "../components/Chart/Chart"
import {useEffect, useState} from "react";
import MetricService from "../../sdk/services/Metric.service";
import transformEditorMonthlyEarningsIntoChartJs from "../../core/utils/transformEditorMonthlyEarningsIntoChartJs";

export default function UserPerformance () {
    const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>()
    const [error, setError] = useState<Error>()

    useEffect(() => {
        MetricService
            .getEditorMonthlyEarnings()
            .then(transformEditorMonthlyEarningsIntoChartJs)
            .then(setEditorEarnings)
            .catch(error => {
                setError(new Error(error.message))
            })
    }, [])

    if(error)
        throw error

    if(!editorEarnings)
        return null

    return <Chart
        title="Média de performance nos últimos 12 meses"
        data={editorEarnings}
    />
}