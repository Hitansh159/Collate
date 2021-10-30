import React from "react";
import Navbar from "../home/navbar/navbar";
import InputText from "./input/input"
import Add from "./add/add"
import Textarea from "./textarea/textarea";
import { useDispatch, useSelector } from "react-redux";
import FieldGroup from "./fieldgroup/fieldgroup";
import { MdOutlineEditOff, MdOutlineModeEditOutline } from "react-icons/md";
import { IconContext } from "react-icons";
import { saveResource } from "../../actions/resource";

export default function Editor() {

  const Resource = useSelector((state) => (state.Resource));
  const Theme = useSelector((state) => (state.Theme));
  const dispatch = useDispatch();
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
  console.log(Resource, Theme);

  function toggleHandle(e){
    dispatch({type:'update', key:'public', value: !Resource.public})
  }

  function editToggle(e) {
    dispatch({ type: 'update', key: 'edit', value: !Resource.edit })
  }

  return (
    <div className="bg-base-100" data-theme={Theme ? 'dark' : 'ckmy'} >
      <Navbar />

      <div class="py-4 artboard artboard-demo w-auto bg-transparent border-0 shadow-none fixed z-40 bottom-0 right-0 mx-3 flex items-end">
        
        
        <IconContext.Provider value={{ size: '3em' }} >
          <div class="shadow-lg px-3 py-2 mr-4 max-h-16 bg-base-100">
            <buttom onClick={editToggle}>
              {Resource.edit ?
                <MdOutlineModeEditOutline />
                : <MdOutlineEditOff />}
            </buttom>
          </div>
        </IconContext.Provider>

        <div class="form-control m-2 mr-4">
          <label class="cursor-pointer label">
            <span class="label-text m-2">Make Public</span>
            <input type="checkbox" class="toggle toggle-primary" onChange={toggleHandle}/>
          </label>
        </div>

        <button class="btn btn-success m-3" onClick={()=>(saveResource(Resource))}>Save</button>

        <Add />

      </div>


      <div className="grid grid-cols-9 gap-4 z-0">

        <div class="form-control p-5 min-w-full col-start-3 col-span-7">
          <InputText label="Title" placeholder="Enter Title here" />
          <InputText label="Description" placeholder="Small description here" />
        </div>
        <div className="p-5 row-start-2 col-start-3 col-span-7">
          {fields.map((e, i) => (<FieldGroup name={e} />))}
        </div>

      </div>

    </div>
  );
}
