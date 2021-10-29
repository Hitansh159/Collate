import React from "react";
import Navbar from "./navbar/navbar";
import Card from "./card/card";

export default function Home() {
  
  var title = "Title";
  var description = "This is a small description about my resources. Which i think it might be usefull. but no one cares.";
  var tags = ["script", "Websites", "Frames work", "APIs", "Tools", "Image", "notes", "Voice notes", "Papers"];

  var feeds = {
    'data': [{"title": "Title", 'description': "This is a small description about my resources. Which i think it might be usefull. but no one cares.", 'tags' : ["script", "Websites", "Frames work", "APIs", "Tools", "Image", "notes", "Voice notes", "Papers"]},
    {"title": "Title", 'description': "This is a small description about my resources. Which i think it might be usefull. but no one cares.", 'tags' : ["script", "Websites", "Frames work", "APIs", "Tools", "Image", "notes", "Voice notes", "Papers"]},
    {"title": "Title", 'description': "This is a small description about my resources. Which i think it might be usefull. but no one cares.", 'tags' : ["script", "Websites", "Frames work", "APIs", "Tools", "Image", "notes", "Voice notes", "Papers"]},
    {"title": "Title", 'description': "This is a small description about my resources. Which i think it might be usefull. but no one cares.", 'tags' : ["script", "Websites", "Frames work", "APIs", "Tools", "Image", "notes", "Voice notes", "Papers"]}
  ]
  };

  return(
    <div>
      <Navbar />
      <div className="flex flex-wrap flex-row justify-center">
        {feeds['data'].map((feed)=>(
          <Card title={feed.title} description = {feed.description} tags={feed.tags} />
        ))}
      </div>
    </div>
  );
}

 
