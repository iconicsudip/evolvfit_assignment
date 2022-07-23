import React from 'react';
import {PieChart} from 'react-minimal-pie-chart';
import HoverItems from './HoverItems';
import {useState} from "react";
import '../hoverItems.css';

export default function OnHover(props) {
    const [hover,sethover] = useState(false);
    
    var proteinpercent = (parseInt(props.nui_data["proteinIntake"])/parseInt(props.nui_data["proteinTarget"]))*33.33;
    var carbpercent = (parseInt(props.nui_data["carbIntake"])/parseInt(props.nui_data["carbTarget"]))*33.33;
    var fatpercent = (parseInt(props.nui_data["fatIntake"])/parseInt(props.nui_data["fatTarget"]))*33.34;
    var data = [
        { title: 'Protein', value: proteinpercent, color: '#F45C84' },
        { title: 'Carbs', value: carbpercent, color: '#F5C90F' },
        { title: 'Fats', value: fatpercent, color: '#03C7FC' },
    ]

    return (
        <>
            <div>
                <div onMouseOver={()=>sethover(true)} onMouseOut={()=>sethover(false)}>
                    <div className='showcalorie'>
                        <h5>{props.nui_data.stepsCalorie}</h5>
                        <h6>calories</h6>
                    </div>
                    <div className="piechart">
                        <PieChart 
                            data={data} 
                            radius={50} 
                            labelPosition={50} 
                            lengthAngle={360} 
                            lineWidth={25}
                        />
                    </div>
                </div>
                <div>
                    <HoverItems onhover={hover} rawdata={props.nui_data}/>
                </div>
            </div>
        </>
    )
}
