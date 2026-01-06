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
        link: "/services/sil",
    },
    {
        id: 2,
        slug: "shared-living",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800",
        title: "Supported Daily Tasks in Shared Living",
        description: "We understand the importance of a supportive shared living environment. Our team can assist with daily tasks, helping foster an atmosphere where you can thrive alongside others.",
        link: "/services/shared-living",
    },
    {
        id: 3,
        slug: "household-tasks",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800",
        title: "Support with Household Tasks",
        description: "Our team helps maintain a clean, safe, and comfortable home environment. From cleaning to meal preparation, we assist with the chores that keep your home running smoothly.",
        link: "/services/household-tasks",
    },
    {
        id: 4,
        slug: "community-participation",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800",
        title: "Community Participation",
        description: "Stay connected and active. We support you in engaging with your local community, attending events, and pursuing hobbies that bring you joy and fulfillment.",
        link: "/services/community-participation",
    },
    {
        id: 5,
        slug: "travel-transport",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800",
        title: "Travel & Transport",
        description: "Reliable assistance to get you where you need to go. Whether it is medical appointments, grocery shopping, or social outings, we ensure you travel safely and on time.",
        link: "/services/travel-transport",
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