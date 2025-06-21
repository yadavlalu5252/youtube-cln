const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet || {};

  return (
    <div className="p-2 m-2 w-48 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-lg w-full h-28 object-cover"
      />
      <ul className="mt-2 space-y-1 text-sm">
        <li className="font-bold line-clamp-2">{title}</li>
        <li className="text-gray-700">{channelTitle}</li>
        <li className="text-gray-500 text-xs">
          {Number(statistics?.viewCount).toLocaleString()} views
        </li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({info}) => {
    return (
        <div className="p-1 m-1 border border-red-600">
            <VideoCard info={info} />
            <h1>Ad</h1>
        </div>
    )
}


export default VideoCard;
