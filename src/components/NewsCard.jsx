import { FaEye } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { FiBookmark, FiShare2 } from "react-icons/fi";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    thumbnail_url,
    details,
    total_view,
    rating,
    author,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="bg-base-100 shadow-md rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-lg">
          <FiBookmark className="cursor-pointer" />
          <FiShare2 className="cursor-pointer" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <img
          src={thumbnail_url}
          alt="News thumbnail"
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <p className="text-sm text-gray-700">
          {details.length > 250 ? `${details.slice(0, 250)}...` : details}
          <Link to={`/news-details/${id}`} className="text-orange-500 font-medium ml-1 cursor-pointer">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200">
        <div className="flex items-center text-orange-500 text-lg gap-1">
          <MdStarRate />
          <span className="font-semibold">{rating.number}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
