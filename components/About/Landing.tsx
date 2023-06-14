import { Poppins } from "next/font/google"

const poppinsLight = Poppins({
  weight: "100",
  subsets: ['latin'],
  display: 'swap'
})

export default function Landing() {
  return (
    <>
      <div className='flex items-center justify-center h-[100dvh] w-full md:space-x-16 text-white'>
        <img src="/backdrop.jpg" alt="Non-important backdrop image"
          className='rounded-sm hidden md:block w-[300px] lg:w-[450px] mix-blend-luminosity' />
        <div className=''>
          <h1 className={`${poppinsLight.className} text-6xl`}>
            Welcome to UCC Netsoc
          </h1>
          <h2 className="text-white/80 text-lg my-6 max-w-[600px]">
            The <b>Networking</b>, <b>Gaming</b>, and <b>Technology</b> Society of <b>University College Cork</b>.
          </h2>
          <div className="flex flex-col">
            <h3>Sponsored by:</h3>
            <a href="https://sig.com" target="_blank">
              <img className="block w-52 invert" src="/sig.svg" alt="SIG Logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}