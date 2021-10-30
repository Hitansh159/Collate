import React from "react";
import Navbar from "./navbar/navbar";
import InputText from "./input/input"
import Add from "./add/add"
import Textarea from "./textarea/textarea";
import { useDispatch, useSelector } from "react-redux";
import FieldGroup from "./fieldgroup/fieldgroup";
import { MdOutlineEditOff, MdOutlineModeEditOutline } from "react-icons/md";
import { IconContext } from "react-icons";


export default function Preview() {

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


  function editToggle(e) {

    dispatch({ type: 'update', key: 'edit', value: !Resource.edit })
  }

  return (
    <div className="bg-base-100" data-theme={Theme ? 'dark' : 'ckmy'} >
      <Navbar />

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
