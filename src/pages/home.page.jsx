import axios from "axios";
import AnimationWrapper from "../common/page-animation";
import InPageNavigation from "../components/inpage-navigation.component";
import { useEffect, useState } from "react";
import Loader from "../components/loader.component";
import BlogPostCard from "../components/blog-post.component";
import MinimalBlogPost from "../components/nobanner-blog-post.component";
import { activeTabRef } from "../components/inpage-navigation.component";
import NoDataMessage from "../components/nodata.component";
import { filterPaginationData } from "../common/filter-pagination-data";
import LoadMoreDataBtn from "../components/load-more.component";
import Footer from "../components/footer.component";
import HomeBanner from "../components/homebanner.component";
import { Link } from "react-router-dom";
import Club from "./club.page";
import AboutGoz from "../components/goz.about.component";
import ServiceDetail from "../components/service.component";

const HomePage = () => {
    let [blogs, setBlog] = useState(null);
    let [trendingBlogs, setTrendingBlog] = useState(null);
    let [ pageState, setPageState ] = useState("หน้าแรก");

    let categories = [
        "รีวิวรายวิชา",
        "วิชาการ",
        "Silpwat",
        "Artsfem",
        
    ];

    const fetchLatestBlogs = ({ page = 1 }) => {
        axios
            .post(import.meta.env.VITE_SERVER_DOMAIN + "/latest-blogs", { page })
            .then( async ({ data }) => {

                let formatedData = await filterPaginationData({
                    state: blogs,
                    data: data.blogs,
                    page,
                    countRoute: "/all-latest-blogs-count"
                })

                setBlog(formatedData);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const fetchBlogsByCategory = ({ page = 1 }) => {
        axios
            .post(import.meta.env.VITE_SERVER_DOMAIN + "/search-blogs", { tag: pageState, page })
            .then( async ({ data }) => {
                
                let formatedData = await filterPaginationData({
                    state: blogs,
                    data: data.blogs,
                    page,
                    countRoute: "/search-blogs-count",
                    data_to_send: { tag: pageState }
                })

                setBlog(formatedData);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const fetchTrendingBlogs = () => {
        axios
            .get(import.meta.env.VITE_SERVER_DOMAIN + "/trending-blogs")
            .then(({ data }) => {
                setTrendingBlog(data.blogs);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const loadBlogByCategory = (e) => {
        
        let category = e.target.innerText.toLowerCase(); 

        setBlog(null);

        if(pageState == category){
            setPageState("หน้าแรก");
            return;
        }

        setPageState(category);

    }

    useEffect(() => {

        activeTabRef.current.click();

        if(pageState == "หน้าแรก"){
            fetchLatestBlogs({ page: 1 });
        } else {
            fetchBlogsByCategory({ page: 1 })
        }

        if(!trendingBlogs){
            fetchTrendingBlogs();
        }

    }, [pageState]);

    return (
        <>
            <HomeBanner />
            <AnimationWrapper>
            
            <section className="h-cover flex justify-center gap-10">
                {/* latest blogs */}
                <div className="w-full">
                    <InPageNavigation
                        routes={[ pageState , "บทความยอดนิยม", "บริการ", "ชมรม", "เกี่ยวกับ ก.อศ."]}
                        defaultHidden={["บทความยอดนิยม"]}
                    >
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
                                : <NoDataMessage message="ยังไม่มีบทความเผยแพร่" />
                            )}
                            <LoadMoreDataBtn state={blogs} fetchDataFun={( pageState == "หน้าแรก" ? fetchLatestBlogs : fetchBlogsByCategory )} />
                        </>

                        {trendingBlogs == null ? (
                            <Loader />
                        ) : (
                            trendingBlogs.length ?
                                trendingBlogs.map((blog, i) => {
                                    return (
                                        <AnimationWrapper
                                            transition={{
                                                duration: 1,
                                                delay: i * 0.1,
                                            }}
                                            key={i}
                                        >
                                            <MinimalBlogPost
                                                blog={blog}
                                                index={i}
                                            />
                                        </AnimationWrapper>
                                    );
                                })
                            : <NoDataMessage message="ยังไม่มีบทความยอดนิยม" />
                        )}

                        <>
                            <AnimationWrapper
                                transition={{
                                    duration: 1,
                                    delay: 0.1,
                                }}                                
                            >
                                <ServiceDetail />
                            </AnimationWrapper>
                        </>
                        <>
                            <AnimationWrapper
                                transition={{
                                    duration: 1,
                                    delay: 0.1,
                                }}                                
                            >
                                <Club />
                            </AnimationWrapper>
                            
                        </>
                        <>
                            <AboutGoz />
                        </>

                    </InPageNavigation>
                </div>

                {/* filters and trending blogs */}
                <div className="min-w-[40%] lg:min-w-[400px] max-w-min border-l border-grey pl-8 pt-3 max-md:hidden">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h1 className="font-medium text-xl mb-8">
                                เลือกดูตามแท็ก
                            </h1>

                            <div className="flex gap-3 flex-wrap">
                                {categories.map((category, i) => {
                                    return (
                                        <button onClick={loadBlogByCategory} className={"tag " + (pageState == category ? "bg-black text-white " : "")} 
                                        key={i}>
                                            {category}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <h1 className="font-medium text-xl mb-8">
                                บทความยอดนิยม
                                
                            </h1>

                            {trendingBlogs == null ? (
                                <Loader />
                            ) : (
                                trendingBlogs.length ? 
                                    trendingBlogs.map((blog, i) => {
                                        return (
                                            <AnimationWrapper
                                                transition={{
                                                    duration: 1,
                                                    delay: i * 0.1,
                                                }}
                                                key={i}
                                            >
                                                <MinimalBlogPost
                                                    blog={blog}
                                                    index={i}
                                                />
                                            </AnimationWrapper>
                                        );
                                    })
                                : <NoDataMessage message="ยังไม่มีบทความยอดนิยม" />
                            )}
                        </div>
                        <div>
                            <h1 className="font-medium text-xl mb-8">
                                เว็บไซต์ที่เกี่ยวข้อง                            
                            </h1>
                            <div className="mb-2">
                                <i className="fi fi-rr-arrow-small-right text-2xl absolute"></i>
                                <Link to='https://www.arts.chula.ac.th/th/' target="_blank" className="text-xl hover:underline ml-6">คณะอักษรศาสตร์</Link>
                            </div>
                            <div className="mb-2">
                                <i className="fi fi-rr-arrow-small-right text-2xl absolute"></i>
                                <Link to='https://sites.google.com/view/regartscu/' target="_blank" className="text-xl hover:underline ml-6">งานทะเบียนคณะอักษรศาสตร์</Link>
                            </div>
                            <div className="mb-2">
                                <i className="fi fi-rr-arrow-small-right text-2xl absolute"></i>
                                <Link to='https://www.reg.chula.ac.th/th/' target="_blank" className="text-xl hover:underline ml-6">สำนักงานทะเบียน</Link>
                            </div>
                            <div className="mb-2">
                                <i className="fi fi-rr-arrow-small-right text-2xl absolute"></i>
                                <Link to='https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23db5f8e&ctz=Asia%2FBangkok&hl=en&showNav=1&showPrint=0&showCalendars=1&src=cmVnY2FsZW5kYXJAdGVhbS5jaHVsYS5hYy50aA&color=%23039BE5' target="_blank" className="text-xl hover:underline ml-6">[CUREG Calendar] ทวิภาค-ทวิภาคนานาชาติ</Link>
                            </div>

                        </div>                        
                    </div>
                </div>
            </section>
            <Footer />
            </AnimationWrapper>
        </>
        
    );
};

export default HomePage;
