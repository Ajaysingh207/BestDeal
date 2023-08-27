export async function createData(payload){
    var response = await fetch("/cart",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    return await response.json()
}
export async function getData(){
    var response = await fetch("/cart",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateData(payload){
    var response = await fetch("/cart/"+payload.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    return await response.json()
}
export async function deleteData(payload){
    var response = await fetch("/cart/"+payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}