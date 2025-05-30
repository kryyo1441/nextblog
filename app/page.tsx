
import { prisma } from "./utils/db";

async function getData () {
  const data = await prisma.BlogPost.findmany({
    select:{
      title : true,
      content: true,
      createdAt: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true 
    }
  })

  return data;
}


export default async function Home() {

  const data = await getData();
  return (
    <div className="py-6 ">
      <h1 className="text-3xl font-bold tracking-light mb-6">
        Latest Posts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((data) => (
          <div key={data.title}>        
            <h1>{data.title}</h1>
            <h1>{data.content}</h1>
          </div>
      ))}
      </div>
    </div>
  );
}
