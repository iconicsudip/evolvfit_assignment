import React from 'react';
import {useParams} from 'react-router-dom';

export default function UserData(props) {
    var params = useParams();
    console.log(params);
  return (
    <div>
        User : {params['userid']} 
    </div>
  )
}
