import FeatureSection from "../components/Features";
import Hero from "../components/Hero";
import Passion from "../components/Passion";
import FAQ from "../components/FAQ";
import ServiceList from "../components/ServiceList";
import Serloc from "../components/SerLoc";
import SmartSection from "../components/SmartSection";
import WhoSection from "../components/Whosection";
import MapBox from "../components/Mapbox";
import ContactSection from "../components/contactsec";
import Locs from "../components/Locs";
import { useParams } from "react-router-dom";
import { servicesData, locationsData } from "../data/data";
import { useEffect } from "react";

function LocationsDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { locationSlug, serviceSlug } = useParams();

    const location = locationsData.find(loc => loc.slug.toLowerCase() === locationSlug.toLowerCase());
    const service = servicesData.find(ser => ser.slug.toLowerCase() === serviceSlug.toLowerCase());

    if (!location || !service) {
        return <div>Location or Service not found</div>;
    }

    const otherLocations = locationsData
        .filter(loc => loc.slug.toLowerCase() !== locationSlug.toLowerCase())
        .map(loc => loc.title);

    const otherLocationsString = otherLocations.slice(0, -1).join(', ') + (otherLocations.length > 1 ? ' and ' : '') + otherLocations.slice(-1);


    return (
        <>
            <Hero
                heading={`${service.title} in ${location.title}`}
                paragraph={`Also servicing in ${otherLocationsString}`}
                image={service.image}
                showCallback={true}
                hasForm={true}
                location={location.title}
                longer={true}
            />

            {service.ss1 && (
                <SmartSection
                    title={service.ss1.title}
                    image={service.ss1.image}
                    listItems={service.ss1.listItems}
                    imagePosition={service.ss1.imagePosition}
                    paragraphs={service.ss1.paragraphs}
                    paragraphstwo={service.ss1.paragraphs2}
                    showButton={service.ss1.showButton}
                />
            )}

            <ServiceList />

            {service.ss2 && (
                <SmartSection
                    title={service.ss2.title}
                    image={service.ss2.image}
                    listItems={service.ss2.listItems}
                    imagePosition={service.ss2.imagePosition}
                    paragraphs={service.ss2.paragraphs}
                    paragraphstwo={service.ss2.paragraphs2}
                    showButton={service.ss2.showButton}
                />
            )}

            <ContactSection requestOnly={false} showMessage={true} locationSet={location.title} defaultService={service.title} />
            <MapBox />
            <FAQ />
            <Passion />

            <Locs locationsData={locationsData} exclude={location.title} heading={"Other Service Areas"} />
        </>
    )
};
export default LocationsDetail;