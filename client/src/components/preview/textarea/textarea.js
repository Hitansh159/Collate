import { useDispatch, useSelector } from "react-redux";

function Textarea({ name, id, groupName }) {


    const state = useSelector((state)=>(state.Resource));



    return (
        <div class="card shadow-lg bg-base-100 m-2">
            <div class="card-body">
                <h2 class="card-title dark:text-gray-400">{name}</h2>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Write your code here</span>
                    </label>
                    <textarea class="textarea h-24 textarea-bordered textarea-primary text-balck dark:text-white" placeholder={`Enter your ${groupName}`} disabled='true' value={state[groupName][id]}></textarea>
                </div>
            </div>
        </div>
    )
}

export default Textarea;