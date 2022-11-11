export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    //Get JWT token
    
    fetch('http://localhost:5000/jwt',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=> res.json())
    .then(data=>{
        localStorage.setItem('FoodMonster', data.token);
    })
}