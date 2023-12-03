'use client'
import { useState } from "react"

const PostData1 = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify(formData)
    })
    console.log("Response: ", res);
  }
  return (
    <form action="" onSubmit={handleFormSubmit}>
      Title: <input type="text" name="title" value={formData.title} onChange={handleChange} className="text-black p-2" />
      <br /><br />
      Body: <input type="text" name="body" value={formData.body} onChange={handleChange} className="text-black p-2" />
      <br /><br />
      <button type="submit" className="p-2 bg-rose-600">Submit</button>
    </form>
  )
}

export default PostData1