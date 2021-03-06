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



function createPosts(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;
            if(!error)
            {resolve()
            console.log("anything")}
            else
            reject("Something went wrong....")

        },2000)
    })
}

createPosts({title: "post three", body: "This is post three"}).then(()=>{
    getPosts()
}).catch((err)=>{
    console.error(err)
})