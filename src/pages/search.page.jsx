import { useParams } from "react-router-dom";
import InPageNavigation from "../components/inpage-navigation.component";
import { useEffect, useState } from "react";
import Loader from "../components/loader.component";
import AnimationWrapper from "../common/page-animation";
import BlogPostCard from "../components/blog-post.component";
import NoDataMessage from "../components/nodata.component";
import LoadMoreDataBtn from "../components/load-more.component";
import axios from "axios";
import { filterPaginationData } from "../common/filter-pagination-data";
import UserCard from "../components/usercard.component";
import AjarnCard from "../components/ajarncard.component.jsx";

const SearchPage = () => {

    let { query } = useParams()

    let [ blogs, setBlog ] = useState(null);
    let [ users, setUsers ] = useState(null);
    let [ ajarns, setAjarns ] = useState(null);

    const searchBlogs = ({ page = 1, create_new_arr = false }) => {

        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/search-blogs", { query, page })
        .then( async ({ data }) => {

            let formatedData = await filterPaginationData({
                state: blogs,
                data: data.blogs,
                page,
                countRoute: "/search-blogs-count",
                data_to_send: { query },
                create_new_arr
            })

            setBlog(formatedData);
        })
        .catch((err) => {
            console.log(err);
        });

    }

    const fetchUsers = () => {
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/search-users", { query })
        .then(({ data : { users } } ) => {
            setUsers(users);
        })
    }

    const fetchAjarns = () => {
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/search-ajarns", { query })
        .then(({ data : { ajarns } } ) => {
            setAjarns(ajarns);
        })
    }

    useEffect(() => {

        resetState();
        searchBlogs({ page: 1, create_new_arr: true });
        fetchUsers();
        fetchAjarns();

    }, [query])

    const resetState = () => {
        setBlog(null);
        setUsers(null);
        setAjarns(null);
    }

    const UserCardWrapper = () => {
        return (
            <>
                {
                    users == null ? <Loader /> :
                        users.length ? 
                            users.map((user, i) => {
                                return <AnimationWrapper key={i} transition={{ duration: 1, delay: i*0.08 }}>
                                    <UserCard user={user} />
                                </AnimationWrapper>
                            })
                        : <NoDataMessage message="ไม่พบผู้ใช้งาน" />
                }
            </>
        )
    }

    const AjarnCardWrapper = () => {
        return (
            <>
                {
                    ajarns == null ? <Loader /> :
                        ajarns.length ? 
                            ajarns.map((ajarn, i) => {
                                return <AnimationWrapper key={i} transition={{ duration: 1, delay: i*0.08 }}>
                                    <AjarnCard ajarn={ajarn} />
                                </AnimationWrapper>
                            })
                        : <NoDataMessage message="ไม่พบรายชื่ออาจารย์" />
                }
            </>
        )
    }

    return (
        <section className="h-cover flex justify-center gap-10">

            <div className="w-full">
                <InPageNavigation routes={[`ผลการค้นหาสำหรับ "${query}"`, "ผู้ใช้ที่เกี่ยวข้อง", "อาจารย์"]} defaultHidden={["Accounts Matched"]} >

                    <>
                        {blogs == null ? (
                                <Loader />
                            ) : (
                                blogs.results.length ? 
                                    blogs.results.map((blog, i) => {
                                        return (
                                            <AnimationWrapper
                                                transition={{
                                                    duration: 1,
                                                    delay: i * 0.1,
                                                }}
                                                key={i}
                                            >
                                                <BlogPostCard
                                                    content={blog}
                                                    author={
                                                        blog.author.personal_info
                                                    }
                                                />
                                            </AnimationWrapper>
                                        );
                                    })
                                : <NoDataMessage message="ยังไม่มีบทความดังกล่าว" />
                            )}
                            <LoadMoreDataBtn state={blogs} fetchDataFun={searchBlogs} />
                    </>

                    <UserCardWrapper />

                    <AjarnCardWrapper />

                </InPageNavigation>
            </div>

            <div className="min-w-[40%] lg:min-w-[350px] max-w-min border-l border-grey pl-8 pt-3 max-md:hidden">

                <h1 className="font-medium text-xl mb-8">ผู้ใช้ที่เกี่ยวข้อง <i className="fi fi-rr-user mt-1"></i></h1>  

                <UserCardWrapper />    

                <hr className="border-l border-grey pt-3"/>

                <h1 className="font-medium text-xl mb-8">รายชื่ออาจารย์ <i className="fi fi-rr-user mt-1"></i></h1>  
                <AjarnCardWrapper />        

            </div>

        </section>
    )
}

export default SearchPage;