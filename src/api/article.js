import http from "./api"

// http是一个方法，调用这个方法会返回promise?
export function getArticles(){
    return http({
        method:"GET"
    })
}

export function addArticles(article){
    return http({
        method:"POST"
    })
}

export function deleteArticle(id){
    return http({
        method:"DELETE"
    })
}