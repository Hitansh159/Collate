import React, { useState, useEffect } from "react";
import Navbar from "./navbar/navbar";
import Card from "./card/card";
import { useDispatch, useSelector } from "react-redux";
import { getFeeds } from "../../actions/resource";
import { Link } from "react-router-dom";

export default function Home() {
  const [feeds, setFeeds] = useState([]);
  var feeds1 = {
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

  useEffect(() => {
    const allFeeds = async () => {
      const data = await getFeeds();
      setFeeds(data.data);
    };

    allFeeds();
  }, []);

  console.log(feeds);

  const Theme = useSelector((state) => state.Theme);

  if(Theme)
   document.documentElement.classList.add('dark');
  else
    document.documentElement.classList.remove('dark');

  return (
    <div
      className="bg-base-200 min-h-full"
      data-theme={Theme ? "dark" : "ckmy"}
    >
      <Navbar />

      <div
        class="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.pinimg.com/736x/31/7d/21/317d212e2c86c5ba3ac53d9cfd7338e8.jpg")`,
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="text-center hero-content text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">
              Collate your Notes there
            </h1>
            <p class="mb-5">
              description goes here

            </p>
            <Link to='/login' class="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>

      <div className="text-3xl m-3 text-primary-content">Feed</div>
      <hr />

      <div className="flex flex-wrap flex-row justify-center">
        {feeds.map((feed) => (
          <Card
            title={feed.title}
            description={feed.description}
            tags={feed.tags}
          />
        ))}
      </div>
    </div>
  );
}
