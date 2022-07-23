import React from 'react';
import OnHover from './OnHover';
import '../nuitritionbar.css'
export default function NuiBar(props) {
    return (
        <div className="nuibar">
            <div className='nuibarhov' >
                <OnHover nui_data={props.steps}/>
            </div>
        </div>
    )
}
