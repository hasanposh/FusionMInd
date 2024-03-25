import { Link } from "react-router-dom";
import placeHolderImg from "../assets/404.jpg";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

const BlogCard = ({ blog, deletable, handleDelete }) => {
  const { cover_image, title, description, published_at, id } = blog;

  return (
    <div className="flex relative">
      <div className="transition border-2 rounded-lg hover:scale-105 border-primary hover:border-secondary border-opacity-30">
        <Link
          to={`/blog/${id}`}
          className="max-w-sm mx-auto group  hover:no-underline focus:no-underline"
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
            src={cover_image || placeHolderImg}
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs text-gray-400 dark:text-gray-600">
              {new Date(published_at).toLocaleDateString()}
            </span>
            <p>{description}</p>
          </div>
        </Link>
      </div>
      {deletable && (
        <div
          onClick={() => handleDelete(id)}
          className="absolute text-secondary text-3xl bg-primary hover:text-5xl rounded-full p-2 -right-3 -top-3"
        >
          <MdDelete />
        </div>
      )}
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
  deletable: PropTypes.bool,
  handleDelete: PropTypes.func
};

export default BlogCard;
