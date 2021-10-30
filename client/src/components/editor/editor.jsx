import React from "react";
import Navbar from "./navbar/navbar";
import InputText from "./input/input"
import Add from "./add/add"
import Textarea from "./textarea/textarea";
import { useDispatch, useSelector } from "react-redux";
import FieldGroup from "./fieldgroup/fieldgroup"

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
        </div>

        <div className="col-span-2" >
          {fields.map((e, i) => (<FieldGroup name={e} />))}
        </div>

      </div>
    </div>
  );
}
