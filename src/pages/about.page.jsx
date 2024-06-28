import Footer from "../components/footer.component"
import AboutGoz from "../components/goz.about.component"

const About = () => {
  return (
    <>
        <div className="h-cover flex justify-center">
            <div className="w-full m-10">
                <AboutGoz />
            </div>
        </div>
        <Footer />
    </>
  )
}

export default About