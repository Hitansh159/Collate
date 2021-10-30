import * as api from "../api";

export const getFeeds = async () => {
  const payload = {
    email: "",
    query: "",
    tags: [],
  };

  if (localStorage.getItem("userInfo")) {
    payload.email = JSON(localStorage.getItem("userInfo")).email;
  }

  const { data } = await api.fetchFeeds(payload);

  console.log(data);
  return data;
};

export const saveResource = async (state)=>{
 
  var tags = [];

  for (const [key, value] of Object.entries(state)) {
    if(key == 'title' || key == 'public' ||key == 'description'||key == 'edit')
      continue;
    if(value.length > 0)
      for(let i in value)
        if(value[i] != ''){
          tags.push(key);
            break;}
  }

  console.log(tags);
  var payload = {
    id: (state.id?state.id:false) ,
    userEmail: '',
    tags: tags,
    public: state.public,
    content: state
  };


  if (localStorage.getItem("userInfo")) {
    payload.email = JSON.parse(localStorage.getItem("userInfo")).email;
  }


  const data = await api.saveResource(payload);

  console.log(data);
  return data;
}
