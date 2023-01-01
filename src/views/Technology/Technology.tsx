import styles from './Technology.module.css'

const Technology = () => { 
    document.title = "Technology"
    return (
    <main>
        <article className={styles.article}>
            <h1 className={styles.title}>Technology</h1>
            <p>
                We host weekly tech events, from informative tech talks to comprehensive, hands-on tutorials. 
                Got an interest in web dev? Want to gain more insight into the technologies that power our lives? 
                You're sure to enjoy our tech talks!
            </p>
            <p>
                To be informed of the latest tech talks and events, keep an eye on 
                our <a href="https://discord.netsoc.co">Discord</a> server, and follow 
                our Instagram <a href="https://instagram.com/uccnetsoc">@uccnetsoc</a>
            </p>
            <p>
                Tech talks are a great way to showcase what you're passionate about. 
                If you'd like to host one, feel free to let us know and we'd be more than happy to host you!
            </p>
            <p>
                As well as that, we've brought students to CIX, Cork's very own datacentre, took them to SISTEM in Dublin, 
                which is a yearly conference for tech students, and also attended FOSDEM, an annual developer's conference in Brussels.
            </p>
        </article>
    </main>
    )
}

export default Technology