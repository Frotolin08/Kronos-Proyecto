

export const login = async (email,pass)=> {
    const response = await fetch('http://localhost:3000/users/login', {
method: 'POST',
headers: { 'Content-Type': 'application/json'},
body: JSON.stringify({mailI: email, 
    constraseniaI: pass })
})
if(!response.ok)  throw new Error('error'+response.status)
const responseData = await response.json()
return responseData;
}



//   export const register = (nombre, email, pass, foto) => {

//     {fetch('http://localhost:3000/users/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json'},
//         body: JSON.stringify({mailI: email, 
//             constraseniaI: pass })
//         })
//         .then(response => {
//             if(!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json()
//         })
//         .then(responseData => {
//             console.log('Success:', responseData); 
//           })
//           .catch(error => {
//             console.error('Error:', error);
//           });}

//   }
