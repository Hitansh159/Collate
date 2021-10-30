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


  function editToggle(e){
    
    dispatch({type: 'update', key:'edit', value:!Resource.edit})
  }

  return (
    <div className="bg-base-200" data-theme={Theme ? 'dark' : 'ckmy'} >
      <Navbar />
      <div className="grid grid-cols-2">
        <div class="form-control p-5 min-w-full flex">
          <InputText label="Title" placeholder="Enter Title here" />
          <InputText label="Description" placeholder="Small description here" />
        </div>

        <div className="flex flex-row flex-wrap space-x-16">
          <div class="w-1/3 p-6 card bordered shadow-lg max-w-lg m-3 bottom-1">
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text">Make Public</span>
                <input type="checkbox" class="toggle toggle-primary" />
              </label>
            </div>
            <p>
              This will make your all content under this resourse available to everyone
            </p>
          </div>

          <Add />

          <IconContext.Provider value={{ size: '3em' }} >
            <div class="card bordered shadow-lg px-3 py-2 max-h-16 bg-base-100">
              <buttom onClick={editToggle}>
                {Resource.edit?
                  <AiFillEdit />
                : <AiOutlineEdit />}
              </buttom>
            </div>
          </IconContext.Provider>

        </div>

        <div className="col-span-2" >
          {fields.map((e, i) => (<FieldGroup name={e} />))}
        </div>

      </div>
    </div>
  );
}
