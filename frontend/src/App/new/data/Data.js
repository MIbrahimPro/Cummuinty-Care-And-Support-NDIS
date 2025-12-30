// src/App/new/data/Data.js
import { Users, Home, Activity, Heart, CheckSquare, Car } from 'lucide-react';

export const HERO_SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        title: "KNOW WE ARE HERE",
        subtitle: "We are here so that people with disabilities and their families have somewhere to turn."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        title: "EMPOWERING INDEPENDENCE",
        subtitle: "Our top priority is to maximise your independence and well-being in the community."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        title: "YOUR TRUSTED PARTNER",
        subtitle: "Professional, compassionate care tailored specifically to your unique needs."
    }
];

export const SERVICES_DATA = [
    {
        id: 1,
        slug: "life-stage-transition",
        title: "Life Stage Transition",
        shortTitle: "Life Transitions",
        icon: "Users",
        tagline: "Navigate Life's Changes with Confidence",
        shortDescription: "Supporting you through major life changes with personalized guidance and care.",
        heroImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        cardImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

        overview: {
            title: "What is Life Stage Transition Support?",
            description: "Life Stage Transition support is a comprehensive service designed to help individuals with disabilities navigate significant changes in their lives. Whether you're moving from school to work, transitioning to independent living, or facing any major life milestone, our dedicated team provides the guidance, resources, and emotional support you need to succeed.",
            highlights: [
                "Personalized transition planning",
                "Emotional and psychological support",
                "Skill development for new environments",
                "Family involvement and education",
                "Long-term follow-up and adjustment support"
            ]
        },

        whoIsItFor: {
            title: "Who Is This Service For?",
            description: "Our Life Stage Transition services are tailored for individuals who are experiencing or preparing for significant life changes. This includes:",
            groups: [
                {
                    title: "Young Adults Leaving School",
                    description: "Students with disabilities transitioning from secondary education to further study, employment, or adult services."
                },
                {
                    title: "Individuals Moving to Independent Living",
                    description: "Those preparing to leave the family home or care facility to live independently or in supported accommodation."
                },
                {
                    title: "Career Changers",
                    description: "Adults with disabilities seeking to enter the workforce, change careers, or retire from employment."
                },
                {
                    title: "Aging Individuals",
                    description: "Older adults requiring support as they transition to aged care services or experience age-related changes."
                },
                {
                    title: "Families Experiencing Change",
                    description: "Family units going through significant changes such as divorce, relocation, or loss of a primary caregiver."
                }
            ]
        },

        benefits: [
            {
                title: "Reduced Anxiety & Stress",
                description: "Our structured approach and consistent support help minimize the anxiety and uncertainty that often accompanies major life changes.",
                icon: "Heart"
            },
            {
                title: "Increased Independence",
                description: "We focus on building skills and confidence so you can take charge of your own life and make informed decisions.",
                icon: "Users"
            },
            {
                title: "Better Outcomes",
                description: "Research shows that supported transitions lead to better long-term outcomes in education, employment, and quality of life.",
                icon: "CheckSquare"
            },
            {
                title: "Family Peace of Mind",
                description: "Families can rest assured knowing their loved one has professional support during challenging transition periods.",
                icon: "Home"
            },
            {
                title: "Community Connection",
                description: "We help you build and maintain connections with your community, ensuring you never feel isolated during transitions.",
                icon: "Activity"
            },
            {
                title: "Personalized Approach",
                description: "Every transition plan is unique, designed around your specific goals, preferences, and circumstances.",
                icon: "Users"
            }
        ],

        process: {
            title: "Our Transition Process",
            description: "We follow a proven, person-centered approach to ensure successful transitions:",
            steps: [
                {
                    number: "01",
                    title: "Initial Consultation",
                    description: "We meet with you and your family to understand your current situation, goals, fears, and expectations. This comprehensive assessment forms the foundation of your transition plan."
                },
                {
                    number: "02",
                    title: "Personalized Planning",
                    description: "Based on our consultation, we develop a detailed transition plan with clear milestones, timelines, and support strategies. You're involved in every decision."
                },
                {
                    number: "03",
                    title: "Skill Building",
                    description: "We work with you to develop the specific skills needed for your new life stage. This might include practical skills, social skills, or emotional coping strategies."
                },
                {
                    number: "04",
                    title: "Gradual Implementation",
                    description: "We believe in gradual, supported change. We introduce new elements slowly, allowing you to adjust and build confidence at your own pace."
                },
                {
                    number: "05",
                    title: "Ongoing Support",
                    description: "Even after the transition is complete, we provide follow-up support to ensure you're thriving and to address any challenges that arise."
                }
            ]
        },

        whatIsIncluded: {
            title: "What's Included in Our Service",
            categories: [
                {
                    title: "Assessment & Planning",
                    items: [
                        "Comprehensive initial assessment",
                        "Goal setting and vision planning",
                        "Detailed transition roadmap",
                        "Risk assessment and mitigation planning",
                        "Regular progress reviews and plan updates"
                    ]
                },
                {
                    title: "Direct Support",
                    items: [
                        "One-on-one transition coaching",
                        "Accompaniment to new environments",
                        "Skill development sessions",
                        "Crisis intervention and support",
                        "Advocacy with other services and providers"
                    ]
                },
                {
                    title: "Family Services",
                    items: [
                        "Family consultations and education",
                        "Carer training and support",
                        "Family counseling referrals",
                        "Regular family updates and meetings",
                        "Respite coordination during transition"
                    ]
                },
                {
                    title: "Coordination",
                    items: [
                        "Multi-agency coordination",
                        "NDIS plan reviews and support",
                        "Referrals to specialist services",
                        "Documentation and reporting",
                        "Transition handover to receiving services"
                    ]
                }
            ]
        },

        approach: {
            title: "Our Approach",
            description: "At Community Care, we believe that successful transitions are built on trust, preparation, and genuine partnership. Our approach is:",
            principles: [
                {
                    title: "Person-Centered",
                    description: "You are at the center of everything we do. Your preferences, goals, and values drive the transition process."
                },
                {
                    title: "Strength-Based",
                    description: "We focus on your abilities and build upon your existing strengths rather than dwelling on limitations."
                },
                {
                    title: "Collaborative",
                    description: "We work closely with you, your family, and other service providers to ensure a coordinated, seamless transition."
                },
                {
                    title: "Evidence-Based",
                    description: "Our methods are grounded in research and best practices in disability support and transition planning."
                },
                {
                    title: "Flexible",
                    description: "We understand that transitions don't always go as planned. We adapt quickly to changing circumstances."
                },
                {
                    title: "Holistic",
                    description: "We consider all aspects of your life—physical, emotional, social, and practical—in our transition planning."
                }
            ]
        },

        testimonial: {
            quote: "The team at Community Care made what seemed like an impossible transition feel manageable. Moving out of home was terrifying for me and my parents, but with their support, I'm now living independently and thriving. I couldn't have done it without them.",
            author: "Michael T.",
            role: "Service Participant",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },

        faqs: [
            {
                question: "How long does a typical transition take?",
                answer: "The duration varies significantly depending on the complexity of the transition and individual needs. Simple transitions might take 3-6 months, while more complex ones (like moving to independent living) can take 12-18 months or longer. We never rush the process and move at a pace that's comfortable for you."
            },
            {
                question: "Can family members be involved in the transition process?",
                answer: "Absolutely! We encourage family involvement as much as possible. Family members often provide valuable insights and support. We offer family consultations, training sessions, and regular updates to keep everyone informed and involved."
            },
            {
                question: "What if the transition isn't working out?",
                answer: "Transitions don't always go smoothly, and that's okay. If challenges arise, we reassess the situation, adjust the plan, and provide additional support. In some cases, we might slow down or take a step back. The goal is always your wellbeing and success."
            },
            {
                question: "Is this service covered by NDIS?",
                answer: "Yes, Life Stage Transition support is typically funded under NDIS. It can fall under various categories including Capacity Building, Core Supports, or Support Coordination depending on your plan and specific needs. We can help you navigate your NDIS funding."
            },
            {
                question: "Do you support transitions for children as well as adults?",
                answer: "Yes, we support individuals of all ages. For children and young people, we work closely with schools, families, and other services to ensure smooth transitions between educational settings and into adult services."
            },
            {
                question: "What qualifications do your transition support workers have?",
                answer: "Our transition support workers hold relevant qualifications in disability support, social work, psychology, or related fields. They also receive specialized training in transition planning and person-centered approaches. All staff have current police checks and NDIS Worker Screening clearances."
            }
        ],

        relatedServices: ["household-tasks", "community-participation", "development-life-skills"],

        stats: [
            { number: "500+", label: "Successful Transitions" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "15+", label: "Years Experience" },
            { number: "50+", label: "Trained Staff" }
        ]
    },
    {
        id: 2,
        slug: "household-tasks",
        title: "Household Tasks",
        shortTitle: "Household Help",
        icon: "Home",
        tagline: "Maintaining a Safe and Comfortable Home",
        shortDescription: "Comprehensive assistance with daily household tasks to maintain a clean, safe, and organized living environment.",
        heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        cardImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

        overview: {
            title: "What is Household Tasks Support?",
            description: "Our Household Tasks support service provides practical assistance with daily household activities that may be challenging due to disability. From cleaning and laundry to meal preparation and home maintenance, our trained support workers help you maintain a comfortable, safe, and hygienic living environment while promoting your independence and teaching valuable skills.",
            highlights: [
                "Cleaning and tidying assistance",
                "Laundry and ironing support",
                "Meal preparation and cooking",
                "Grocery shopping and errands",
                "Garden and yard maintenance"
            ]
        },

        whoIsItFor: {
            title: "Who Is This Service For?",
            description: "Our Household Tasks services are designed for individuals who need support to maintain their home environment. This includes:",
            groups: [
                {
                    title: "Individuals with Physical Disabilities",
                    description: "Those who find household tasks physically challenging or impossible due to mobility issues, chronic pain, or physical limitations."
                },
                {
                    title: "People with Cognitive Disabilities",
                    description: "Individuals who may need guidance, reminders, or supervision to complete household tasks safely and effectively."
                },
                {
                    title: "Those with Sensory Impairments",
                    description: "People with visual or hearing impairments who may need adapted support for household management."
                },
                {
                    title: "Individuals with Psychosocial Disabilities",
                    description: "Those whose mental health conditions impact their motivation or ability to maintain household routines."
                },
                {
                    title: "Aging Individuals with Disabilities",
                    description: "Older adults who need additional support to continue living independently in their own homes."
                }
            ]
        },

        benefits: [
            {
                title: "Safe Living Environment",
                description: "A clean and well-maintained home reduces the risk of accidents, infections, and other health hazards.",
                icon: "Home"
            },
            {
                title: "Improved Wellbeing",
                description: "Living in a clean, organized space has proven positive effects on mental health and overall quality of life.",
                icon: "Heart"
            },
            {
                title: "Skill Development",
                description: "We don't just do tasks for you—we work alongside you to build your own household management skills.",
                icon: "CheckSquare"
            },
            {
                title: "Energy Conservation",
                description: "By assisting with taxing household tasks, you can preserve your energy for activities that matter most to you.",
                icon: "Activity"
            },
            {
                title: "Independence at Home",
                description: "With the right support, you can continue living in your own home rather than moving to assisted accommodation.",
                icon: "Users"
            },
            {
                title: "Flexible Scheduling",
                description: "We work around your routine and preferences, providing support when and where you need it most.",
                icon: "CheckSquare"
            }
        ],

        process: {
            title: "How Our Household Support Works",
            description: "We deliver household support in a way that respects your home, preferences, and independence:",
            steps: [
                {
                    number: "01",
                    title: "Home Assessment",
                    description: "We visit your home to understand your living situation, identify your needs, and discuss your preferences for how support should be provided."
                },
                {
                    number: "02",
                    title: "Support Plan Development",
                    description: "Together, we create a detailed plan outlining what tasks need support, how often, and any specific methods or products you prefer."
                },
                {
                    number: "03",
                    title: "Worker Matching",
                    description: "We carefully match you with support workers who are compatible with your needs, personality, and preferences."
                },
                {
                    number: "04",
                    title: "Regular Support Visits",
                    description: "Your support workers visit according to your schedule, providing consistent, reliable assistance with agreed-upon tasks."
                },
                {
                    number: "05",
                    title: "Ongoing Review",
                    description: "We regularly review your support to ensure it continues to meet your needs and make adjustments as circumstances change."
                }
            ]
        },

        whatIsIncluded: {
            title: "What's Included in Our Service",
            categories: [
                {
                    title: "Cleaning Services",
                    items: [
                        "General house cleaning and tidying",
                        "Vacuuming and mopping floors",
                        "Bathroom and kitchen cleaning",
                        "Dusting and surface cleaning",
                        "Window cleaning (internal)",
                        "Decluttering assistance"
                    ]
                },
                {
                    title: "Laundry & Clothing",
                    items: [
                        "Washing and drying clothes",
                        "Folding and putting away laundry",
                        "Ironing and pressing",
                        "Bed linen changes",
                        "Minor clothing repairs",
                        "Seasonal wardrobe organization"
                    ]
                },
                {
                    title: "Kitchen & Meals",
                    items: [
                        "Meal planning assistance",
                        "Grocery shopping and unpacking",
                        "Meal preparation and cooking",
                        "Kitchen cleaning and organization",
                        "Food storage and safety",
                        "Special dietary meal preparation"
                    ]
                },
                {
                    title: "Home Maintenance",
                    items: [
                        "Basic garden maintenance",
                        "Taking out bins and recycling",
                        "Pet feeding and basic care",
                        "Mail collection and sorting",
                        "Coordination of trades for repairs",
                        "Safety checks (smoke alarms, etc.)"
                    ]
                }
            ]
        },

        approach: {
            title: "Our Approach",
            description: "We believe household support should enhance your life, not take over it. Our approach is based on:",
            principles: [
                {
                    title: "Respect for Your Home",
                    description: "Your home is your sanctuary. We treat it with the utmost respect and care."
                },
                {
                    title: "Building Independence",
                    description: "Where possible, we work alongside you to build skills rather than just completing tasks for you."
                },
                {
                    title: "Consistency",
                    description: "We try to send the same support workers so you can build trust and they can understand your preferences."
                },
                {
                    title: "Flexibility",
                    description: "Life happens. We accommodate changes to schedules and adjust support as your needs change."
                },
                {
                    title: "Communication",
                    description: "We maintain open communication with you and your family to ensure satisfaction with our service."
                },
                {
                    title: "Health & Safety",
                    description: "We follow strict hygiene protocols and safety procedures in your home."
                }
            ]
        },

        testimonial: {
            quote: "Before Community Care, I was struggling to keep up with my housework and it was affecting my mental health. Now I have regular support, my home is clean and organized, and I've actually learned better ways to manage things myself. It's been life-changing.",
            author: "Sarah L.",
            role: "Service Participant",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },

        faqs: [
            {
                question: "Do I need to provide cleaning supplies and equipment?",
                answer: "Generally, yes—we use your preferred products and equipment. However, if you don't have supplies, we can discuss options including purchasing items on your behalf or using our own supplies for an additional fee."
            },
            {
                question: "Will I always have the same support worker?",
                answer: "We aim for consistency and try to match you with regular support workers. However, due to leave and scheduling, you may occasionally have different workers. We always ensure any new worker is briefed on your preferences."
            },
            {
                question: "Can you help with deep cleaning or one-off tasks?",
                answer: "Yes! In addition to regular support, we can arrange one-off deep cleans, spring cleaning, or help with specific projects like moving house or preparing for visitors."
            },
            {
                question: "What if I want to change my support schedule?",
                answer: "We understand that life circumstances change. You can adjust your support schedule with reasonable notice. We'll work with you to find times that suit your new routine."
            },
            {
                question: "Is household tasks support covered by NDIS?",
                answer: "Yes, household tasks support is typically funded under NDIS Core Supports (Assistance with Daily Life). The amount of funding depends on your individual plan and goals."
            },
            {
                question: "Can you accommodate allergies or chemical sensitivities?",
                answer: "Absolutely. We can use hypoallergenic, fragrance-free, or natural cleaning products if you have sensitivities. Just let us know during your assessment."
            }
        ],

        relatedServices: ["personal-activities", "development-life-skills", "community-participation"],

        stats: [
            { number: "1000+", label: "Homes Supported" },
            { number: "99%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Support Available" },
            { number: "100+", label: "Trained Staff" }
        ]
    },
    {
        id: 3,
        slug: "community-participation",
        title: "Community Participation",
        shortTitle: "Community Access",
        icon: "Activity",
        tagline: "Connecting You With Your Community",
        shortDescription: "Empowering you to actively participate in community activities, social events, and recreational pursuits.",
        heroImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        cardImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

        overview: {
            title: "What is Community Participation Support?",
            description: "Community Participation support helps individuals with disabilities engage meaningfully with their local community. We provide the assistance and encouragement you need to access community facilities, participate in social activities, pursue hobbies, and build connections with others. Our goal is to help you live a full, active life as a valued member of your community.",
            highlights: [
                "Social and recreational activities",
                "Access to community facilities",
                "Skill development in community settings",
                "Building social connections",
                "Support for hobbies and interests"
            ]
        },

        whoIsItFor: {
            title: "Who Is This Service For?",
            description: "Our Community Participation services are for anyone who wants to be more active in their community but needs support to do so:",
            groups: [
                {
                    title: "Individuals Seeking Social Connection",
                    description: "People who feel isolated and want to build friendships and social networks in their community."
                },
                {
                    title: "Those Wanting to Explore Interests",
                    description: "Individuals who want to pursue hobbies, sports, arts, or other interests but need support to access them."
                },
                {
                    title: "People Building Independence",
                    description: "Those working towards greater independence in accessing community facilities and services."
                },
                {
                    title: "Individuals Needing Physical Support",
                    description: "People who need physical assistance to navigate community environments safely."
                },
                {
                    title: "Those Requiring Social Support",
                    description: "Individuals who may need help with social interactions, communication, or managing anxiety in social settings."
                }
            ]
        },

        benefits: [
            {
                title: "Reduced Social Isolation",
                description: "Regular community participation helps combat loneliness and builds meaningful connections with others.",
                icon: "Users"
            },
            {
                title: "Improved Mental Health",
                description: "Being active in your community has proven benefits for mental health, self-esteem, and overall wellbeing.",
                icon: "Heart"
            },
            {
                title: "Skill Development",
                description: "Community activities provide opportunities to learn new skills in real-world settings.",
                icon: "CheckSquare"
            },
            {
                title: "Physical Health Benefits",
                description: "Many community activities involve physical movement, contributing to better physical health.",
                icon: "Activity"
            },
            {
                title: "Sense of Belonging",
                description: "Being part of a community gives you a sense of identity and belonging.",
                icon: "Home"
            },
            {
                title: "Increased Confidence",
                description: "Successfully navigating community environments builds confidence for future independence.",
                icon: "Users"
            }
        ],

        process: {
            title: "Getting Started with Community Participation",
            description: "We take a personalized approach to help you connect with your community:",
            steps: [
                {
                    number: "01",
                    title: "Discovery Session",
                    description: "We get to know you—your interests, goals, current social connections, and any barriers you face in accessing your community."
                },
                {
                    number: "02",
                    title: "Interest Mapping",
                    description: "Together, we explore community opportunities that align with your interests and goals, from sports clubs to art classes to volunteer opportunities."
                },
                {
                    number: "03",
                    title: "Support Planning",
                    description: "We determine what level and type of support you need to participate in chosen activities safely and successfully."
                },
                {
                    number: "04",
                    title: "Supported Participation",
                    description: "Our support workers accompany you to activities, providing the assistance you need while encouraging independence."
                },
                {
                    number: "05",
                    title: "Fading Support",
                    description: "As you become more confident, we gradually reduce support, always at a pace you're comfortable with."
                }
            ]
        },

        whatIsIncluded: {
            title: "What's Included in Our Service",
            categories: [
                {
                    title: "Social Activities",
                    items: [
                        "Attending social groups and clubs",
                        "Community events and festivals",
                        "Coffee catchups and outings",
                        "Movie, theatre, and concert outings",
                        "Dining out experiences",
                        "Parties and celebrations"
                    ]
                },
                {
                    title: "Recreation & Hobbies",
                    items: [
                        "Sports and fitness activities",
                        "Art, craft, and creative pursuits",
                        "Music and dance classes",
                        "Gardening and nature activities",
                        "Gaming and technology groups",
                        "Photography and media"
                    ]
                },
                {
                    title: "Community Access",
                    items: [
                        "Library and museum visits",
                        "Shopping centre access",
                        "Park and beach outings",
                        "Public transport training",
                        "Accessing local services",
                        "Religious and cultural activities"
                    ]
                },
                {
                    title: "Skill Building",
                    items: [
                        "Social skill development",
                        "Communication practice",
                        "Money handling in community",
                        "Navigation and wayfinding",
                        "Safety awareness training",
                        "Building natural supports"
                    ]
                }
            ]
        },

        approach: {
            title: "Our Approach",
            description: "We believe everyone deserves to be part of their community. Our approach focuses on:",
            principles: [
                {
                    title: "Your Interests First",
                    description: "We don't have a set program—we support you to pursue the activities YOU are interested in."
                },
                {
                    title: "Real Community Settings",
                    description: "We focus on mainstream community activities, not segregated 'disability programs.'"
                },
                {
                    title: "Building Natural Supports",
                    description: "We help you build relationships that will continue beyond paid support."
                },
                {
                    title: "Positive Risk Taking",
                    description: "We support you to try new things and step outside your comfort zone safely."
                },
                {
                    title: "Dignity and Respect",
                    description: "Our support is discreet and respects your autonomy and dignity in public."
                },
                {
                    title: "Inclusive Practices",
                    description: "We advocate for accessible, inclusive community spaces and activities."
                }
            ]
        },

        testimonial: {
            quote: "I always wanted to join a photography club but was too nervous to go alone. My support worker came with me for the first few months, and now I go independently every week. I've made real friends and even had my photos exhibited. I finally feel like I belong somewhere.",
            author: "James K.",
            role: "Service Participant",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },

        faqs: [
            {
                question: "What if I don't know what activities I want to do?",
                answer: "That's perfectly fine! Part of our service is helping you explore and discover activities you might enjoy. We can suggest options based on your interests and even accompany you to try different things until you find what you love."
            },
            {
                question: "Can you support me with one-on-one activities or only groups?",
                answer: "We support both! Whether you want to attend group activities, pursue solo hobbies like photography or fishing, or have one-on-one outings, we can provide appropriate support."
            },
            {
                question: "What happens if I have a bad experience in the community?",
                answer: "Your safety and wellbeing are our priority. Our support workers are trained to handle challenging situations and will advocate for you. We also debrief after activities to address any issues."
            },
            {
                question: "Can I use this service to attend appointments or run errands?",
                answer: "While we can incorporate some errands into community outings, this service is primarily focused on social and recreational participation. For regular appointment attendance, you might need additional supports."
            },
            {
                question: "How is this different from day programs?",
                answer: "Traditional day programs often involve segregated activities in disability-specific settings. Our community participation support takes you into mainstream community settings to pursue individual interests."
            },
            {
                question: "Is community participation covered by NDIS?",
                answer: "Yes, community participation is funded under NDIS Capacity Building (Increased Social and Community Participation) or Core Supports depending on how it's delivered. We can help you understand your funding."
            }
        ],

        relatedServices: ["travel-assistance", "development-life-skills", "life-stage-transition"],

        stats: [
            { number: "2000+", label: "Community Outings" },
            { number: "95%", label: "Goal Achievement" },
            { number: "200+", label: "Partner Organizations" },
            { number: "50+", label: "Activity Types" }
        ]
    },
    {
        id: 4,
        slug: "development-life-skills",
        title: "Development Life Skills",
        shortTitle: "Life Skills",
        icon: "CheckSquare",
        tagline: "Building Skills for Independent Living",
        shortDescription: "Personalized skill development programs to help you gain independence in daily living activities.",
        heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        cardImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

        overview: {
            title: "What is Life Skills Development?",
            description: "Life Skills Development is a capacity-building service designed to teach and strengthen the practical skills needed for independent living. Working with experienced support workers, you'll learn everything from cooking and budgeting to communication and problem-solving. Our goal is to increase your independence, confidence, and quality of life through structured, personalized skill development programs.",
            highlights: [
                "Daily living skill development",
                "Financial literacy and budgeting",
                "Communication and social skills",
                "Problem-solving and decision making",
                "Health and self-care management"
            ]
        },

        whoIsItFor: {
            title: "Who Is This Service For?",
            description: "Our Life Skills Development services are designed for individuals who want to increase their independence:",
            groups: [
                {
                    title: "Young Adults Transitioning",
                    description: "Young people preparing for more independent living as they move into adulthood."
                },
                {
                    title: "Individuals with Intellectual Disabilities",
                    description: "People who need structured support to learn and practice daily living skills."
                },
                {
                    title: "Those with Acquired Disabilities",
                    description: "Individuals who need to relearn skills following injury, illness, or onset of disability."
                },
                {
                    title: "People with Autism Spectrum Disorder",
                    description: "Individuals who may need explicit teaching of skills that others learn intuitively."
                },
                {
                    title: "Anyone Seeking Greater Independence",
                    description: "Any person with a disability who wants to develop their capacity for independent living."
                }
            ]
        },

        benefits: [
            {
                title: "Greater Independence",
                description: "Each new skill you master increases your independence and reduces reliance on others.",
                icon: "Users"
            },
            {
                title: "Improved Confidence",
                description: "Successfully learning new skills builds self-confidence and self-esteem.",
                icon: "Heart"
            },
            {
                title: "Better Quality of Life",
                description: "Being able to care for yourself and manage your life leads to improved overall wellbeing.",
                icon: "CheckSquare"
            },
            {
                title: "More Choices",
                description: "With more skills comes more choice about how and where you want to live your life.",
                icon: "Activity"
            },
            {
                title: "Reduced Support Needs",
                description: "As your skills increase, you may need less paid support over time.",
                icon: "Home"
            },
            {
                title: "Lifelong Learning",
                description: "We teach you how to learn, setting you up for continued growth throughout your life.",
                icon: "CheckSquare"
            }
        ],

        process: {
            title: "Our Skill Development Process",
            description: "We use evidence-based approaches to help you develop skills effectively:",
            steps: [
                {
                    number: "01",
                    title: "Skills Assessment",
                    description: "We conduct a comprehensive assessment of your current skills, learning style, and the skills you want to develop."
                },
                {
                    number: "02",
                    title: "Goal Setting",
                    description: "Together, we set realistic, meaningful goals for your skill development, broken down into achievable steps."
                },
                {
                    number: "03",
                    title: "Individualized Planning",
                    description: "We create a personalized learning plan using teaching methods that suit your learning style."
                },
                {
                    number: "04",
                    title: "Hands-On Learning",
                    description: "You learn by doing, with support workers providing just the right amount of assistance and fading support as you progress."
                },
                {
                    number: "05",
                    title: "Practice and Generalization",
                    description: "We help you practice skills in different settings so you can use them confidently anywhere."
                }
            ]
        },

        whatIsIncluded: {
            title: "Skills We Develop",
            categories: [
                {
                    title: "Daily Living Skills",
                    items: [
                        "Cooking and meal preparation",
                        "Cleaning and home maintenance",
                        "Personal hygiene and grooming",
                        "Laundry and clothing care",
                        "Shopping and errands",
                        "Time management and routines"
                    ]
                },
                {
                    title: "Financial Skills",
                    items: [
                        "Budgeting and money management",
                        "Banking and bill paying",
                        "Understanding value and pricing",
                        "Saving and financial goals",
                        "Avoiding scams and financial abuse",
                        "NDIS funding management"
                    ]
                },
                {
                    title: "Social & Communication",
                    items: [
                        "Conversation skills",
                        "Assertiveness and self-advocacy",
                        "Understanding social cues",
                        "Building and maintaining relationships",
                        "Conflict resolution",
                        "Using technology for communication"
                    ]
                },
                {
                    title: "Safety & Health",
                    items: [
                        "Personal safety awareness",
                        "Emergency response skills",
                        "Medication management",
                        "Health appointments and advocacy",
                        "Healthy lifestyle choices",
                        "Mental health self-management"
                    ]
                }
            ]
        },

        approach: {
            title: "Our Approach to Skill Development",
            description: "We use proven teaching methods tailored to your individual learning style:",
            principles: [
                {
                    title: "Person-Centered",
                    description: "You choose which skills to develop based on your goals and priorities."
                },
                {
                    title: "Systematic Instruction",
                    description: "We break skills into small steps and teach them systematically for lasting learning."
                },
                {
                    title: "Learning by Doing",
                    description: "We emphasize hands-on practice in real-world settings, not just classroom learning."
                },
                {
                    title: "Prompt Fading",
                    description: "We provide support when needed and gradually reduce it as you become more capable."
                },
                {
                    title: "Positive Reinforcement",
                    description: "We celebrate your successes and use positive approaches to maintain motivation."
                },
                {
                    title: "Natural Environment",
                    description: "We teach skills in the settings where you'll actually use them for better retention."
                }
            ]
        },

        testimonial: {
            quote: "Learning to cook seemed impossible for me—I'd always had someone else do it. But with patient, step-by-step teaching from Community Care, I can now prepare several meals on my own. It's not just about the cooking; it's about proving to myself that I can learn anything if I have the right support.",
            author: "Emma R.",
            role: "Service Participant",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },

        faqs: [
            {
                question: "How long does it take to learn a new skill?",
                answer: "This varies greatly depending on the skill complexity and individual learning pace. Simple skills might be mastered in weeks, while complex skills can take months. We focus on mastery rather than speed, ensuring skills are retained long-term."
            },
            {
                question: "What if I find learning difficult?",
                answer: "Everyone can learn—it's about finding the right approach. Our staff are trained in various teaching methods and will adapt their approach until we find what works for you. We also break skills into very small steps for easier learning."
            },
            {
                question: "Can family members be involved in skill development?",
                answer: "Absolutely! We often train family members to support skill practice at home. Consistent approaches across settings help reinforce learning."
            },
            {
                question: "Where does skill development take place?",
                answer: "We teach skills in natural environments—your home for domestic skills, the community for social and safety skills, etc. This helps ensure skills transfer to real-life situations."
            },
            {
                question: "Is life skills development covered by NDIS?",
                answer: "Yes, life skills development is typically funded under NDIS Capacity Building (Improved Daily Living). This recognizes that developing skills now reduces future support needs."
            },
            {
                question: "What happens when I've achieved my skill goals?",
                answer: "We celebrate! Then we discuss whether you want to work on additional skills or maintain current ones. Some people continue with periodic 'maintenance' sessions to reinforce learning."
            }
        ],

        relatedServices: ["household-tasks", "life-stage-transition", "community-participation"],

        stats: [
            { number: "3000+", label: "Skills Taught" },
            { number: "97%", label: "Goal Achievement" },
            { number: "85%", label: "Reduced Support Needs" },
            { number: "100%", label: "Personalized Plans" }
        ]
    },
    {
        id: 5,
        slug: "personal-activities",
        title: "Personal Activities",
        shortTitle: "Personal Care",
        icon: "Heart",
        tagline: "Dignified Support for Personal Care",
        shortDescription: "Respectful, professional assistance with personal care activities to maintain your health, hygiene, and dignity.",
        heroImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        cardImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

        overview: {
            title: "What is Personal Activities Support?",
            description: "Personal Activities support provides assistance with intimate personal care tasks that are essential for your health, hygiene, and daily functioning. Our trained support workers provide dignified, professional assistance with activities such as bathing, dressing, grooming, and continence management. We understand the sensitive nature of these supports and are committed to maintaining your privacy, dignity, and comfort at all times.",
            highlights: [
                "Bathing and showering assistance",
                "Dressing and grooming support",
                "Continence management",
                "Medication prompts and assistance",
                "Mobility and transfer support"
            ]
        },

        whoIsItFor: {
            title: "Who Is This Service For?",
            description: "Our Personal Activities services are for individuals who need support with personal care due to:",
            groups: [
                {
                    title: "Physical Disabilities",
                    description: "Individuals with mobility limitations, paralysis, or physical conditions that make self-care difficult."
                },
                {
                    title: "Age-Related Conditions",
                    description: "Older adults with disabilities who need support to maintain personal hygiene and health."
                },
                {
                    title: "Cognitive Disabilities",
                    description: "People who need prompting, guidance, or supervision to complete personal care safely."
                },
                {
                    title: "Complex Health Needs",
                    description: "Individuals with complex health conditions requiring specialized personal care support."
                },
                {
                    title: "Temporary Support Needs",
                    description: "Those recovering from surgery, illness, or injury who need temporary personal care assistance."
                }
            ]
        },

        benefits: [
            {
                title: "Maintained Dignity",
                description: "We provide care in a way that always respects your dignity, privacy, and personal preferences.",
                icon: "Heart"
            },
            {
                title: "Health & Hygiene",
                description: "Proper personal care is essential for preventing infections, skin issues, and maintaining overall health.",
                icon: "CheckSquare"
            },
            {
                title: "Comfort & Wellbeing",
                description: "Feeling clean and well-groomed contributes significantly to emotional wellbeing and self-esteem.",
                icon: "Activity"
            },
            {
                title: "Safety",
                description: "Professional support reduces the risk of falls and injuries during personal care activities.",
                icon: "Home"
            },
            {
                title: "Family Relief",
                description: "Professional personal care support relieves family members from providing intimate care.",
                icon: "Users"
            },
            {
                title: "Skill Building",
                description: "Where possible, we support you to do as much as you can independently, building capacity over time.",
                icon: "CheckSquare"
            }
        ],

        process: {
            title: "How Personal Care Support Works",
            description: "We approach personal care with sensitivity, professionalism, and respect:",
            steps: [
                {
                    number: "01",
                    title: "Private Consultation",
                    description: "We discuss your personal care needs privately and sensitively, understanding your preferences, routines, and any specific requirements."
                },
                {
                    number: "02",
                    title: "Care Planning",
                    description: "We develop a detailed personal care plan that documents exactly how you want support provided, respecting your preferences."
                },
                {
                    number: "03",
                    title: "Worker Selection",
                    description: "You have input into worker selection, including gender preferences. We match you with workers who respect your dignity."
                },
                {
                    number: "04",
                    title: "Consistent Care",
                    description: "We prioritize consistency so you can build trust and comfort with your regular support workers."
                },
                {
                    number: "05",
                    title: "Ongoing Communication",
                    description: "We maintain open communication to ensure your care continues to meet your needs and preferences."
                }
            ]
        },

        whatIsIncluded: {
            title: "What's Included in Our Service",
            categories: [
                {
                    title: "Hygiene Support",
                    items: [
                        "Showering and bathing assistance",
                        "Sponge baths when needed",
                        "Hair washing and drying",
                        "Oral hygiene support",
                        "Shaving assistance",
                        "Skin care and moisturizing"
                    ]
                },
                {
                    title: "Dressing & Grooming",
                    items: [
                        "Assistance choosing clothes",
                        "Dressing and undressing",
                        "Hair brushing and styling",
                        "Makeup application if desired",
                        "Nail care",
                        "Compression garment assistance"
                    ]
                },
                {
                    title: "Continence Support",
                    items: [
                        "Toileting assistance",
                        "Continence aid management",
                        "Catheter care (trained staff)",
                        "Bowel care support",
                        "Skin integrity monitoring",
                        "Dignity and discretion always"
                    ]
                },
                {
                    title: "Health & Mobility",
                    items: [
                        "Medication prompts",
                        "Mobility assistance",
                        "Transfer support (bed, chair, etc.)",
                        "Positioning and pressure care",
                        "Health monitoring",
                        "Exercise and therapy support"
                    ]
                }
            ]
        },

        approach: {
            title: "Our Approach to Personal Care",
            description: "We understand personal care is intimate and sensitive. Our approach prioritizes:",
            principles: [
                {
                    title: "Dignity First",
                    description: "Your dignity is paramount. We always maintain privacy and respect during personal care."
                },
                {
                    title: "Your Control",
                    description: "You are in control of your personal care. We follow your preferences and directions."
                },
                {
                    title: "Professional Boundaries",
                    description: "Our staff maintain professional boundaries while providing warm, caring support."
                },
                {
                    title: "Trained Staff",
                    description: "All personal care workers are trained in manual handling, infection control, and dignified care."
                },
                {
                    title: "Gender Preferences",
                    description: "We accommodate gender preferences for personal care workers wherever possible."
                },
                {
                    title: "Cultural Sensitivity",
                    description: "We respect cultural and religious requirements related to personal care and modesty."
                }
            ]
        },

        testimonial: {
            quote: "I was very nervous about having someone help me with personal care, but the team at Community Care put me at ease immediately. They're professional, respectful, and genuinely caring. I actually look forward to my support visits now—I always feel refreshed and valued afterwards.",
            author: "David M.",
            role: "Service Participant",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },

        faqs: [
            {
                question: "Can I request a male or female support worker?",
                answer: "Absolutely. We understand personal care is intimate, and we accommodate gender preferences wherever possible. Let us know your preference, and we'll do our best to match you appropriately."
            },
            {
                question: "What training do personal care workers have?",
                answer: "All our personal care workers have Certificate III in Individual Support (or higher), training in manual handling, infection control, and personal care procedures. Many have additional training in complex care needs."
            },
            {
                question: "What if I feel uncomfortable during personal care?",
                answer: "Please tell your support worker or contact us immediately. You have the right to stop or modify personal care at any time. We'll work with you to adjust approaches until you're comfortable."
            },
            {
                question: "Can personal care be provided at different locations?",
                answer: "Yes, we can provide personal care at home, in the community, at respite, or other locations as needed. We bring necessary supplies and maintain your routine wherever you are."
            },
            {
                question: "Is personal care covered by NDIS?",
                answer: "Yes, personal care is funded under NDIS Core Supports (Assistance with Daily Life). The amount and type of support depends on your individual needs and NDIS plan."
            },
            {
                question: "What if my needs change?",
                answer: "We regularly review your care needs and adjust support as needed. If your needs change suddenly (e.g., after hospital), we can quickly modify your care plan."
            }
        ],

        relatedServices: ["household-tasks", "development-life-skills", "travel-assistance"],

        stats: [
            { number: "800+", label: "Clients Supported" },
            { number: "100%", label: "Trained Staff" },
            { number: "24/7", label: "Availability" },
            { number: "99%", label: "Satisfaction Rate" }
        ]
    },
    {
        id: 6,
        slug: "travel-assistance",
        title: "Travel Assistance",
        shortTitle: "Transport",
        icon: "Car",
        tagline: "Getting You Where You Need to Go",
        shortDescription: "Safe, reliable transport and travel training to help you access your community, appointments, and activities.",
        heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        cardImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

        overview: {
            title: "What is Travel Assistance?",
            description: "Travel Assistance services help individuals with disabilities access transport to participate in community life. This includes direct transport provision by trained drivers, as well as travel training to build your skills and confidence in using public transport independently. Our goal is to ensure you can get where you need to go—whether that's work, medical appointments, social activities, or anywhere else.",
            highlights: [
                "Door-to-door transport services",
                "Public transport training",
                "Travel companionship",
                "Medical appointment transport",
                "Community access transport"
            ]
        },

        whoIsItFor: {
            title: "Who Is This Service For?",
            description: "Our Travel Assistance services are for anyone who needs support to travel safely:",
            groups: [
                {
                    title: "Individuals with Physical Disabilities",
                    description: "Those who cannot drive or access standard public transport due to physical limitations."
                },
                {
                    title: "People with Cognitive Disabilities",
                    description: "Individuals who need support with navigation, planning journeys, or managing travel anxiety."
                },
                {
                    title: "Those with Sensory Impairments",
                    description: "People with vision or hearing impairments who need travel support or orientation training."
                },
                {
                    title: "Individuals Building Independence",
                    description: "People who want to learn to travel independently and need supported training."
                },
                {
                    title: "Those Without Transport Options",
                    description: "Individuals who don't have access to family transport and can't use standard public transport."
                }
            ]
        },

        benefits: [
            {
                title: "Access to Opportunities",
                description: "Transport opens doors to employment, education, healthcare, and social opportunities.",
                icon: "Activity"
            },
            {
                title: "Increased Independence",
                description: "With travel support or training, you can go where you want, when you want.",
                icon: "Users"
            },
            {
                title: "Social Connection",
                description: "Reliable transport helps you maintain relationships and participate in community life.",
                icon: "Heart"
            },
            {
                title: "Safety",
                description: "Our drivers and travel trainers ensure you travel safely, with support tailored to your needs.",
                icon: "CheckSquare"
            },
            {
                title: "Reduced Stress",
                description: "Knowing you have reliable transport reduces anxiety and allows you to focus on your activities.",
                icon: "Home"
            },
            {
                title: "Skill Building",
                description: "Travel training can help you develop skills to eventually travel more independently.",
                icon: "CheckSquare"
            }
        ],

        process: {
            title: "How Our Travel Services Work",
            description: "We provide flexible transport solutions tailored to your needs:",
            steps: [
                {
                    number: "01",
                    title: "Transport Assessment",
                    description: "We assess your transport needs, preferences, and goals—whether you need direct transport, travel training, or a combination."
                },
                {
                    number: "02",
                    title: "Service Planning",
                    description: "We develop a transport plan including regular bookings, contingency arrangements, and any equipment needs."
                },
                {
                    number: "03",
                    title: "Driver/Trainer Matching",
                    description: "We match you with drivers or travel trainers who understand your needs and with whom you feel comfortable."
                },
                {
                    number: "04",
                    title: "Regular Services",
                    description: "We provide consistent, reliable transport services according to your schedule and needs."
                },
                {
                    number: "05",
                    title: "Building Independence",
                    description: "Where appropriate, we work towards increasing your travel independence over time."
                }
            ]
        },

        whatIsIncluded: {
            title: "What's Included in Our Service",
            categories: [
                {
                    title: "Direct Transport",
                    items: [
                        "Door-to-door pickup and dropoff",
                        "Wheelchair accessible vehicles",
                        "Assistance in and out of vehicle",
                        "Safe, trained drivers",
                        "Flexible scheduling",
                        "Air-conditioned comfort"
                    ]
                },
                {
                    title: "Travel Training",
                    items: [
                        "Public transport route planning",
                        "Ticket purchasing and validation",
                        "Reading timetables and maps",
                        "Safety awareness training",
                        "Managing travel anxiety",
                        "Problem-solving when things go wrong"
                    ]
                },
                {
                    title: "Travel Companionship",
                    items: [
                        "Accompaniment on public transport",
                        "Support at appointments/activities",
                        "Navigation assistance",
                        "Social support during travel",
                        "Gradual independence building",
                        "Emergency support"
                    ]
                },
                {
                    title: "Specialized Transport",
                    items: [
                        "Medical appointment transport",
                        "Hospital admission/discharge",
                        "Interstate/long-distance travel",
                        "Event and activity transport",
                        "Emergency transport when needed",
                        "Group outing transport"
                    ]
                }
            ]
        },

        approach: {
            title: "Our Approach to Travel Support",
            description: "We believe everyone deserves access to reliable, dignified transport:",
            principles: [
                {
                    title: "Reliability",
                    description: "We arrive on time, every time. You can count on us to get you where you need to be."
                },
                {
                    title: "Safety First",
                    description: "All drivers are licensed, police-checked, and trained in disability support and first aid."
                },
                {
                    title: "Independence Focus",
                    description: "Where possible, we work towards increasing your ability to travel independently."
                },
                {
                    title: "Flexibility",
                    description: "We accommodate changes to bookings and adapt to your changing needs."
                },
                {
                    title: "Dignity",
                    description: "We provide transport in a way that respects your dignity and preferences."
                },
                {
                    title: "Accessibility",
                    description: "We have vehicles and equipment to accommodate various mobility needs."
                }
            ]
        },

        testimonial: {
            quote: "Before Community Care, I missed so many medical appointments because I couldn't get there. Now I have reliable transport every week, and the drivers are wonderful—they're always on time and help me in and out of the car. They've also been teaching me the bus route, and I can now do that trip myself!",
            author: "Patricia N.",
            role: "Service Participant",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },

        faqs: [
            {
                question: "Do you have wheelchair accessible vehicles?",
                answer: "Yes, we have vehicles that can accommodate wheelchairs, including motorized wheelchairs. Please let us know your specific requirements when booking so we can ensure an appropriate vehicle."
            },
            {
                question: "How far in advance do I need to book?",
                answer: "For regular appointments, we recommend booking at least 48 hours in advance. For urgent or medical transport, we'll do our best to accommodate shorter notice. Regular clients can set up standing bookings."
            },
            {
                question: "Can someone accompany me in the vehicle?",
                answer: "Yes, family members, carers, or support workers can travel with you at no additional cost (subject to vehicle capacity)."
            },
            {
                question: "What if I need to cancel or change a booking?",
                answer: "We understand plans change. Please give us as much notice as possible. Cancellations within 24 hours may incur a fee, unless due to illness or emergency."
            },
            {
                question: "Is travel assistance covered by NDIS?",
                answer: "Yes, transport can be funded under NDIS Core Supports (Transport). Travel training may be funded under Capacity Building. The specifics depend on your plan and goals."
            },
            {
                question: "Can you transport me interstate or long distance?",
                answer: "Yes, we can arrange long-distance or interstate transport for special circumstances. This is quoted individually based on distance and requirements."
            }
        ],

        relatedServices: ["community-participation", "personal-activities", "life-stage-transition"],

        stats: [
            { number: "50000+", label: "Trips Completed" },
            { number: "100%", label: "Licensed Drivers" },
            { number: "99%", label: "On-Time Rate" },
            { number: "30+", label: "Vehicles" }
        ]
    }
];

