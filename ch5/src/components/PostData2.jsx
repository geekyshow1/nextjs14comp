import connectDB from "@/lib/connectDB"
import PostModel from "@/models/Post"

const create = async (formData) => {
  'use server'
  await connectDB()
  const result = await PostModel.create({
    title: formData.get('title'),
    body: formData.get('body'),
  })
  // console.log("Result: ", result);

}
const PostData2 = () => {
  return (
    <form action={create} >
      Title: <input type="text" name="title" className="text-black p-2" />
      <br /><br />
      Body: <input type="text" name="body" className="text-black p-2" />
      <br /><br />
      <button type="submit" className="p-2 bg-rose-600">Submit</button>
    </form>
  )
}

export default PostData2