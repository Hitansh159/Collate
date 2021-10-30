import { useSelector, useDispatch } from "react-redux";
import {useState} from 'react';


function InputText({label, placeholder}) {
    
    const state = useSelector((state)=>(state.Resource));
    var dispatch = useDispatch();

    function click(e){
        dispatch({type: 'update', key: label, value: e.target.value });  
    };

    return (
        <div className="flex flex-col">
            <label class="label w-full">
                <span class="card-title">{label}</span>
            </label>
            <input type="text" placeholder={placeholder} className="w-9/12 max-w-5xl mx-3 my-2 p-2 rounded-lg shadow-lg min-h-12 bg-base-200 hover:bg-base-100 focus:bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary-focus " onChange={click} disabled={!state.edit}/>
        </div>
    );
}

export default InputText;