// Simple list for forms/dropdowns
export const SERVICES_LIST = SERVICES_DATA.map(service => ({
    value: service.slug,
    label: service.title
}));

// Helper function to get service by slug
export const getServiceBySlug = (slug) => {
    return SERVICES_DATA.find(service => service.slug === slug);
};

// Helper function to get related services
export const getRelatedServices = (slugs) => {
    return SERVICES_DATA.filter(service => slugs.includes(service.slug));
};

// TESTIMONIALS DATA
export const TESTIMONIALS_DATA = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "NDIS Participant",
        service: "Life Stage Transition",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 5,
        quote: "Community Care helped me transition from school to work with such professionalism and care. I couldn't have done it without them.",
        fullTestimonial: "When I was finishing school, I was terrified about what came next. The team at Community Care sat down with me and my family, listened to my dreams, and helped create a plan that made sense for me. They connected me with job training programs, taught me workplace skills, and were there every step of the way. Now I have a part-time job I love, and I feel so much more confident about my future.",
        featured: true,
        videoUrl: null
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Family Carer",
        service: "Personal Activities",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 5,
        quote: "The personal care support for my brother has been life-changing. The carers are respectful, patient, and truly care about his wellbeing.",
        fullTestimonial: "My brother needs assistance with daily personal care, and finding the right support was crucial. Community Care matched us with carers who treat him with such dignity and respect. They're patient, understanding, and have become like family. It's given me peace of mind knowing he's in good hands, and I can see how much happier and more comfortable he is.",
        featured: true,
        videoUrl: null
    },
    {
        id: 3,
        name: "Jennifer Thompson",
        role: "NDIS Participant",
        service: "Community Participation",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 5,
        quote: "I used to feel so isolated. Now I'm part of a art class, go to community events, and have made real friends. Thank you!",
        fullTestimonial: "Before Community Care, I spent most days at home alone. I wanted to get out and meet people, but I didn't know how. My support worker helped me discover local art classes and community groups. She came with me to the first few sessions until I felt comfortable. Now I go to my art class every week, I've exhibited my work at a local gallery, and I've made friends I see outside of class. My life is so much richer now.",
        featured: false,
        videoUrl: null
    },
    {
        id: 4,
        name: "Robert Williams",
        role: "NDIS Participant",
        service: "Household Tasks",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 5,
        quote: "The household support has made my home a place I'm proud of. It's clean, organized, and I'm learning skills I never thought I could master.",
        fullTestimonial: "Managing household tasks was overwhelming for me. My support worker doesn't just do the work for me - she teaches me as we go. I've learned to cook simple meals, do my laundry, and keep my apartment tidy. She's patient and never makes me feel bad about what I can't do. Instead, she celebrates every small achievement. My home is now a place I feel comfortable inviting friends to.",
        featured: false,
        videoUrl: null
    },
    {
        id: 5,
        name: "Emma Davis",
        role: "Parent",
        service: "Development Life Skills",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 5,
        quote: "Watching my daughter gain independence through their life skills program has been incredible. She's learning to budget, cook, and problem-solve.",
        fullTestimonial: "As a parent, you always worry about your child's future. Community Care's life skills development program has given my daughter tools I never thought possible. She's learning to manage money, prepare healthy meals, use public transport, and so much more. The trainers are skilled, patient, and genuinely invested in her success. I feel so much more confident about her ability to live independently one day.",
        featured: true,
        videoUrl: null
    },
    {
        id: 6,
        name: "David Kumar",
        role: "NDIS Participant",
        service: "Travel Assistance",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 5,
        quote: "Reliable transport has opened up my world. I never miss appointments, I can visit family, and I've started volunteering at a local charity.",
        fullTestimonial: "Not being able to drive was really limiting my life. I was missing medical appointments and couldn't participate in activities I wanted to do. Community Care's travel assistance service has been fantastic. The drivers are always on time, friendly, and make me feel safe. I can now get to my appointments, visit my elderly mother across town, and I've even started volunteering at an animal shelter. Having reliable transport has given me back my independence.",
        featured: false,
        videoUrl: null
    },
    {
        id: 7,
        name: "Lisa Anderson",
        role: "Family Member",
        service: "Multiple Services",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 5,
        quote: "Community Care coordinates all of dad's services seamlessly. It's such a relief to have one trusted provider we can count on.",
        fullTestimonial: "My father uses multiple services - household support, personal care, and travel assistance. Before Community Care, we were juggling different providers, schedules, and carers. It was stressful and inconsistent. Now, everything is coordinated through Community Care. The same familiar faces come to help dad, everyone communicates well, and we have one point of contact for everything. It's made managing his care so much easier, and dad is much happier with the consistency.",
        featured: false,
        videoUrl: null
    },
    {
        id: 8,
        name: "James Patterson",
        role: "NDIS Participant",
        service: "Community Participation",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        rating: 5,
        quote: "I've joined a local sports club and made friends I hang out with regularly. Community Care helped me find my community.",
        fullTestimonial: "I always loved sports but didn't think I could participate. My support worker researched local inclusive sports programs and found a basketball club perfect for me. She came to the first few sessions and helped me feel comfortable. Now I play every week, I'm part of the team, and I've made real friendships. We even catch up outside of basketball. Community Care didn't just help me find an activity - they helped me find my community.",
        featured: false,
        videoUrl: null
    }
];

