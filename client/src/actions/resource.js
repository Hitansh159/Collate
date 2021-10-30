import * as api from "../api";

export const getFeeds = async () => {
  const payload = {
    email: "",
    query: "",
    tags: [],
  };

  if (localStorage.getItem("userInfo") && document.location.pathname != '/') {
    payload.email = JSON.parse(localStorage.getItem("userInfo")).email;
  }

  const { data } = await api.fetchFeeds(payload);

  console.log(data);
  return data;
};

export const saveResource = async (state)=>{
 
  var tags = [];

  for (const [key, value] of Object.entries(state)) {
    if(key == 'title' || key == 'public' ||key == 'description'||key == 'edit' || key == 'id')
      continue;
    if(value.length > 0)
      for(let i in value)
        if(value[i] != ''){
          tags.push(key);
            break;}
  }

  console.log(tags);
  var payload = {
    id: (state.id?state.id:'') ,
    userEmail: '',
    tags: tags,
    public: (state.public?1:0),
    content: state
  };


  if (localStorage.getItem("userInfo")) {
    payload.userEmail = JSON.parse(localStorage.getItem("userInfo")).email;
  }


  const data = await api.saveResource(payload);

  console.log(data);
  return data;
}

export const getResource = async (id) =>{

  var payload = {}

  if (localStorage.getItem("userInfo")) {
    payload.email = JSON.parse(localStorage.getItem("userInfo")).email;
  }

  const {data} = await api.fetchResource(payload, id);

  console.log(data);
  return data;
}
