let BASE_URL = ''
switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = 'http://127.0.0.1:9002'
    break
  case 'production':
    BASE_URL = 'http://hiai001.com'
    break
}
export {
  BASE_URL
}
