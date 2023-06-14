import Events from "@/components/About/Events"
import Landing from "@/components/About/Landing"
import Services from "@/components/About/Services"


export default function Home() {

  return (
    <>
      <Landing />
      <div className="max-w-[1200px] p-2 mx-auto">
        <Events />
        <Services />
      </div>
    </>
  )
}
