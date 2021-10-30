import React from "react";
import Navbar from "./navbar/navbar";
import InputText from "./input/input"
import Add from "./add/add"
import Textarea from "./textarea/textarea";
import { useDispatch, useSelector } from "react-redux";
import FieldGroup from "./fieldgroup/fieldgroup";
import { AiFillEdit, AiOutlineEdit } from "react-icons/ai";
import { IconContext } from "react-icons";

/*
  data:
    title:
    description:
    public:
    fields:
      code: [
        "", ""
      ]

*/

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


  function editToggle(e) {

    dispatch({ type: 'update', key: 'edit', value: !Resource.edit })
  }

  return (
    <div className="bg-base-200" data-theme={Theme ? 'dark' : 'ckmy'} >
      <Navbar />

      <div class="py-4 artboard artboard-demo bg-transparent border-0 shadow-none fixed z-40 bottom-0 right-0 mx-3 flex items-end">
        <div class="form-control m-2">
          <label class="cursor-pointer label">
            <span class="label-text m-2">Make Public</span>
            <input type="checkbox" class="toggle toggle-primary" />
          </label>
        </div>

        <Add />

        <IconContext.Provider value={{ size: '3em' }} >
          <div class="shadow-lg px-3 py-2 max-h-16 bg-base-100">
            <buttom onClick={editToggle}>
              {Resource.edit ?
                <AiFillEdit />
                : <AiOutlineEdit />}
            </buttom>
          </div>
        </IconContext.Provider>
        <button class="btn btn-success m-3">Save</button> 
      </div>


      {/* 
      <div className="fixed z-10 bottom-0 right-0 flex flex-col justify-items-end p-3">



        

      </div> */}

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
