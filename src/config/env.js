let BASE_URL = ''
switch (process.env.NODE_ENV) {
  case 'dev':
    BASE_URL = 'http://127.0.0.1:8080'
    break
  case 'prod':
    BASE_URL = 'https://hiai001.com'
    break
}
export {
  BASE_URL
}
