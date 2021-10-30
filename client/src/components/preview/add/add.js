import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Add() {

    const fields = [
        'Snippets',
        'Websites',
        'Frameworks',
        'APIs',
        'Tools',
        'Images',
        'Text_Notes',
        'Papers'
    ];


    const state = useSelector((state)=>(state.Resource));
    var dispatch = useDispatch();


    function click(e){
        var data = state[e.target.id.toLowerCase()];
        console.log(data, state, e.target.id.toLowerCase());
        data.push("");
        dispatch({type:'update', key:e.target.id.toLowerCase(), value:data});
    }

    return (
        <div class="dropdown dropdown-hover dropdown-left dropdown-end m-3">
            <div tabindex="0" class="m-1 filter drop-shadow-xl btn bg-primary hover:bg-primary-focus border-0">open on hover</div>
            <ul tabindex="0" class="p-2 menu dropdown-content bg-base-100 rounded-box w-52 shadow-lg">
                {fields.map((feild) => (
                    <li>
                        <a onClick={click} id={feild}>{feild}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Add;