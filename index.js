let fetchUsers = async ()=>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res;
        console.log(data);
    }catch(err){
        alert(err);
    }
}

fetchUsers()