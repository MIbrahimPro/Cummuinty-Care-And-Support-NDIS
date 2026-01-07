// data/data.js
// data/data.js
export const siteData = {
    phoneNumber: "0492 265 171",
    telLink: "0492 265 171",
    phoneNumber2: "0449 202 937",
    telLink2: "0449202937",
    email: "Info@communitycare.com.au",
    Address: "unit 35, 54 outlook place, Durack 4077, QLD",
    ABN: "12 684 957 819",
    menu: [
        { title: "Home", link: "/" },
        {
            title: "What We Do",
            link: "/services",
            children: [
                { title: "Supported Independent Living (SIL)", link: "/services/supported-independent-living" },
                { title: "Supported Daily Tasks in Shared Living", link: "/services/shared-living" },
                { title: "Support with Household Tasks", link: "/services/household-tasks" },
                { title: "Community Participation", link: "/services/community-participation" },
                { title: "Travel & Transport", link: "/services/travel-transport" },
            ],
        },
        {
            title: "Service Areas",
            link: "/locations",
            children: [
                {
                    title: "Brisbane",
                    link: "/locations/brisbane",
                    children: [
                        { title: "SIL Brisbane", link: "/locations/brisbane/supported-independent-living" },
                        { title: "Shared Living Brisbane", link: "/locations/brisbane/shared-living" },
                        { title: "Household Tasks Brisbane", link: "/locations/brisbane/household-tasks" },
                        { title: "Community Participation Brisbane", link: "/locations/brisbane/community-participation" },
                        { title: "Travel & Transport Brisbane", link: "/locations/brisbane/travel-transport" },
                    ],
                },
                {
                    title: "Logan",
                    link: "/locations/logan",
                    children: [
                        { title: "SIL Logan", link: "/locations/logan/supported-independent-living" },
                        { title: "Shared Living Logan", link: "/locations/logan/shared-living" },
                        { title: "Household Tasks Logan", link: "/locations/logan/household-tasks" },
                        { title: "Community Participation Logan", link: "/locations/logan/community-participation" },
                        { title: "Travel & Transport Logan", link: "/locations/logan/travel-transport" },
                    ],
                },
                {
                    title: "Ipswich",
                    link: "/locations/ipswich",
                    children: [
                        { title: "SIL Ipswich", link: "/locations/ipswich/supported-independent-living" },
                        { title: "Shared Living Ipswich", link: "/locations/ipswich/shared-living" },
                        { title: "Household Tasks Ipswich", link: "/locations/ipswich/household-tasks" },
                        { title: "Community Participation Ipswich", link: "/locations/ipswich/community-participation" },
                        { title: "Travel & Transport Ipswich", link: "/locations/ipswich/travel-transport" },
                    ],
                },
                {
                    title: "Gold Coast",
                    link: "/locations/gold-coast",
                    children: [
                        { title: "SIL Gold Coast", link: "/locations/gold-coast/supported-independent-living" },
                        { title: "Shared Living Gold Coast", link: "/locations/gold-coast/shared-living" },
                        { title: "Household Tasks Gold Coast", link: "/locations/gold-coast/household-tasks" },
                        { title: "Community Participation Gold Coast", link: "/locations/gold-coast/community-participation" },
                        { title: "Travel & Transport Gold Coast", link: "/locations/gold-coast/travel-transport" },
                    ],
                },
                {
                    title: "Sunshine Coast",
                    link: "/locations/sunshine-coast",
                    children: [
                        { title: "SIL Sunshine Coast", link: "/locations/sunshine-coast/supported-independent-living" },
                        { title: "Shared Living Sunshine Coast", link: "/locations/sunshine-coast/shared-living" },
                        { title: "Household Tasks Sunshine Coast", link: "/locations/sunshine-coast/household-tasks" },
                        { title: "Community Participation Sunshine Coast", link: "/locations/sunshine-coast/community-participation" },
                        { title: "Travel & Transport Sunshine Coast", link: "/locations/sunshine-coast/travel-transport" },
                    ],
                },
                {
                    title: "Toowoomba",
                    link: "/locations/toowoomba",
                    children: [
                        { title: "SIL Toowoomba", link: "/locations/toowoomba/supported-independent-living" },
                        { title: "Shared Living Toowoomba", link: "/locations/toowoomba/shared-living" },
                        { title: "Household Tasks Toowoomba", link: "/locations/toowoomba/household-tasks" },
                        { title: "Community Participation Toowoomba", link: "/locations/toowoomba/community-participation" },
                        { title: "Travel & Transport Toowoomba", link: "/locations/toowoomba/travel-transport" },
                    ],
                },
            ],
        },
        { title: "Contact Us", link: "/contact" },
    ],
};


