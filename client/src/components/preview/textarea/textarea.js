import { useDispatch, useSelector } from "react-redux";

function Textarea({ name, id, groupName }) {


    const state = useSelector((state)=>(state.Resource));
    var dispatch = useDispatch();

    function changeHandeler(e){
        var arr = state[groupName];
        arr[id] = e.target.value;
        dispatch({type: 'update', key: groupName, value: arr });  
    };


    return (
        <div class="card shadow-lg bg-base-100 m-2">
            <div class="card-body">
                <h2 class="card-title dark:text-gray-400">{name}</h2>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Write your code here</span>
                    </label>
                    <textarea class="textarea h-24 textarea-bordered textarea-primary" placeholder={`Enter your ${groupName}`} disabled='true'></textarea>
                </div>
            </div>
        </div>
    )
}

export default Textarea;