// TEAM DATA
export const TEAM_DATA = [
    {
        id: 1,
        name: "Dr. Patricia Hughes",
        role: "Director & Founder",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "With over 20 years in disability services, Patricia founded Community Care with a vision of person-centered, dignified support.",
        qualifications: "PhD in Social Work, NDIS Specialist"
    },
    {
        id: 2,
        name: "Michael Roberts",
        role: "Operations Manager",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "Michael ensures our operations run smoothly and that every client receives consistent, high-quality care.",
        qualifications: "MBA, Certificate IV in Disability"
    },
    {
        id: 3,
        name: "Sarah Chen",
        role: "Care Coordinator",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "Sarah matches clients with the right support workers and oversees care plan implementation with compassion and expertise.",
        qualifications: "Bachelor of Nursing, Disability Support"
    },
    {
        id: 4,
        name: "David Martinez",
        role: "Training & Development Lead",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "David leads our training programs, ensuring all support workers are equipped with the latest skills and best practices.",
        qualifications: "Master of Education, Certified Trainer"
    }
];

// COMPANY STATS
export const COMPANY_STATS = [
    {
        number: "500+",
        label: "Clients Supported",
        icon: "Users"
    },
    {
        number: "50+",
        label: "Qualified Support Workers",
        icon: "Award"
    },
    {
        number: "10+",
        label: "Years Experience",
        icon: "Clock"
    },
    {
        number: "98%",
        label: "Client Satisfaction",
        icon: "Heart"
    }
];

