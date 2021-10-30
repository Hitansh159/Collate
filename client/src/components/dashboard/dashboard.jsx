import React, { useEffect } from "react";
import Navbar from "../home/navbar/navbar";
import { useState } from "react";
import Card from "../home/card/card";
import { useSelector } from "react-redux";
import { getFeeds } from "../../actions/resource";
import { IconContext } from "react-icons";
import { IoIosCreate } from 'react-icons/io';
import { Link } from "react-router-dom";

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

  // loading stages
  const [feeds, setFeeds] = useState([]);
  const [filters, setFilters] = useState(initFilters);
  const Theme = useSelector((state) => state.Theme);

  // calling api for data
  useEffect(() => {
    const allFeeds = async () => {
      const data = await getFeeds();
      setFeeds(data.data);
      console.log("data ", data, feeds);
    };

    allFeeds();
  }, []);

  const clickHandler = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
    console.log(filters);
  };


  return (
    <div className="bg-base-200 min-h-screen" data-theme={Theme ? 'dark' : 'ckmy'} >
      <Navbar />
      
      <Link className="fixed bottom-0 right-0 mask mask-circle mr-10 mb-10 p-3 bg-primary" to='/editor'>
        <IconContext.Provider value={{ size: '4em' }} >
          <IoIosCreate />
        </IconContext.Provider>

      </Link>

      <div class="grid grid-cols-6 gap-4">
        <div class="">
          {/* <div class="py-4 artboard artboard-demo bg-base-200"> */}


          <ul class="menu py-4 shadow-lg bg-base-100 w-full rounded-box mt-5 ml-2 border-gray-700">
            <li className="text-3xl shadow-md text-primary-content ">
              <span>Filters</span>
            </li>

            {Object.keys(filters).map((filter, value) => (
              <li class={filters[filter] ? "bordered dark:text-gray-400" : "dark:text-gray-400"}>
                <a onClick={() => clickHandler(filter)}>{filter}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* </div> */}
        <div class="col-span-5">
          <h1 className="text-4xl text-primary-content mt-2 text-center">Recent Notes</h1>
          <div className="flex flex-wrap flex-row justify-center">
            {feeds.map((feed) => (
              <Card
                title={feed.title}
                description={feed.description}
                tags={feed.tags}
                rid={feed.id}
                from='dashboard'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
