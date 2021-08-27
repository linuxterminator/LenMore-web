import http from "./api"

export function getUsers(){
    return http({
        method:"GET"
    })
}

export function addUser(user){
    return http({
        method:"POST"
    })
}

export function deleteUser(id){
    return http({
        method:"DELETE"
    })
}