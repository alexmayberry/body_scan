const bio = {
    headline: 'Alex Mayberry',
    text: "I am a fullstack software developer, artist and gardener in Seattle Washington. I was formally trained as a designer and have since worked on complex websites in multiple spaces including Community Healthcare and ebike ecommerce. \nAs a freelancers I have worked with startup founders, small buisness owners, birth workers, anarchist librarians, artists, and community groups to scope, design and build small affordable apps and websites with a personal touch. \nMy code is performant, and my sunchokes rotund. This is not LinkedIn, this is my website. I wear clothes in the office (see references). This digital garden was borne out of a desire to share a high resolution image of myself on the internet. Something closer to what you'd find in real life. And yet, a website is not a lossless format. I've grown wider than 1440 pixels. I am large, I contain multitudes. As do you. Please email me. We can let our multitudes meet and frolic. Or better yet, if you're ever in the PNW, stop by the house, meet our chickens and have dinner.",
}

const hero = {
    headline: "Welcome to my crib",
    text: "Please feel free to turn fig leaf mode on"
}

const books = [
    {
        title: "Critical Path",
        author: "Bucky",
        link: "https://en.wikipedia.org/wiki/Critical_Path_(book)"
    },
    {
        title: "Zen and the Art of Motorcycle Maintance",
        author: "Robert Pirsig",
        link: "https://en.wikipedia.org/wiki/Zen_and_the_Art_of_Motorcycle_Maintenance"
    },
]

const friends = [
    {
        name: "Kai",
        link: "https://skippola.com"
    },
    {
        name: "Ryan",
        link: "https://ryanrot.haus/"
    }
]

const links = [
    {
        name: "rhis", 
        slug: "this", 
        tags: ["web", "art"], 
        date: "2023-10-02", 
        text: "This is the description", 
        links: [
            { name: "github", link: "https://github.com/alexmayberry" },
            { name: "blog post", link: "https://alexmayberry.net" },
        ], 
        img: "../public/project-photo.png"
    },
    {
        name: "project 2", 
        slug: "this", 
        tags: ["web", "art"], 
        date: "2023-10-02", 
        desc: "This is the description", 
        links: [
            { name: "github", link: "https://github.com/alexmayberry" },
            { name: "blog post", link: "https://alexmayberry.net" },
        ], 
        img: "../public/project-photo.png"
    }
]

module.exports = {
    bio,
    hero,
    books,
    friends,
    links
}