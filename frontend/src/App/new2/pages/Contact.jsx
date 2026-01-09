import Hero from "../components/Hero";
import MapSection from "../components/Mapbox";
import SmartSection from "../components/SmartSection";
import ContactSection from "../components/contactsec";


function Contact() {
    return (
        <>

            <Hero
                heading="Contact Our Team"
                tagline="Community Care and Support Australia"
                paragraph="We're here to help. Contact us for any inquiries or to get started with our services."
                image="https://picsum.photos/1200/800"
                showCallback={false} // Hidden for this page
                simpler={true}
            />
            <ContactSection />
            <MapSection />
            <SmartSection
                title="Reach Out Today"
                image="https://picsum.photos/1200"
                imagePosition="left"
                listItems={[
                    "Supported Independent Living (SIL)",
                    "Supported Daily Tasks in Shared Living",
                    "Support with Household Tasks",
                    "Community Participation",
                    "Travel & Transport"
                ]}
                paragraphs={[
                    "At Community Care and Support, believe in fostering a supportive and nurturing environment for all individuals. We offer comprehensive NDIS support throughout Ipswich, Logan and the greater Brisbane area, including:"
                ]}
                paragraphstwo={["If you, your loved ones or your clients require our assistance, please don't hesitate to get in touch. We're here to help empower and support you every step of the way."]}
                showButton={true}
                buttonText="Call 0418 730 264"
            />
        </>
    )
};
export default Contact;