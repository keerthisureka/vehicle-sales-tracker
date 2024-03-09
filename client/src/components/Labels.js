import React from 'react'
import {default as api} from '../store/apiSlice';
import { getLabels } from '../helper/helper';

const obj = [
    {
        type: 'Car',
        mod: 'Honda',
        units: 100,
        year: '2020',
        percent: 45,
        color: 'rgb(255, 99, 132)'
    },
    {
        type: 'Bike',
        mod: 'Honda',
        units: 200,
        year: '2019',
        percent: 20,
        color: 'rgb(54, 162, 235)'
    },
    {
        type: 'Scooter',
        mod: 'Honda',
        units: 250,
        year: '2022',
        percent: 10,
        color: 'rgb(255, 205, 86)'
    }
]

const Labels = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetCarsQuery()
  console.log(isFetching)
  return (
    <>
        {obj.map((v, i) => <LabelComponent key={i} data={v}></LabelComponent>)}
    </>
  )
}

function LabelComponent({data}) {
    if(!data) return <></>;
    return (
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{background: data.color ?? '#f9c74f'}}></div>
                <h3 className='text-md'>{data.mod ?? ""}</h3>
            </div>
            <h3 className='font-bold'>{data.percent ?? 0}%</h3>
        </div>
    )
}

export default Labels
