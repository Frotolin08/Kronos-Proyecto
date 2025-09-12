

export const login = (email,pass)=> {fetch('http://localhost:3000/users/login', {
method: 'POST',
headers: { 'Content-Type': 'application/json'},
body: JSON.stringify({mailI: email, 
    constraseniaI: pass })
})
.then(response => {
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json()
})
.then(responseData => {
    console.log('Success:', responseData); 
  })
  .catch(error => {
    console.error('Error:', error);
  });}

  export const register = (nombre, email, pass, foto)
