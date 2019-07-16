const proUrl = '/';
const devUrl = '/';
const baseUrl = process.env.NODE_ENV==='production'?proUrl:devUrl;

const api = {
  'login': 'login',
  'tLogin': 'tLogin'
}

const keys = Object.keys(api);
for (let i=0, len=keys.length; i<len; i++) {
  const key = keys[i];
  api[key] = baseUrl + api[key];
}

export default api