import { useParams } from "react-router-dom";
import { servicesData } from "../data/data";
import FeatureSection from "../components/Features";
import Hero from "../components/Hero";
import Passion from "../components/Passion";
import FAQ from "../components/FAQ";
import ServiceList from "../components/ServiceList";
import Serloc from "../components/SerLoc";
import SmartSection from "../components/SmartSection";
import WhoSection from "../components/Whosection";
import ContactSection from "../components/contactsec";


function ServiceDetails() {
    const { serviceSlug } = useParams();
    const service = servicesData.find((s) => s.slug === serviceSlug);

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <>

            <Hero
                heading={service.title + " in Multiple Locations"}
                paragraph={"Serving For Humanity"}
                image={service.image}
                showCallback={true}
            />
            <ContactSection requestOnly={true} showMessage={false} defaultService={service.title} />

            {service.ss1 && (
                <SmartSection
                    title={service.ss1.title}
                    image={service.ss1.image}
                    imagePosition={service.ss1.imagePosition}
                    paragraphs={service.ss1.paragraphs}
                    showButton={service.ss1.showButton}
                    paragraphstwo={service.ss1.paragraphs2}
                />
            )}


            <Passion />
            <FAQ />
            {service.ss2 && (
                <SmartSection
                    title={service.ss2.title}
                    image={service.ss2.image}
                    imagePosition={service.ss2.imagePosition}
                    paragraphs={service.ss2.paragraphs}
                    listItems={service.ss2.listItems}
                    paragraphs2={service.ss2.paragraphs2}
                    showButton={service.ss2.showButton}
                    paragraphstwo={service.ss2.paragraphs2}
                />
            )}

            {service.ss3 && (
                <SmartSection
                    title={service.ss3.title}
                    image={service.ss3.image}
                    imagePosition={service.ss3.imagePosition}
                    paragraphs={service.ss3.paragraphs}
                    showButton={service.ss3.showButton}
                    paragraphstwo={service.ss3.paragraphs2}
                />
            )}


            <Serloc />
        </>
    )
};
export default ServiceDetails;