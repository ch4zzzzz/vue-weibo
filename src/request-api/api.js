const proUrl = '/';
const devUrl = '/';
const baseUrl = process.env.NODE_ENV==='production'?proUrl:devUrl;

const api = {
  login: 'login',
  tLogin: 'tLogin',
  getPosts: 'getPosts'
}

const keys = Object.keys(api);
for (let i=0, len=keys.length; i<len; i++) {
  const key = keys[i];
  api[key] = baseUrl + api[key];
}

export default api;

// export const login = api.login;
// export const getPosts = api.getPosts;
export const {login, getPosts} = api;