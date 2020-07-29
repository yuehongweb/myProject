let isAuthenticated = {
    name: 'admin',
    age: '23',
    job: '前端工程师'
}

export default {
'post|/login':  () => {
return {
  status: 200,
  message: 'success',
  data: isAuthenticated
};
}
}