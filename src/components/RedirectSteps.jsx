import React from 'react';
import { useNavigate } from "react-router-dom";
import '../redirect.css';
export default function RedirectSteps(props) {
    let navigate = useNavigate();
    function changePage(id){
        var param = `${id}/workout`;
        navigate(param);
    }

    var feedBack = props.feedback;
  return (
    <>
    {feedBack ? 
    (<div>
        <button className="btn btn-outline-primary button1" type="button" > {`!`}</button>
        
    </div>)
    : 
    (<div>
        <button className="btn btn-outline-primary button2" type="button" onClick={()=>changePage(props.userid)}> {`>`}</button>
        
    </div>)}
    </>
  )
}