// COMPANY VALUES
export const COMPANY_VALUES = [
    {
        id: 1,
        title: "Dignity",
        description: "We treat every individual with the utmost respect, honoring their autonomy and choices.",
        icon: "Heart"
    },
    {
        id: 2,
        title: "Respect",
        description: "We value diversity and embrace the unique qualities that each person brings to our community.",
        icon: "Users"
    },
    {
        id: 3,
        title: "Inclusiveness",
        description: "We create environments where everyone belongs and can participate fully in community life.",
        icon: "Activity"
    },
    {
        id: 4,
        title: "Responsibility",
        description: "We are accountable for delivering quality services and continuously improving our support.",
        icon: "CheckSquare"
    }
];

// WHY CHOOSE US
export const WHY_CHOOSE_US = [
    {
        title: "NDIS Registered & Compliant",
        description: "Fully registered NDIS provider meeting all compliance and quality standards.",
        icon: "Award"
    },
    {
        title: "Experienced Team",
        description: "Qualified, trained, and passionate support workers with years of experience.",
        icon: "Users"
    },
    {
        title: "Person-Centered Approach",
        description: "Your goals, choices, and preferences guide everything we do.",
        icon: "Target"
    },
    {
        title: "Comprehensive Services",
        description: "One provider for all your disability support needs - no need to juggle multiple agencies.",
        icon: "CheckSquare"
    },
    {
        title: "24/7 Availability",
        description: "Round-the-clock support when you need it, including after-hours assistance.",
        icon: "Clock"
    },
    {
        title: "Proven Track Record",
        description: "Hundreds of satisfied clients and families who trust us with their care.",
        icon: "Heart"
    }
];