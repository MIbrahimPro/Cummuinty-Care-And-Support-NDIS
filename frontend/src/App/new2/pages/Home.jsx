import FeatureSection from "../components/Features";
import Hero from "../components/Hero";
import Passion from "../components/Passion";
import FAQ from "../components/FAQ";
import ServiceList from "../components/ServiceList";
import Serloc from "../components/SerLoc";
import SmartSection from "../components/SmartSection";
import WhoSection from "../components/Whosection";
import ContactSection from "../components/contactsec";


function Home() {
    return (
        <>

            <Hero
                tagline="Community Care and Support Australia"
                heading="Compassionate Support in Multiple Locations"
                listItems={[
                    "Personalised support tailored to your specific needs",
                    "We strive to provide a welcoming, friendly environment",
                    "Local family-owned business",
                    "Servicing Brisbane and the greater Brisbane area"
                ]}
                image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                image2="https://picsum.photos/seed/picsum/1200/800"
                showCallback={true}
            />
            <FeatureSection />
            <ContactSection requestOnly={true} showMessage={false} />

            <SmartSection
                title="Helping Foster Independence"
                image="https://picsum.photos/1200"
                listItems={[
                    "Supported Independent Living (SIL)",
                    "Supported Daily Tasks in Shared Living",
                    "Support with Household Tasks",
                    "Community Participation",
                    "Travel & Transport"
                ]}
                imagePosition="left"
                paragraphs={[
                    "Welcome to Community Care and Support, your pathway to supportive and nurturing support throughout Ipswich, Logan and the greater Brisbane area. We understand the significance of fostering independence and community integration for those with disabilities. That's why we're dedicated to offering a comprehensive range of services designed to enrich the lives of our clients, including:"
                ]}
                paragraphstwo={[
                    "With our passion for disability support and commitment to creating personalised, welcoming environments, we stand out as a family-owned business dedicated to the diverse needs of our community. To get started, contact us on 0418 730 264 or request a call back on this page."
                ]}
                showButton={true}
            />
            <ServiceList />
            <Passion />
            <WhoSection />
            <FAQ />
            <Serloc />
        </>
    )
};
export default Home;