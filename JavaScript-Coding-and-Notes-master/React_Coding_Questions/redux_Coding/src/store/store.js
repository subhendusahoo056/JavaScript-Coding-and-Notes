import {createStore} from 'redux';

let data=[
    {
        name:"mohith",
        role:"mern dev",
        id:7
    }
]
function Reducerfun(state=data,action){

    switch(action.type){

        case "add":
           
        let newdata=[
            ...state,
            {
                name:action.payload,
                role:action.payload1,
                id:action.payload2
            }

        ]

        return newdata;
        break;

        case "del":
        
        let newdaata=state.filter((d)=>{
               return d.id!=action.payload;

        })

        return newdaata;
        break;

        default :
             return state;
        break;


    }

       

}


let store=createStore(Reducerfun);

store.dispatch({type:"add",payload:"jaya laxmi",payload1:"backend",payload2:3})
console.log(store.getState());



export default store;

