import axios from 'axios'

export const login = (user, pass) => { axios({

method: 'post',
url:  '/login',
data: {
username: user,
password: pass,

}
}) 
console.log('login sent') }



export const register = (user, pass) => { axios({

method: 'post',
url:  '/register',
data: {
username: user,
password: pass,

}
}) 
console.log('register sent') }