import React from 'react';
import {CircularProgressbarWithChildren,buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import '../stepsbar.css';
export default function StepBar(props) {

    var stw = parseInt(props.steps.stepsWalked);
    var stt = parseInt(props.steps.stepsTarget);
    var percentage = (stw/stt)*100;
    return (
        <div className='stepsback'>
            <div className='stepsbar'>
                <CircularProgressbarWithChildren value={percentage}  styles={buildStyles({ strokeLinecap: "butt",textColor:"white",pathColor:"rgba(127, 209, 140, 1)" })} strokeWidth={10}>
                    <div className='stepsdetails'>
                        <h5>{props.steps.stepsWalked}</h5>
                        <h6>walked</h6>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    )
}
