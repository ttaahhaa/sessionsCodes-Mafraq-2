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



function createPosts(post, callback){
    setTimeout(()=>{
        posts.push(post)
        callback()
    }, 2000)
}

async function run(){
    let post2 = await fetch ("https://jsonplaceholder.typicode.com/posts")
    let jsonForm = await post2.json();
    console.log(jsonForm)
}
createPosts({title: "post three", body: "This is post three"}, getPosts)
