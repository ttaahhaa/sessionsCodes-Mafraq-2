const posts = [
    {title: "post one", body: "This is post one"},
    {title: "post two", body: "This is post two"}
]

function getPosts(){
    setTimeout(()=>{
        let output = ""
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

getPosts()

function createPosts(post){
    setTimeout(()=>{
        posts.push(post)
    }, 2000)
}

createPosts({title: "post three", body: "This is post three"})