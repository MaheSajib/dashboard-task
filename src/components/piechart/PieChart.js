import React, { useState } from 'react';
import "../../../node_modules/react-vis/dist/style.css";
import { RadialChart, Hint } from 'react-vis';

const PieChart = () => {

    const [value, setValue] = useState({ value: false });

    return (
        <RadialChart
            className={'donut-chart-example'}
            innerRadius={100}
            radius={140}
            getAngle={d => d.theta}
            data={[
                { theta: 2, className: 'custom-class' },
                { theta: 6 },
                { theta: 2 },
                { theta: 3 },
                { theta: 1 }
            ]}
            onSeriesMouseOut={() => setValue({ value: false })}
            width={300}
            height={300}
            padAngle={0.04}
        >{value !== false && <Hint value={value} />}</RadialChart>
    );
};

export default PieChart;