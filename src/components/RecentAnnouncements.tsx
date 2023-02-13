import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";

const RecentAnnouncements = (): JSX.Element => {
    const [data, setData] = useState<AnnouncementProps[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null)

    type AnnouncementJSON = {
        content: string,
        date: number,
        image_url: string | undefined
    };

    useEffect(() => {
        fetch(`https://bot.netsoc.co/announcements?q=3`)
          .then((response) => {
            if (response.ok) {
              return response.json()
            }
            throw response
          })
          .then((data: AnnouncementJSON[]) => {
            let formattedData: AnnouncementProps[] = data.map((d: AnnouncementJSON): AnnouncementProps => {
                const announcementDate: Date = new Date(d.date * 1000);
                return {
                    content: d.content,
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

        console.log("rendering now :)")
        return (
            <>
                {data?.map(announcement => (
                    <Announcement content={announcement.content} date={announcement.date} image_url={announcement.image_url} key={announcement.key}/>
                ))}
            </>
        )
};

// const getRecentAnnouncements = (amount: number): JSX.Element => {
//     const [data, setData] = useState<AnnouncementProps[] | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<Error | null>(null)
  
//     useEffect(() => {
//       fetch(`https://netsoc.co/announcements?q=${amount}`)
//         .then((response) => {
//           if (response.ok) {
//             return response.json()
//           }
//           throw response
//         })
//         .then(data => {
//           data.map((a: AnnouncementProps) => a as AnnouncementProps)
//           setData(data)
//         })
//         .catch(error => {
//           console.error("Error fetching data: ", error)
//           setError(error);
//         })
//         .finally(() => setLoading(false))
  
//     }, [])
//     if (data != null) {
//       for (let announcement of data as AnnouncementProps[]) {
//         return (
//           <>
//             <Announcement content={announcement.content} date={announcement.date} image_url={announcement.image_url} /> 
//           </>
//         )
//       }
//     }
//     console.log("data null")
//     return ( <p>Oopsie</p> )
//   }

type AnnouncementProps = {
    content: string,
    date: number | string,
    image_url: string | undefined
    key: number
};

const Announcement = ({content, date, image_url}: AnnouncementProps): JSX.Element => {
    return (
        <article>
            <h2>{date}</h2>
            <p>{content}</p>
            <img src={image_url} alt=""/>
        </article>
    )
}

export default RecentAnnouncements;