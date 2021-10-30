import { useSelector, useDispatch } from "react-redux";
import Textarea from "../textarea/textarea";

function FieldGroup({ name }) {

    const state = useSelector((state) => (state.Resource));
    var dispatch = useDispatch();

    console.log(state[name.toLowerCase()], name);

    return (
        <div class="collapse w-9/12 max-w-6xl self-center border rounded-box bg-base-200 border-base-300 collapse-plus m-3 focus:bg-base-200">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium text-primary-content shadow-lg dark:bg-base-100">
                {name}
            </div>
            <div class="collapse-content">
                <div className="flex flex-col space-y-5">
                    {state[name.toLowerCase()].map((e, i)=>(<Textarea name={`${name.toLowerCase()}${i+1}`} id={i} groupName={name.toLowerCase()}/>))}
                </div>
            </div>
        </div>

    );
}

export default FieldGroup;