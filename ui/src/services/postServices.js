async function postStory(title, text, username){
    const response = await fetch('http://localhost:3001/api/posts/createPost',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            title,
            text,
        }),
    })
    let data;
    await response.json().then((result)=>{
        data = result
    })
    return data;
   
}
async function getStory(id){
    const response = await fetch('http://localhost:3001/api/posts/search',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id
        }),
    })
    let data;
    await response.json().then((result)=>{
        data = result
    })
    return data;
   
}
async function homeQuery(sort){
    const str= "match=" + sort
    const response = await fetch(`http://localhost:3001/api/posts/getPosts?${str}`,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        },
    })
    let data;
    await response.json().then((result)=>{
        data = result
    })
    return data;
   
}
async function raisePost(username, _id){
    const response = await fetch('http://localhost:3001/api/posts/editPosts',{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            _id,
            username
        })
    })
    
    let data;
    await response.json().then((result)=>{
        data = result
    })
    return data;
}
async function gradePost(username, _id, amount){
    const response = await fetch('http://localhost:3001/api/posts/ratePost',{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            _id,
            username,
            amount
        })
    })
    
    let data;
    await response.json().then((result)=>{
        data = result
        console.log(result)
    })
    return data;
}


export {postStory, getStory, homeQuery, raisePost, gradePost}