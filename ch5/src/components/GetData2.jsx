import connectDB from "@/lib/connectDB"
import PostModel from "@/models/Post"

export default async function GetData2() {
  await connectDB()
  const allPosts = await PostModel.find()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        allPosts.map((post, i) => (
          <div key={i}>
            <h1 className="text-red-500">{post.title}</h1>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      }
    </main>
  )
}