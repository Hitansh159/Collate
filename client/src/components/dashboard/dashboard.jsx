import React from "react";
import Navbar from "./navbar/navbar";
import { useState } from "react";
import Card from "../home/card/card";

const initFilters = {
  Snippets: false,
  Websites: false,
  Frameworks: false,
  APIs: false,
  Tools: false,
  Images: false,
  Text_Notes: false,
  Papers: false,
};

var feeds = {
  data: [
    {
      title: "Title",
      description:
        "This is a small description about my resources. Which i think it might be usefull. but no one cares.",
      tags: [
        "script",
        "Websites",
        "Frames work",
        "APIs",
        "Tools",
        "Image",
        "notes",
        "Voice notes",
        "Papers",
      ],
    },
    {
      title: "Title",
      description:
        "This is a small description about my resources. Which i think it might be usefull. but no one cares.",
      tags: [
        "script",
        "Websites",
        "Frames work",
        "APIs",
        "Tools",
        "Image",
        "notes",
        "Voice notes",
        "Papers",
      ],
    },
    {
      title: "Title",
      description:
        "This is a small description about my resources. Which i think it might be usefull. but no one cares.",
      tags: [
        "script",
        "Websites",
        "Frames work",
        "APIs",
        "Tools",
        "Image",
        "notes",
        "Voice notes",
        "Papers",
      ],
    },
    {
      title: "Title",
      description:
        "This is a small description about my resources. Which i think it might be usefull. but no one cares.",
      tags: [
        "script",
        "Websites",
        "Frames work",
        "APIs",
        "Tools",
        "Image",
        "notes",
        "Voice notes",
        "Papers",
      ],
    },
  ],
};

export default function Dashboard() {
  const [filters, setFilters] = useState(initFilters);

  const clickHandler = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
    console.log(filters);
  };

  return (
    <>
      <Navbar />
      <div class="grid grid-cols-6 gap-4">
        <div class="">
          {/* <div class="py-4 artboard artboard-demo bg-base-200"> */}
          <ul class="menu py-4 shadow-lg bg-base-100 w-full rounded-box mt-5 ml-2 border-gray-700">
            <li class="menu-title">
              <span>Filters</span>
            </li>

            {Object.keys(filters).map((filter, value) => (
              <li class={filters[filter] ? "bordered" : ""}>
                <a onClick={() => clickHandler(filter)}>{filter}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* </div> */}
        <div class="col-span-5">
          <h1 className="text-4xl ml-8">Recent Notes</h1>
          <div className="flex flex-wrap flex-row justify-center">
            {feeds["data"].map((feed) => (
              <Card
                title={feed.title}
                description={feed.description}
                tags={feed.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}