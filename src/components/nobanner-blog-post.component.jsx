/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getDay } from "../common/date";

const MinimalBlogPost = ({ blog, index }) => {
    
    let { title, blog_id: id, author: { personal_info: { username, profile_img } }, publishedAt } = blog;

    return (
        <Link to={`/blog/${id}`} className="flex gap-5 mb-8">
            <p className="blog-index">{ index < 10 ? "0" + (index + 1) : index}</p>

            <div>
                

                <h1 className="blog-title">{title}</h1>
                <div className="flex gap-2 items-center mt-3">
                    <img src={profile_img} className="w-6 h-6 rounded-full" />
                    <p className="line-clamp-1">@{username}</p>
                    <p className="min-w-fit">โพสต์เมื่อ { getDay(publishedAt) }</p>
                </div>
            </div>
        </Link>
    )
}

export default MinimalBlogPost;