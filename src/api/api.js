import axios from axios;

// For detailed documentation go to https://github.com/Showtime-NFT/stbackend
const API_URL = (process.env.NODE_ENV === 'production') ? 'https://showtimenft.wl.r.appspot.com/' : 'https://showtimenft.wl.r.appspot.com/';

const makeAPIURL = (url)=>`${API_URL}api/v1/${url}`
const makeVersionOneGetRequest = (url)=>axios.get(makeAPIURL(url))
// TODO: Follow up on authentication with backend team and implement them here.
const makeVersionOnePostRequest = (url, data)=>axios.post(makeAPIURL(url),data);

// Token actions
const getToken = async (token)=>{
  if(!token) throw new Error("Token is required");
  return makeVersionOneGetRequest(`token/${token}`);
}
const postToken = async (token,action,email)=>{
  if(!token || !action || !email) throw new Error("Token and email and user is required");
  return makeVersionOnePostRequest(`token/${token}`,{
    action,
    user_email:email,
  })
}

// Search functions
const getSearch = async (query)=>{
  return makeVersionOneGetRequest(`search?q=${escape(query)}`);
}

// Home page actions
const getHomePageFeatured = async ()=>makeVersionOneGetRequest('featured');
const getHomePageLeaderboard = async ()=>makeVersionOneGetRequest('leaderboard');

// User action
const getProfile = async profileId => makeVersionOneGetRequest(`profile/${profileId}`);
const createProfile = async (address,name,twitter)=>makeVersionOnePostRequest(`bot-only/user-add`,{
  address:address,
  name:name,
  twitter:twitter
})

// Get contracts
const getContracts = async (contractId)=>makeVersionOneGetRequest(`contract/${contractId}`);

const API = {
  getToken,
  postToken,
  getSearch,
  getHomePageFeatured,
  getHomePageLeaderboard,
  getProfile,
  createProfile,
  getContracts
}

//Question: Will it be helpful to implement error handling with a service like cogo-toast?
export default API;