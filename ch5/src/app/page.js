import GetData1 from "@/components/GetData1";
import GetData2 from "@/components/GetData2";
import PostData1 from "@/components/PostData1";
import PostData2 from "@/components/PostData2";

export const metadata = {
  title: "Blog Posts",
  description: "This is blog post all"
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <PostData1 /> */}
      {/* <GetData1 /> */}

      <GetData2 />
      {/* <PostData2 /> */}

    </main>
  )
}
