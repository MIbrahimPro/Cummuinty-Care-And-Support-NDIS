import FeatureSection from "../components/Features";
import Hero from "../components/Hero";
import Passion from "../components/Passion";
import FAQ from "../components/FAQ";
import ServiceList from "../components/ServiceList";
import Serloc from "../components/SerLoc";
import SmartSection from "../components/SmartSection";
import WhoSection from "../components/Whosection";
import ContactSection from "../components/contactsec";


function Services() {
    return (
        <>

            <Hero
                // tagline="Community Care and Support"
                heading="NDIS Disability Support Services in Multiple Locations"
                paragraph="Serving for Humanity"
                image="https://lirp.cdn-website.com/401a0922/dms3rep/multi/opt/shutterstock_2433708081-2880w.jpg"
                image2="https://picsum.photos/seed/picsum2/1200/800"
                showCallback={true}
            />
            <ContactSection requestOnly={true} showMessage={false} />

            <ServiceList />
            <SmartSection
                title="Your Supportive Partners"
                image="https://picsum.photos/1200"
                imagePosition="left"
                paragraphs={[
                    "Welcome to a world where every individual is championed to live life to its fullest. At Community Care and Support, we provide comprehensive NDIS disability support services for clients in Multiple areas. Our services are designed to help foster independence, nurture growth and encourage community engagement.",
                    "Partner with us for Supported Independent Living (SIL), supported daily tasks in shared living, support with household tasks and community participation (including travel and transport).",
                    "Seeking support tailored to your needs? Call us on 0492 265 171 or request a call back on this page. We look forward to assisting you."
                ]}
                showButton={true}
            />

        </>
    )
};
export default Services;