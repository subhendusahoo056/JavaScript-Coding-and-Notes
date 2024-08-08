import { useDispatch } from "react-redux";
import { useState } from "react";
import './form.css';
function Add(){

    let dispatch=useDispatch()

    let [name,uname]=useState("");
    let [roll,uroll]=useState("");
    let [id,uid]=useState("");




    return(
       <center> <div className="in">
            
            
            <div>
            <input type="text" placeholder="enter name" onChange={(e)=>{
                uname(e.target.value)

            }}></input>
            </div>



           <div>
           <input type="number"  placeholder="enter id"  onChange={(e)=>{
                uid(e.target.value)

            }}></input>
           </div>
            
          <div>
          <input type="text"  placeholder="enter roll"  onChange={(e)=>{
                uroll(e.target.value)
                

            }}></input>
          </div>
            
        <div>
        <button id="u" onClick={()=>{
                dispatch({type:"add",payload:name,payload1:roll,payload2:id})
                uname("")
                uroll("")
                uid("")
            }
           
            
            }> Add Member</button>


        </div>
            

        </div></center>
    )
}

export default Add;
