import React from 'react';
import '../hoverItems.css'
import { useState,useEffect} from 'react';
export default function HoverItems(props) {
    const [proteinwidth,setproteinlevel] = useState(0);
    const [carbwidth,setcarblevel] = useState(0);
    const [fatwidth,setfatlevel] = useState(0);
    useEffect(() => {
        var proteinperc = Math.ceil(parseInt(props.rawdata["proteinIntake"])/parseInt(props.rawdata["proteinTarget"])*100);
        var carbperc = Math.ceil(parseInt(props.rawdata["carbIntake"])/parseInt(props.rawdata["carbTarget"])*100);
        var fatperc = Math.ceil(parseInt(props.rawdata["fatIntake"])/parseInt(props.rawdata["fatTarget"])*100);
        setproteinlevel(proteinperc);
        setcarblevel(carbperc);
        setfatlevel(fatperc);
    },[props.rawdata]);
    if(props.onhover){
        return (
            <div className="hoveritems" >
                <div className="protein">
                    <div className="heading-bar">
                        <div className="heading1">
                            <h5 className='head1'>Protein</h5>
                            <h5 className='head2'>{props.rawdata["proteinTarget"]}g</h5>
                        </div>
                        <div className="bar">
                            <div className="level" style={{width:`${proteinwidth}%`,background: "#F45C84"}}>
                            </div>
                        </div>
                        <h6 className='levelpos' style={{marginLeft:`${proteinwidth+2}%`,color:"#F45C84"}}>{props.rawdata["proteinIntake"]}g</h6>
                    </div>
                </div>
                <div className="carb">
                    <div className="heading-bar">
                        <div className="heading2">
                            <h5 className='head1'>Fats</h5>  
                            <h5 className='head2'>{props.rawdata["fatTarget"]}g</h5>
                        </div>
                        <div className="bar">
                            <div className="level" style={{width:`${fatwidth}%`,background: "#03C6FA"}}>
                            </div>
                        </div>
                        <h6 className='levelpos' style={{marginLeft:`${fatwidth+2}%`,color:"#03C6FA"}}>{props.rawdata["fatIntake"]}g</h6>
                    </div>  
                </div>
                <div className="fat">
                    <div className="heading-bar">
                        <div className="heading3">
                            <h5 className='head1'>Carbs</h5>
                            <h5 className='head2'>{props.rawdata["carbTarget"]}g</h5>
                        </div>
                        <div className="bar">
                            <div className="level" style={{width:`${carbwidth}%`,background:"#F5C90F"}}>
                            </div>
                        </div>
                        <h6 className='levelpos' style={{marginLeft:`${carbwidth+2}%`,color:"#F5C90F"}}>{props.rawdata["carbIntake"]}g</h6>
                    </div>
                </div>
            </div>
        )
    }
}
