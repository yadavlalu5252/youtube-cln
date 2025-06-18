const VideoCard = ({ info }) => {
    if (!info) return null;

    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails } = snippet || {};

    return (
        <div className="p-2 m-2 w-48 shadow-lg">
            <img
                src={thumbnails?.medium?.url}
                alt="thumbnail"
                className="rounded-lg"
            />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{Number(statistics?.viewCount).toLocaleString()} views</li>
            </ul>
        </div>
    );
};

export default VideoCard;