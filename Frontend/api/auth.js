import axios from 'axios'

export const login = (email, pass) => { axios({

method: 'post',
url:  '/login',
data: {
email: email,
password: pass,

}
}) 
console.log('login sent') }



export const register = (email, pfp, name, pass,) => { axios({

method: 'post',
url:  '/register',
data: {
email: email,
pfp: pfp,
name: name,
password: pass,

}
}) 
console.log('register sent') }