import React from 'react'
import Users from './Users'
import '../dashboard.css'

export default function Dashboard(props) {
    return (
        <>
        <div className='back'>
            <div className="row dashboard">
                <div className="col-sm dashboardnav">
                    <div className='gap1'></div>
                    <div className='gap2'></div>
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
                {props.users.map(data=>{
                        return <Users userData = {data}/>
                })}
            </div>
        </div>
        </>
    )
}
