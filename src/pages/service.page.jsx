import Footer from "../components/footer.component"
import ServiceDetail from "../components/service.component"

const Service = () => {
  return (
    <div>
        <div className="h-cover flex justify-center">
            <div className="w-full m-10">
                <ServiceDetail />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Service