import Chart, {ChartProps} from "../components/Chart/Chart"
import {useEffect, useState} from "react";
import MetricService from "../../sdk/services/Metric.service";
import transformEditorMonthlyEarningsIntoChartJs from "../../core/utils/transformEditorMonthlyEarningsIntoChartJs";
import withBoundary from "../../core/hoc/withBoundary";
import Skeleton from "react-loading-skeleton";

function UserPerformance () {
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
        return <div>
            <Skeleton height={227}/>
        </div>

    return <Chart
        title="Média de performance nos últimos 12 meses"
        data={editorEarnings}
    />
}

export default withBoundary(UserPerformance, 'performance')