export const servicesData = [
    {
        id: 1,
        slug: "supported-independent-living",
        image: "https://smileprovider.com.au/wp-content/uploads/2023/09/Supported-Independent-Living-768x576.webp",
        title: "Supported Independent Living (SIL)",
        description: "We focus on empowering you to live as independently as possible, providing support while respecting your autonomy. Our approach is flexible, adapting to your daily life.",
        link: "/services/supported-independent-living",
        ss1: {
            title: "Compassionate, Personalised Support",
            image: "https://picsum.photos/1200",
            imagePosition: "left",
            paragraphs: [
                "At Community Care and Support, we specialise in providing compassionate and personalised Supported Independent Living (SIL) services for individuals in Ipswich, Logan and the greater Brisbane area. Our primary clients include NDIS participants who seek to live independently while receiving the tailored support they need to thrive. We cater to individuals with various levels of disability, ensuring they can live comfortably and confidently within a nurturing environment.",
                "Our SIL services are designed to promote independence while offering assistance with daily tasks, personal care, transport and community integration. As a local, family-owned business deeply rooted in the Ipswich community, we understand the unique needs of our participants and are committed to empowering them to lead fulfilling lives.",
                "With a warm and supportive approach, Community Care and Support provides reliable, high-quality care that aligns with your goals and enhances your quality of life. To find out more about how we can support you, contact us on 0492 265 171 or request a call back on this page."
            ],
            showButton: true
        },
        ss2: {
            title: "How We Can Help You",
            image: "https://picsum.photos/1200",
            imagePosition: "right",
            paragraphs:
                [
                    "Supported Independent Living (SIL) is a service designed to help individuals with disabilities live as independently as possible while receiving support tailored to their needs. SIL typically includes assistance with daily tasks such as personal care, meal preparation and household management. The support may be provided in the individual’s own home or in shared living arrangements, depending on their preferences and circumstances.",
                    "SIL aims to go beyond basic care by aiming to promote skill development, encouraging community participation and fostering social connections. Participants can work closely with support workers to achieve personal goals, whether that involves learning new skills, improving independence or building relationships within the community. Each SIL plan is flexible and customised to the individual, helping ensure unique needs and preferences can be met.",
                    "This service is vital in empowering individuals to live more meaningful, autonomous lives while providing the reassurance of ongoing support when needed. Contact Community Care and Support today."
                ],
            showButton: true
        },
    },
    {
        id: 2,
        slug: "shared-living",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800",
        title: "Supported Daily Tasks in Shared Living",
        description: "We understand the importance of a supportive shared living environment. Our team can assist with daily tasks, helping foster an atmosphere where you can thrive alongside others.",
        link: "/services/shared-living",
        ss1: {
            title: "Helping Maintain Independence",
            image: "https://picsum.photos/1200",
            imagePosition: "left",
            paragraphs: [
                "Serenity Strides offers compassionate and personalised support for NDIS participants in Ipswich, Logan and the greater Brisbane area who live in shared accommodations. Our services focus on assisting with daily tasks, including cooking, cleaning and personal care, while fostering a collaborative and supportive living environment.",
                "Our target audience includes individuals with disabilities who seek to maintain their independence within a shared living arrangement. We tailor our support to meet the unique needs of each participant, ensuring they can confidently manage daily responsibilities while enjoying the companionship of shared living.",
                "As a local, family-owned business deeply connected to the Ipswich community, Serenity Strides is dedicated to empowering individuals to live fulfilling lives in a safe and nurturing environment. We also provide Supported Independent Living (SIL) services, community participation and transport. Contact us on 0418 730 264 or request a call back on this page."
            ],
            showButton: true
        },

        ss2: {
            title: "Types of Assistance Provided",
            image: "https://picsum.photos/1200",
            imagePosition: "right",
            paragraphs:
                [
                    "Supported daily tasks in shared living focus on assisting individuals with disabilities to manage and perform essential day-to-day activities, aiming to promote greater independence. These supports are tailored to individual needs and are designed to help participants live more autonomously. Here’s what supported daily tasks typically include:",
                ],
            listItems:
                [
                    "Personal Care Assistance: Help with personal hygiene tasks such as showering, dressing, grooming and using the toilet.",
                    "Meal Preparation: Support with planning, cooking and serving nutritious meals, as well as help with eating if required.",
                    "Medication Management: Assistance with taking prescribed medication, including setting reminders and ensuring the correct dosage is taken.",
                    "Household Tasks: Support with domestic chores such as cleaning, laundry and tidying up living spaces.",
                    "Grocery Shopping: Accompaniment to shops or assistance with creating a shopping list and purchasing essentials.",
                    "Transport Assistance: Help with using public transport or arranging transport for medical appointments, shopping, or social activities.",
                    "Community Participation: Support with joining social, recreational or community activities to help build relationships and skills.",
                    "Home Safety Management: Assistance in maintaining a safe living environment, including minor household maintenance.",
                ],
            paragraphs2:
                [
                    "Supported daily tasks with Serenity Strides aims to empower individuals to enhance their independence while helping ensure essential daily needs are met in a shared space. Reach out today.",
                ],
            showButton: true
        },

    },
    {
        id: 3,
        slug: "household-tasks",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800",
        title: "Support with Household Tasks",
        description: "Our team helps maintain a clean, safe, and comfortable home environment. From cleaning to meal preparation, we assist with the chores that keep your home running smoothly.",
        link: "/services/household-tasks",
        ss1: {
            title: "Clean & Comfortable Environments",
            image: "https://picsum.photos/1200",
            imagePosition: "left",
            paragraphs: [
                "At Serenity Strides, we provide warm and personalised assistance with household tasks for NDIS participants in Ipswich, Logan and the greater Brisbane area. Our services are designed to help individuals with disabilities maintain a clean, organised and comfortable home environment, empowering them to live independently and confidently.",
                "Our target audience includes NDIS participants who need support with everyday household activities such as cleaning, laundry and meal preparation. We tailor our services to meet each participant's unique needs, ensuring they can enjoy a safe and well-maintained home.",
                "As a local, family-owned business with deep roots in Ipswich, Serenity Strides is committed to offering compassionate and reliable care that enhances the quality of life for our participants. We take pride in our professional yet warm approach, making us a trusted partner in your journey towards greater independence.",
                "To find out more about how we can support you, contact us on 0418 730 264 or request a call back on this page. We also provide Supported Independent Living (SIL) services, support for shared living, community participation and transport.",
            ],
            showButton: true
        },

        ss2: {
            title: "Supporting Your Various Needs",
            image: "https://picsum.photos/1200",
            imagePosition: "right",
            paragraphs:
                [
                    "To support participants of varying needs, Serenity Strides can provide:",
                ],
            listItems:
                [
                    { heading: "Personal care", text: "Assistance with bathing, grooming, dressing and hygiene." },
                    { heading: "Meal preparation", text: "Help with cooking, grocery shopping and meal planning." },
                    { heading: "Medication Management", text: "Support with administering and reminding of medications." },
                    { heading: "Cleaning", text: "Household cleaning, vacuuming, mopping and dusting." },
                    { heading: "Laundry", text: "Assistance with washing, drying and folding clothes." },
                    { heading: "Gardening", text: "Basic yard maintenance and gardening tasks." },
                    { heading: "Home organisation", text: "Decluttering and organising household spaces." },
                    { heading: "Toileting", text: "Help with toileting needs and continence care." },
                    { heading: "Mobility assistance", text: "Support with moving around the home or outside." },
                    { heading: "Social activities", text: "Participation in community and recreational events." },


                ],
            paragraphs2:
                [
                    "Get in touch to learn more about how we can help facilitate your needs.",
                ],
            showButton: true
        },
        ss3: {
            title: "Why Household Assistance is Important",
            image: "https://picsum.photos/1200",
            imagePosition: "left",
            paragraphs: [
                "NDIS participants can benefit from support with household tasks, as it helps individuals with disabilities maintain a clean, safe and organised living environment while also promoting their independence. This type of support is designed to allow participants to live more independently by ensuring their home remains functional and comfortable, without overwhelming them with the demands of everyday chores.",
                "For individuals with limited mobility or cognitive challenges, household task support can provide vital assistance, reducing stress and freeing up time for other activities like socialising, work or skill development. Participants are often encouraged to take part in household duties as much as they are able, helping to build life skills and confidence.",
                "By tailoring the level of assistance to the participant’s specific needs, NDIS support workers can empower individuals to live more autonomously while maintaining a healthy and organised living space.",
                "Contact Serenity Strides to get started."
            ],
            showButton: true
        },
    },
    {
        id: 4,
        slug: "community-participation",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800",
        title: "Community Participation",
        description: "Stay connected and active. We support you in engaging with your local community, attending events, and pursuing hobbies that bring you joy and fulfillment.",
        link: "/services/community-participation",
        ss1: {
            title: "Fostering Social Connection",
            image: "https://picsum.photos/1200",
            imagePosition: "left",
            paragraphs: [
                "Serenity Strides offers warm and personalised NDIS community participation services in Ipswich, Logan and the greater Brisbane area, designed to help individuals with disabilities engage fully in their community. Our services focus on fostering social connections, encouraging participation in local activities and building meaningful relationships that enhance the overall well-being of our participants.",
                "Our target audience includes NDIS participants who seek to be more active in their community, whether through social events, recreational activities or volunteering opportunities. We tailor our support to each individual’s interests and goals, empowering them to take part in community life with confidence and enjoyment.",
                "As a local, family-owned business deeply embedded in the Ipswich community, Serenity Strides is committed to providing compassionate and professional care that supports our participants in leading fulfilling and socially connected lives.",
                "We also provide Supported Independent Living (SIL) services, daily task support, shared living support and transport. Contact us on 0418 730 264 or request a call back on this page.",

            ],
            showButton: true
        },

        ss2: {
            title: "Aligning with Your Goals & Interests",
            image: "https://picsum.photos/1200",
            imagePosition: "right",
            paragraphs:
                [
                    "Community participation aims to support individuals with disabilities to engage in various social, recreational and community activities that align with their personal goals and interests. This support can include:",
                ],
            listItems:
                [
                    "Assistance in joining community groups",
                    "Attending social events",
                    "Participating in hobbies sports or leisure activities",
                    "Skill-building workshops, such as cooking classes, arts & crafts or learning a new language",
                ],
            paragraphs2:
                [
                    "The program is designed to encourage inclusion and social interaction, helping participants to improve their communication and social skills. It can also assist in building self-confidence and fostering new relationships. Community participation may also include transport to and from activities, as well as the support of a worker to help individuals access the community safely and independently.",
                    "Participants can choose activities that reflect their interests and aspirations, making the program flexible and tailored to individual needs. This support plays a key role in enhancing social connections, well-being and community engagement.",
                    "To learn more about how we can support you, enquire with Serenity Strides."
                ],
            showButton: true
        },
    },
    {
        id: 5,
        slug: "travel-transport",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800",
        title: "Travel & Transport",
        description: "Reliable assistance to get you where you need to go. Whether it is medical appointments, grocery shopping, or social outings, we ensure you travel safely and on time.",
        link: "/services/travel-transport",
        ss1: {
            title: "Reliable & Safe Transport",
            image: "https://picsum.photos/1200",
            imagePosition: "left",
            paragraphs: [
                "Serenity Strides provides reliable and compassionate NDIS travel and transport services for participants in Ipswich, Logan and the greater Brisbane area. Our services are designed to ensure safe and convenient transportation to medical appointments, social activities and community events, enabling participants to maintain their independence and stay connected with their community.",
                "Our target audience includes NDIS participants who require assistance with travel and transport, ensuring they can access essential services and participate in the activities that matter most to them. We offer fully insured, accessible vehicles and caring companions who understand and cater to each participant's unique needs.",
                "As a local, family-owned business, Serenity Strides is committed to delivering professional, warm and personalised support that enhances the quality of life for our participants in Ipswich, Logan and the greater Brisbane area. We also provide Supported Independent Living (SIL) services, as well as support for shared living and daily tasks. To find out how we can help meet your travel and transport needs, give us a call or request a call back on this page."
            ],
            showButton: true
        },

        ss2: {
            title: "Access Appointments & Activities",
            image: "https://picsum.photos/1200",
            imagePosition: "right",
            paragraphs:
                [
                    "NDIS transport funding provided by Serenity Strides is designed to assist participants who have difficulty using public transport due to their disability. This funding can help individuals complete everyday errands, such as grocery shopping, attending medical appointments or participating in community events. Transport support may also be used for taxis, ride share services or community transport to—aiming to ensure participants can access essential services safely and independently.",
                    "For those with support workers, NDIS funding also covers the assistance of these workers in driving participants to their appointments or activities. Whether it’s a trip to the doctor, a social gathering or a therapy session, our support workers can provide the necessary transportation and help participants to manage their schedules.",
                    "Transport funding can enhance independence by allowing participants to stay connected with their community and access the services they need without relying on family members or friends. By providing reliable transportation, the NDIS helps ensure participants can achieve their everyday goals and live more independently.",
                    "Contact us today.",
                ],
            listItems:
                [
                    "Assistance in joining community groups",
                    "Attending social events",
                    "Participating in hobbies sports or leisure activities",
                    "Skill-building workshops, such as cooking classes, arts & crafts or learning a new language",
                ],
            paragraphs2:
                [
                    "The program is designed to encourage inclusion and social interaction, helping participants to improve their communication and social skills. It can also assist in building self-confidence and fostering new relationships. Community participation may also include transport to and from activities, as well as the support of a worker to help individuals access the community safely and independently.",
                    "Participants can choose activities that reflect their interests and aspirations, making the program flexible and tailored to individual needs. This support plays a key role in enhancing social connections, well-being and community engagement.",
                    "To learn more about how we can support you, enquire with Serenity Strides."
                ],
            showButton: true
        },
    },
];




export const locationsData = [
    {
        id: 1,
        slug: "Brisbane",
        image: "https://images.unsplash.com/photo-1549471013-3364d7220b75?auto=format&fit=crop&q=80&w=800",
        title: "Brisbane",
    },
    {
        id: 2,
        slug: "logan",
        image: "https://images.pexels.com/photos/10368612/pexels-photo-10368612.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Logan",
    },
    {
        id: 3,
        slug: "ipswich",
        image: "https://images.pexels.com/photos/3353457/pexels-photo-3353457.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Ipswich",
    },
    {
        id: 4,
        slug: "gold-coast",
        image: "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Gold Coast",
    },
    {
        id: 5,
        slug: "sunshine-coast",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800",
        title: "Sunshine Coast",
    },
    {
        id: 6,
        slug: "toowoomba",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
        title: "Toowoomba",
    },
];