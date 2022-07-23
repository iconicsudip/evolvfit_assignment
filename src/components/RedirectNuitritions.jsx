import React from 'react';
import { useNavigate } from "react-router-dom";
import '../redirect.css';
export default function RedirectNuitritions(props) {
    let navigate = useNavigate();
    function changePage(id){
        var param = `${id}/nutrition`;
        navigate(param);
    }
  return (
    <div>
        <button className="btn btn-outline-primary button2" type="button" onClick={()=>changePage(props.userid)}> {`>`}</button>
        
    </div>
  )
}
