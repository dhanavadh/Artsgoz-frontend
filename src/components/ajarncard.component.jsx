import { Link } from "react-router-dom";

const AjarnCard = ({ ajarn }) => {

    let { personal_info: { fullname, username, dept, profile_img } } = ajarn;

    return (
        <div className="flex gap-5 items-center mb-5">
            <img src={profile_img} className="w-14 h-14 rounded-full" />

            <div>
                <h1 className="font-medium text-xl line-clamp-2">{ fullname }</h1>
                <p className="text-dark-grey"> {dept}</p>
                <p className="text-dark-grey"> @{username}</p>
                
            </div>
        </div>
    )

}

export default AjarnCard;