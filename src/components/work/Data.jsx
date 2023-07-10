import Work1 from "../../assets/assets/restaurantReservations.png";
import Work2 from "../../assets/assets/arbibabesPortfolio.PNG";
import Work3 from "../../assets/assets/weLoveMoviesRe.png";
import Work4 from "../../assets/assets/clinicals.PNG";
import Work5 from "../../assets/assets/flashCardAppRe.png";
import Work6 from "../../assets/assets/grubDashRe.png";

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: 'Restaurant Reservations',
        category: 'fullstack',
        url: 'https://periodictables.vercel.app/dashboard',
        url2: 'https://github.com/EthenThinkful/Restaurant-Reservation-App', 
        description: 'PERN Stack Application developed for restaurant personnel to keep track of reservations and seating.'
    },
    {
        id: 2,
        image: Work2,
        title: 'Arbibabes (NFT Promo Site)',
        category: 'frontend',
        url: 'https://optichads.vercel.app/babes',
        url2: 'https://github.com/DistractionBoy/optichads',
        description: 'Learned Typescript & Next.js, an advanced react based framework, by contributing to frontend tickets per the development team.'
    },
    {
        id: 3,
        image: Work3,
        title: 'Movie Reviews',
        category: 'backend',
        url: 'https://we-love-movies-frontend-red.vercel.app/',
        url2: 'https://github.com/EthenThinkful/WeLoveMovies',
        description: "Created to demonstrate my understanding of backend code and RESTful principles per Thinkful's cirriculum."
    },
    {
        id: 4,
        image: Work4,
        title: 'Clinical Data Logger',
        category: 'fullstack',
        url: 'http://clinicaldataloggerfe.s3-website-us-east-1.amazonaws.com/',
        url2: 'https://github.com/EthenThinkful/ClinicalDataLoggerBackend',
        description: 'After learning Java & Spring, decided to make a simplistic full stack app utilizing a Spring built API, React, & AWS.'
    },
    {
        id: 5,
        image: Work5,
        title: 'Study Card Application',
        category: 'frontend',
        url2: 'https://github.com/EthenThinkful/FlashCardApp', 
        description: 'Flashcard project that got me out of the React learning curve by using a plethora of React hooks.'
    },
    {
        id: 6, 
        image: Work6,
        title: 'GrubDash',
        category: 'backend',
        url: 'https://grub-dash-front-end-tawny.vercel.app/',
        url2: 'https://github.com/EthenThinkful/GrubDash', 
        description: "This project tested my ability to build APIs with complex validation, per Thinkful's cirriculum, & connecting to a frontend."
    }
]

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'frontend',
    },
    {
        name: 'backend',
    },
    {
        name: 'fullstack',
    }
]