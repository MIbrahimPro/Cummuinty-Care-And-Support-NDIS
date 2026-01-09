import Hero from "../components/Hero";
import Locs from "../components/Locs";
import SmartSection from "../components/SmartSection";

import { locationsData } from '../data/data';

function Locations() {
    return (
        <>

            <Hero
                heading="Areas We Service"
                image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                image2="https://picsum.photos/seed/picsum3/1200/800"
                showCallback={true}
                paragraph={"We serve in Brisbne, Logan, Ipswich, Gold Coast, Sunshine Coast and Toowoomba"}
            />


            <Locs locationsData={locationsData} />


            <SmartSection
                title="Your Gateway to Enhanced Independence"
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
                    "At Community Care and Support, we dedicate ourselves to helping enhance the lives of those in need of a helping hand. We strive to stand as a beacon of support across Ipswich, Logan and the greater Brisbane area, offering:"
                ]}
                paragraphstwo={[
                    "We warmly extend our services to all NDIS participants and the wider community, ensuring no matter where you are, assistance can be just a call away. Reach out to us on 0418 730 264 or request a call back on this page."
                ]}
                showButton={true}
            />
        </>
    )
};
export default Locations;