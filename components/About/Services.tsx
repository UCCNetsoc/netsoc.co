export default function Services() {
  return (
    <div className="text-lg pb-24">
      <h1 className="mt-20 text-3xl">Services</h1>

      <p>UCC Netsoc provide services to UCC students throughout the academics year, for both academic and entertainment purposes.</p>

      <section className="my-16">
        <h1 className="text-2xl"><a href="https://netsoc.cloud">Netsoc Cloud</a></h1>

        <img src="/cloud_mockup.png"  alt="Netsoc Cloud dashboard mockup" 
          className="h-[400px] mx-auto inline w-full object-contain my-4 float-left"

        />

        <p className="float-none">
          Our SysAdmins have created a cloud hosting solution for UCC students. Students who sign up for this hosting platform
          (provided they abide by the terms of service), to do whatever they want for the low, low price of free.
        </p>

        <p>
          Examples of projects deployed on Netsoc Cloud include: portfolio websites, blogs, and Final Year Project websites.
        </p>
      </section>

      <section>
        <h1 className="text-2xl"><a href="https://discord.netsoc.co">Gaming Services</a></h1>
        <img src="/gaming.png" alt="Photograph of students playing games at a Netsoc event"
          className="h-[400px] mx-auto inline w-full object-contain my-4 float-left"
        />
        <p>
          At Netsoc, we host frequent gaming session both in-person and online. It is a great opportunity to meet new people 
          and find new friends who will be with you throughout your college experience.
        </p>
      </section>
    </div>
  )
}