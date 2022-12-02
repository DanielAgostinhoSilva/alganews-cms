import Chart, {ChartProps} from "../components/Chart/Chart"
import {useEffect, useState} from "react";
import transformEditorMonthlyEarningsIntoChartJs from "../../core/utils/transformEditorMonthlyEarningsIntoChartJs";
import withBoundary from "../../core/hoc/withBoundary";
import Skeleton from "react-loading-skeleton";
import {MetricService} from "das-agnews-sdk";
import usePerformance from "../../core/hooks/usePerformance";

function UserPerformance () {
    const {fetchPerformance, performance} = usePerformance();

    useEffect(() => {
       fetchPerformance()
    }, [fetchPerformance])

    if(!performance)
        return <div>
            <Skeleton height={227}/>
        </div>

    return <Chart
        title="Média de performance nos últimos 12 meses"
        data={performance}
    />
}

export default withBoundary(UserPerformance, 'performance')