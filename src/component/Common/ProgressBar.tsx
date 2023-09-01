import { Space, Typography } from "antd";
import {TfiLayoutMenuSeparated} from 'react-icons/tfi' 
import ReactApexChart from "react-apexcharts";

const options = {
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 150
        }
      },
      legend: {position: 'bottom'}
    }],
    legend: {show: false},
    labels: ['Reviune', 'Material', 'Development', 'Productioin', 'Company'],
  }

const series = [440, 150, 550, 130, 870]
const list = options.labels.map((name, index) => ({name, data: series[index]}))

export default function ProgressBar() {
  return (
    <div className="table progress">
        <Space className="table__header">
            <Typography.Title className="table__title">Spend By Category</Typography.Title>
            <TfiLayoutMenuSeparated />
        </Space>

        <div className="table__content">
            <ReactApexChart options={options} series={series} type="donut" />
            <ul className="progress__list">
                {list.map((item, idx) => (
                    <li className="list-item" key={idx}>
                        <span className="list-item__type">{item.name}</span>
                        <span className="list-item__value">{item.data}$</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
