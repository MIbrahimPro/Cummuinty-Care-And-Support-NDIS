import Hero from "../components/Hero";
import MapSection from "../components/Mapbox";
import SmartSection from "../components/SmartSection";
import ContactSection from "../components/contactsec";


function Contact() {
    return (
        <>

            <Hero
                heading="Contact Our Team"
                image="https://images.unsplash.com/photo-1529397938791-2aba4681454f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=800lohttps://picsum.photos/200"
                showCallback={false} // Hidden for this page
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
                    "At Serenity Strides, believe in fostering a supportive and nurturing environment for all individuals. We offer comprehensive NDIS support throughout Ipswich, Logan and the greater Brisbane area, including:"
                ]}
                paragraphstwo={["If you, your loved ones or your clients require our assistance, please don't hesitate to get in touch. We're here to help empower and support you every step of the way."]}
                showButton={true}
                buttonText="Call 0418 730 264"
            />
        </>
    )
};
export default Contact;