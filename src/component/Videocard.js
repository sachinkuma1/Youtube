const Videocard=({info})=>{
    const {snippet, statistics}=info;
    const { channelTitle, title, thumbnails}=snippet;
    return (
        <div className=" ">
            <img alt="thumbnails" src={thumbnails.medium.url} className="rounded-2xl" />
            <ul>
            <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount/1000}k views</li>
            </ul>
        </div>
    )
}
export default Videocard;