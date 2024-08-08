
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import './display.css';

function Display(){

    let dispatch=useDispatch();


    let info=useSelector((state)=>{
            return state;

    })

    return (
        <center><div className="data">
          <ul>
          
            {
                info.map((d)=>{
                    return <li><div>{d.name}</div> <div>{d.role}</div><span><button id="b" onClick={()=>{dispatch({type:"del", payload:d.id})
                console.log(d.id)
                }}>delete</button></span></li>
                })

                
            }
           </ul>
        </div></center>
    )
}

export default Display;
