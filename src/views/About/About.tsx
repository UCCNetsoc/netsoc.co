import styles from './About.module.css'

const About = () => {
  return (
    <main>
      <article className={styles.article}>
        <h1 className={styles.title}>
          About UCC Netsoc
        </h1>
        <p>
          UCC Netsoc is <a href="https://www.ucc.ie">UCC</a>'s Networking, 
          Gaming and  Technology society.
        </p>
        <p>
          We are a student-run non-profit college society that aims to provide a space for students 
          to learn about technology and network with each other, also have fun playing games and 
          find new friends with similar hobbies and interests.
        </p>
        <p>
          We host a wide range of events throughout the year, including
          workshops, talks, game nights and more. We also host a number of
          competitions throughout the year, including our annual tech conference;{" "}
          <a href="https://devcon.ie">Cork DevCon</a>.
        </p>
        <p>
          We also run a number of projects, including our {" "}
          <a href="https://netsoc.cloud">
            Cloud Service
          </a>, our <a href="https://github.com/uccnetsoc/nac">Infrastructure as Code</a> and some Discord bots.
        </p>
        <p>
          We are always looking for new members, so if you are a UCC student and are interested  in 
          joining, head over to the <a href="https://candsportal.ucc.ie">Clubs & Socs Portal</a> and 
          become a member. Also make sure to join our{" "}<a href="https://discord.netsoc.co">Discord</a>{" "}
          to keep up to date on events and the happenings of the society.
        </p>
      </article>
    </main>
  )
}

export default About;
