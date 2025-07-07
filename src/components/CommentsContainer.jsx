import { FaUser } from "react-icons/fa";
import {commentsData} from "../utils/commentsDummyData"; 



const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm p-2 m-2 bg-gray-200 rounded-lg">
      <FaUser className="inline mr-2 mt-2" />
      <div className="px-1">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l-2 border-gray-400">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
