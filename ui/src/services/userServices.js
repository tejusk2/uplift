async function handleLogin(username, password){
        if(!username || !password){
            return "nope";
        }
        const response = await fetch('http://localhost:3001/api/users/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                username,
                password,

            }),
        })
        let data;
        await response.json().then((result)=>{
            data = result
        })
        return data;
       
}
//register
async function handleRegister(username,password,email){
    const response = await fetch('http://localhost:3001/api/users/register', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            username,
            password,
            email
    
        }),
    
    })
    let data;
    await response.json().then((result) => {
        data = result})
    
    return data;
    
    
}




export {handleRegister, handleLogin}