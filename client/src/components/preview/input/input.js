import { useSelector, useDispatch } from "react-redux";
import {useState} from 'react';


function InputText({label, placeholder}) {
    
    const state = useSelector((state)=>(state.Resource));

    return (
        <div className="flex flex-col">
            <label class="label w-full">
                <span class="card-title text-primary-content">{label}</span>
            </label>
            <input type="text" placeholder={placeholder} className="text-primary-content w-9/12 max-w-5xl mx-3 my-2 p-2 rounded-lg shadow-lg min-h-12 bg-base-100 hover:bg-base-200 focus:bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary-focus " disabled required value={state[label.toLowerCase()]}/>
        </div>
    );
}

export default InputText;