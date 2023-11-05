'use client'

import { useEffect, useState } from "react";
import { Converter } from "showdown";

const converter = new Converter({
    simplifiedAutoLink: true,
    simpleLineBreaks: true,
    underline: true,
});

type AnnouncementProps = {
    content: string,
    date: number | string,
    image_url: string | undefined
    key: number
};

type AnnouncementJSON = {
    content: string,
    date: number,
    image_url: string | undefined
};

/**
 * Parses a string that may contain discord emojis and replaces them with HTML
 * elements which can be rendered with the help of some CSS
 * @param message announcement message
 * @returns formatted announcement string, with discord emojis converted to HTML
 */
const replacer = (message: string): [string, boolean] => {
    // regex for static and animated emojis
    // returns array containing all emojis matched
    const emojis = message.match(/<:[^:]*:([^>]*)>/);
    const emojisAnimated = message.match(/<a:[^:]*:([^>]*)>/);
    // map discord emoji to blank <i> element with the emoji's image as background
    // requires some CSS to render properly
    const elem = (s: string) =>
        `<i class="emoji" style="background-image: url(${s});"></i>`;
    if (emojis) {
        return [
            message.replace(
                emojis[0],
                elem(`https://cdn.discordapp.com/emojis/${emojis[1]}.png`)
            ),
            true
        ]
    } else if (emojisAnimated) {
        return [
            message.replace(
                emojisAnimated[0],
                elem(`https://cdn.discordapp.com/emojis/${emojisAnimated[1]}.gif`)
            ),
            true
        ]
    }
    // return false if message not changed
    return [message, false];
}

export default function RecentDiscordAnnouncements() {

    const [data, setData] = useState<AnnouncementProps[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        fetch(`https://bot.netsoc.co/announcements?q=3`)    // fetch recent announcements from discord bot
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            })
            .then((data: AnnouncementJSON[]) => { // response received is a JSON array of announcements
                // stolen code to discord emojis with images
                let formattedData: AnnouncementProps[] = 
                    data.map((d: AnnouncementJSON): AnnouncementProps => {
                        let str: string = d.content;
                        let changed: boolean = true;
                        while (changed) {
                            [str, changed] = replacer(str);
                        }
                        str = converter.makeHtml(str)
                        const announcementDate: Date = new Date(d.date * 1000);
                        return {
                            content: str,
                            image_url: d.image_url,
                            date: announcementDate.toDateString(),
                            key: d.date,
                        }
                    })
                setData(formattedData);
            })
            .catch(error => {
                console.error("Error fetching data: ", error)
                setError(error);
            })
            .finally(() => setLoading(false))

    }, [])

    if (loading) {
        console.log("still loading")
        return <p>Loading...</p>
    }
    if (error) return <p>Error!</p>


    return (
        <>
        {data?.map(announcement => (
            <Announcement content={announcement.content} 
                date={announcement.date} image_url={announcement.image_url}
                key={announcement.key}/>
        ))}
    </>
    )
}

const Announcement = ({ content, date, image_url }: AnnouncementProps): JSX.Element => {
    return (
        <article>
            <h2>{date}</h2>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
            {/* do not render image if none was provided */}
            {(!!image_url) ? <img src={image_url} alt="" /> : <></>}
        </article>
    )
}