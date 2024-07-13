import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import lightLogo from "../imgs/logo-light.png";
import darkLogo from "../imgs/logo-dark.png";
import AnimationWrapper from "../common/page-animation";
import lightBanner from "../imgs/blog banner light.png";
import darkBanner from "../imgs/blog banner dark.png";
import { uploadImage } from "../common/aws";
import { useContext, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { EditorContext } from "../pages/editor.pages";
import EditorJS from "@editorjs/editorjs";
import { tools } from "./tools.component";
import axios from "axios";
import { ThemeContext, UserContext } from "../App";

const BlogEditor = () => {

    let { blog, blog: { title, banner, content, tags, des }, setBlog, textEditor, setTextEditor, setEditorState } = useContext(EditorContext)

    let { userAuth: { access_token } } = useContext(UserContext)
    let { theme } = useContext(ThemeContext);
    let { blog_id } = useParams();

    let navigate = useNavigate();

    // useEffect
    useEffect(() => {
        if(!textEditor.isReady){
            setTextEditor(new EditorJS({
                holderId: "textEditor",
                data: Array.isArray(content) ? content[0] : content,
                tools: tools,
                placeholder: "เขียนอะไรบางอย่าง..."
            }))
        }
    }, [])

    const handleBannerUpload = (e) => {
        let img = e.target.files[0];

        if(img){

            let loadingToast = toast.loading("กำลังอัปโหลด")

            uploadImage(img).then((url) => {
                if(url){

                    toast.dismiss(loadingToast);
                    toast.success("อัปโหลดแล้ว");

                    setBlog({ ...blog, banner: url })

                }
            })
            .catch(err => {
                toast.dismiss(loadingToast);
                return toast.error(err);
            })
        }
    }

    const handleTitleKeyDown = (e) => {
        if(e.keyCode == 13) { // enter key
            e.preventDefault();
        }
    }

    const handleTitleChange = (e) => {
        let input = e.target;

        input.style.height = 'auto';
        input.style.height = input.scrollHeight + "px";

        setBlog({ ...blog, title: input.value })
    }

    const handleError = (e) => {
        let img = e.target;

        img.src = theme == "light" ? lightBanner : darkBanner;
    }

    const handlePublishEvent = () => {
        
        if(!banner.length){
            return toast.error("จำเป็นต้องมีรูปภาพแบนเนอร์")
        }

        if(!title.length){
            return toast.error("จำเป็นต้องมีหัวข้อ")
        }

        if(textEditor.isReady){
            textEditor.save().then(data => {
                if(data.blocks.length){
                    setBlog({ ...blog, content: data });
                    setEditorState("publish")
                } else{
                    return toast.error("เขียนบางอย่างเพื่อเผยแพร่เลย")
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }

    }

    const handleSaveDraft = (e) => {

        if(e.target.className.includes("disable")) {
            return;
        }

        if(!title.length){
            return toast.error("เขียนหัวข้อก่อนบันทึกร่าง")
        }

        let loadingToast = toast.loading("กำลังบันทึกร่าง");

        e.target.classList.add('disable');

        if(textEditor.isReady){
            textEditor.save().then(content => {

                let blogObj = {
                    title, banner, des, content, tags, draft: true
                }

                axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/create-blog", { ...blogObj, id: blog_id }, {
                    headers: {
                        'Authorization': `Bearer ${access_token}`
                    }
                })
                .then(() => {
                    
                    e.target.classList.remove('disable');
        
                    toast.dismiss(loadingToast);
                    toast.success("บันทึกแล้ว");
        
                    setTimeout(() => {
                        navigate("/dashboard/blogs?tab=draft")
                    }, 500);
        
                })
                .catch(( { response } ) => {
                    e.target.classList.remove('disable');
                    toast.dismiss(loadingToast);
        
                    return toast.error(response.data.error)
                })

            })
        }
    }
    let [isOpen, setIsOpen] = useState(true)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="flex-none w-48">
                    <img src={ theme == "light" ? darkLogo : lightLogo } />
                </Link>
                <p className="max-md:hidden text-black line-clamp-1 w-full">
                    { title.length ? title : "New Blog" }
                </p>

                <div className="flex gap-4 ml-auto">
                    <button className="btn-dark py-2"
                        onClick={handlePublishEvent}
                    >
                        เผยแพร่
                    </button>
                    <button className="btn-light py-2"
                        onClick={handleSaveDraft}
                    >
                        บันทึกร่าง
                    </button>
                </div>
            </nav>
            <Toaster />
            <AnimationWrapper>
                <section>
                    <div className="mx-auto max-w-[900px] w-full">
                         

                        <div className="relative aspect-video hover:opacity-80 bg-white border-4 border-grey">
                            <label htmlFor="uploadBanner">
                                <img 
                                    src={banner}
                                    className="z-20"
                                    onError={handleError}
                                />
                                <input 
                                    id="uploadBanner"
                                    type="file"
                                    accept=".png, .jpg, .jpeg"
                                    hidden
                                    onChange={handleBannerUpload}
                                />
                            </label>
                        </div>

                        <textarea
                            defaultValue={title}
                            placeholder="เขียนหัวข้อ..."
                            className="text-4xl font-medium w-full h-20 outline-none resize-none mt-10 leading-tight placeholder:opacity-40 bg-white"
                            onKeyDown={handleTitleKeyDown}
                            onChange={handleTitleChange}
                        ></textarea>

                        <hr className="w-full opacity-10 my-5" />

                        <div id="textEditor" className="font-gelasio"></div>

                    </div>
                </section>
            </AnimationWrapper>
            <Dialog as="div" className="relative z-10" open={isOpen} onClose={close}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                 <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6"
                  >
                    คำแนะนำเรื่องการอัปโหลดภาพ
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-xl font-light">
                    เนื่องจากบริการที่ท่านกำลังใช้งานอยู่นั้นเป็นบริการโดยไม่เสียค่าใช้จ่าย และมีข้อจำกัดเรื่องพื้นที่การใช้งาน <b className="text-xl font-medium">เราจึงขอแนะนำให้ท่านอัปโหลดภาพไม่เกิน 1 ภาพ</b> ขออภัยในความไม่สะดวก
                    </p>                    
                  </div>                  

                  <div className="mt-5">
                    <button
                      type="button"
                      className="btn-dark"
                      onClick={close}
                    >
                      ปิด
                    </button>
                  </div>
                </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </>
    )
}

export default BlogEditor;