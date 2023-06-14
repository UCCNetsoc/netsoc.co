export default function Events() {
  return (
    <div className='min-h-[100dvh]'>
      <h1 className="text-5xl">Events</h1>

      <h2 className="text-center mt-20 text-3xl">Upcoming Events</h2>

      <ul className="flex items-center justify-center flex-wrap mt-12">
        <li className="m-2">
          <div className='bg-gray-400/10 h-[400px] w-[400px] flex flex-col items-center p-3 text-center'>
            <img src="/Netsoc_Social.png" alt="Netsoc Social" className="w-[50%] mb-6" />
            <h3 className="text-2xl">Event Name</h3>
            <p className="text-xl">Event date</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, possimus cumque. Dolores laboriosam recusandae.</p>

          </div>
        </li>
      </ul>

      <h2 className='text-center mt-20 text-3xl'>Large Events</h2>

      <ul className='flex flex-col items-center mt-12'>
        <li>
          <div className='bg-gray-400/10 md:h-[500px] w-[100dvw] md:w-[750px]'>
            <div className="aspect-video w-full">
              <img className="object-cover" src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
            </div>
          </div>
        </li>
      </ul>


      {/* 
      <h2>Large Events</h2>

      <div>
        <ul>
          <li>
            <div>
              <img src="" alt="" />
              <h3>Event Name</h3>
              <p>Event date</p>
              <p>Event Description</p>
            </div>
          </li>
        </ul> */}
      {/* </div > */}
    </div>
  )
} 