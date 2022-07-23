import React from 'react';
import {useState} from "react";
import NuiBar from './NuiBar';
import RedirectSteps from './RedirectSteps';
import RedirectNuitritions from './RedirectNuitritions';
import StepBar from './StepBar';
import '../users.css';
function Formatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}
function extract(date){
    let checkdate = {
        "01":"Jan",
        "02":"Feb",
        "03":"Mar",
        "04":"Apr",
        "05":"May",
        "06":"Jun",
        "07":"Jul",
        "08":"Aug",
        "09":"Sep",
        "10":"Oct",
        "11":"Nov",
        "12":"Dec"
    }
    return [checkdate[date.split("-")[1]],date.split("-")[2]]
}

export default function Users(props) {
    var num_step = parseInt(props.userData.stepsTarget);
    var num_nuitrition = parseInt(props.userData.calorieTarget);
    let [newnum_step,setnum_step] = useState(num_step);
    let [newnum_nui,setnum_nui] = useState(num_nuitrition);
    var steps_target = Formatter(newnum_step);
    var nuitrition_target = Formatter(newnum_nui);
    let inc_steps=()=>{
        setnum_step(newnum_step+500);
    }
    let dec_steps=()=>{
        if(newnum_step>0){
            setnum_step(newnum_step-500);
        }
    }
    let inc_nuitrition=()=>{
        setnum_nui(newnum_nui+100);
    }
    let dec_nuitrition=()=>{
        if(newnum_nui>0){
            setnum_nui(newnum_nui-100);
        }
    }
    const steps = {
        "stepsWalked":props.userData.stepsWalked,
        "stepsTarget":newnum_step
    }
    const nuitritions = {
        "stepsCalorie":props.userData.calorieIntake,
        "stepsTarget":newnum_nui,
        "proteinIntake":props.userData.proteinIntake,
        "proteinTarget":props.userData.proteinTarget,
        "carbIntake":props.userData.carbIntake,
        "carbTarget":props.userData.carbTarget,
        "fatIntake":props.userData.fatIntake,
        "fatTarget":props.userData.fatTarget
    }
    let date  = props.userData.performedDate;
    let scdate = props.userData.scheduledDate;
    var Todaydate = new Date();
    var year = Todaydate.getFullYear();
    var month = Todaydate.getMonth();
    var day = Todaydate.getDate();
    if(String(month).length!==2){
        month = "0"+String(month+1);
    }else{
        month = String(month+1);
    }
    var currdate = `${year}-${month}-${day}`;
    var validateDate = scdate===currdate;
    
    var exdate = extract(date);
    var scexdate = extract(scdate);

    return (
        <div className="col-sm userbox">
            {/* Avatar of an user */}
            <img src="avatar.svg" className="rounded-circle userimg" alt="Avatar" />
            {/* Name and Email of an user */}
            <div className='userdetails' >
                <h4 className='username'>{props.userData.name}</h4>
                <h6 className='useremail'>{props.userData.email}</h6>
            </div>
            <div className="col-sm innernav">
                <div className="col-sm" >
                    <div className='head'>
                        <div className='hbody1'>
                            <img src="person.svg" className='icon1' alt=""/>
                            <h4>Steps</h4>
                        </div>
                        <div className='hbody2' >
                            <img src="gym.svg" className='icon2' alt=""/>
                            <h4>Workout</h4>
                        </div>
                        <div className='hbody3' >
                            <img src="nutrition.svg" className='icon3' alt=""/>
                            <h4>Nutritions</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="responsiveuser">
                <ul className='mobilenav'>
                    <ul className='hbody1'>
                        <img src="person.svg" className='icon1' alt=""/>
                        <h4>Steps</h4>
                    </ul>
                    <ul className='hbody2' >
                        <img src="gym.svg" className='icon2' alt=""/>
                        <h4>Workout</h4>
                    </ul>
                    <ul className='hbody3' >
                        <img src="nutrition.svg" className='icon3' alt=""/>
                        <h4>Nutritions</h4>
                    </ul>
                </ul>
                        
                {/* Progress Bar of Steps */}
                <div className="steps">
                    <StepBar steps={steps}/>
                    {/* Steps Target */}
                    <div className='stepsbuttons'>
                        <button className="btn btn-outline-primary" type="button" onClick={inc_steps}>+</button>
                        <h4>{steps_target}</h4>
                        <h6>target</h6>
                        <button className="btn btn-outline-primary" type="button" onClick={dec_steps}>-</button>
                    </div>
                </div>
                {/* Schedule */}
                <div className='schedule'>
                    {/* Scheduled date with condition */}
                    <div className='schedule-details' >
                        <div className='details'>
                            <img  src="setdate.svg" alt="" />
                            <h4>{exdate[1]} {exdate[0]}</h4>
                        </div>
                        {validateDate?(
                            <div className='schedule-alert'>
                                <img src="schedule.png" alt="" width={"30px"}/>
                                <h4>{scexdate[1]} {scexdate[0]}</h4>
                            </div>
                        ):(
                            <div className='schedule-notalert'>
                                <img src="schedule.png" alt="" width={"30px"}/>
                                <h4>{scexdate[1]} {scexdate[0]}</h4>
                            </div>
                        )}
                    </div>
                    {/* Redirect steps button with condition */}
                    <RedirectSteps userid={props.userData.userId} feedback={props.userData.feedBack}/>
                    
                </div>
                <div className="nuiall">
                    {/* Progress Bar of Nuitritions */}
                    <NuiBar steps={nuitritions}/>
                    {/* Nuitritions Target */}
                    <div className='nuitritiondetails'>
                        <button className="btn btn-outline-primary" type="button" onClick={inc_nuitrition}>+</button>
                        <h4>{nuitrition_target}</h4>
                        <h6>target</h6>
                        <button className="btn btn-outline-primary" type="button" onClick={dec_nuitrition}>-</button>
                    </div>
                    {/* Redirect nuitrition button with condition */}
                    <div className='nuihover'>
                        <RedirectNuitritions userid={props.userData.userId} />
                    </div>
                </div>
                {/* Bell icon */}
            </div>
            <div className="bell">
                <img src="bell.svg" alt="" />
            </div>
        </div>
    )
}
