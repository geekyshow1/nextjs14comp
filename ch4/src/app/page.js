const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const posts = await res.json()
  // console.log("All Posts:", posts);
  return posts
}
export default async function Home() {
  const allPosts = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        allPosts.map((post, i) => (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <hr />
          </>
        ))
      }
    </main>
  )
}

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/blog/posts", {
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })
//   const posts = await res.json()
//   // console.log("All Posts:", posts);
//   return posts
// }
// export default async function Home() {
//   const allPosts = await getData()
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       {
//         allPosts.data.map((post, i) => (
//           <>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//             <hr />
//           </>
//         ))
//       }
//     </main>
//   )
// }
