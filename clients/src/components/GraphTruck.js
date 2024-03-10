import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';
import LabelsTruck from './LabelsTruck';
import { chart_Data, getTotal } from '../helper/helperTruck';
import {default as api} from '../store/apiSlice';

Chart.register(ArcElement);

const GraphTruck = () => {
    const { data, isFetching, isSuccess, isError } = api.useGetTrucksQuery()
    let graphData;
    
    if(isFetching) {
        graphData = <div>Fetching</div>;
    }
    else if(isSuccess) {
        graphData = <Doughnut {...chart_Data(data)}></Doughnut>;
    }
    else if(isError) {
        graphData = <div>Error</div>
    }
    return (
        <div className="flex justify-content max-w-xs mx-auto">
            <div className="item">
                <div className="chart relative">
                    {graphData}
                    <h3 className="mb-4 font-bold title"><center>Total Sales
                        <span className="block text-3xl text-emerald-400">{getTotal(data)} units</span>
                    </center></h3>
                </div>
                <div className="flex flex-col py-10 gap-4">
                    {/* Labels */}
                    <LabelsTruck></LabelsTruck>
                </div>
            </div>
        </div>
    )
}

export default GraphTruck