export async function createData(payload){
    var response = await fetch("/wishlist",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    return await response.json()
}
export async function getData(){
    var response = await fetch("/wishlist",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function deleteData(payload){
    var response = await fetch("/wishlist/"+payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}