export const projectData = [
    {
        name: 'Nutrition Assistant WebApp',
        githubLink: 'https://github.com/partheev/nutrition-assistant-webapp',
        description: `A Nutrition Assistant to control diet, manage food habits and keep good health.`,
        techstack: [
            'React.js',
            'Flask',
            'IBM DB2 (then migrated to Postgres)',
            'Docker',
            'Redhat Openshift',
        ],
        features: [
            `Users can upload or take pictures and get the details like calories and other nutrients of related food`,
            `The intake food will add to users food and users can see the updated progress bar of calories.`,
            'Also users can see the consumed calories of past week and food taken on particular day.',
        ],
        outlookImg: '/images/projectImages/outlook/nutrition-assistant.jpg',
        images: [
            process.env.PUBLIC_URL +
                '/images/projectImages/nutrition-assistant/sys-archi.png',
            process.env.PUBLIC_URL +
                '/images/projectImages/nutrition-assistant/nutri-screens.png',
        ],
    },
    {
        name: 'Puzzle Game',
        githubLink: 'https://github.com/partheev/puzzle-game-web',
        description: `Think Deep - An interactive puzzle game to test soft skills, picture analyzing skills, observation skills, and knowledge on current affairs.`,
        techstack: [
            'React.js with Typescript',
            'Redux',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Mongoose',
            'Netlify (to deploy frontend)',
            'Render (to deploy backend)',
        ],
        features: [
            'Registration and login using email and password.',
            'Users dashboard to analyze his/her past attempts results ( data shown using tables and charts)',
            'Resume puzzle incase something unexpected happen and browser closes',
            'User is asked whether to start new game or resume the previous one',
            'Drog and drop feature to arrange images for the puzzle',
            'Leadership board and puzzle results are shown at the end of puzzle game',
            'Time limit and limited attempts features implemented',
            'Admin can analyze the users performance using the charts and provided data',
            'Provides platform usage data like how many users registered and how many attempted the puzzle',
            'Bar charts used to show avg. time spent and avg. score of all users for each level',
        ],
        outlookImg: '/images/projectImages/outlook/quiz-game.webp',
        images: [
            process.env.PUBLIC_URL + '/images/projectImages/quiz-game/home.png',
            process.env.PUBLIC_URL + '/images/projectImages/quiz-game/test.png',
            process.env.PUBLIC_URL +
                '/images/projectImages/quiz-game/admin1.png',
            process.env.PUBLIC_URL +
                '/images/projectImages/quiz-game/admin2.png',
        ],
    },
    {
        name: 'Authentication System',
        githubLink: 'https://github.com/partheev/ecom-authservice',
        description: `This is secure authentication system which is written in typescript. I used JWT to sign tokens which is good practice for microservice architecture applications.
        This system has REST API's for user management (to create and delete users) and authenticating users verify username, password.`,
        techstack: ['TYPESCRIPT', 'POSTGRESQL', 'EXPRESS.JS'],
        features: [
            `Json Web Token's (JWT) are used`,
            `Secure cookies are passed to authenticated users.`,
            'Suitable for microservice architecture applications',
        ],
        outlookImg: '/images/projectImages/outlook/oauth.png',
        images: [],
    },
    {
        name: 'Admin Dashboard Panel',
        githubLink: 'https://github.com/partheev/localstore-adminfrontend',
        description: `This is specifically designed for Admin users/Bussiness owners of Online shopping website. Here the admin user add new products, modify existing products like changing prices, keeping offers, uploading new photos.
             `,
        techstack: ['TYPESCRIPT', 'NEXT.JS', 'TAILWIND CSS', 'MATERIAL UI'],
        features: [
            `Beautiful and Responsive UI design.`,
            `Multiple options to customize end-users application.`,
            'Secure authentication for admin users.',
            'Add/Edit Products.',
        ],
        outlookImg: '/images/projectImages/outlook/dashboard.png',
        images: [
            process.env.PUBLIC_URL + '/images/projectImages/loginpage.png',
            process.env.PUBLIC_URL + '/images/projectImages/addproduct.png',
            process.env.PUBLIC_URL +
                '/images/projectImages/productmanagement.png',
        ],
    },
    {
        name: 'Profile Page',
        githubLink: 'https://github.com/partheev/myprofilepage',
        description: `I designed and developed this profile page to showcase more about me and my work. I consider this profile web page is also a responsible project to show how I take care of my work even it is small. `,
        techstack: ['JAVASCRIPT', 'REACT.JS', 'MATERIAL UI'],
        features: [
            `Beautiful and Responsive UI design.`,
            `Smooth animations while scrolling to attract users.`,
            'Full functionalities without need of any backend.',
        ],
        outlookImg: '/images/projectImages/outlook/profile.jfif',
        images: [
            process.env.PUBLIC_URL + '/images/projectImages/homeprofile.png',
            process.env.PUBLIC_URL + '/images/projectImages/aboutprofile.png',
            process.env.PUBLIC_URL + '/images/projectImages/skillsprofile.png',
            process.env.PUBLIC_URL + '/images/projectImages/contactprofile.png',
            process.env.PUBLIC_URL + '/images/projectImages/projectprofile.png',
        ],
    },
    {
        name: 'Backend for E-Commerce',
        githubLink: 'https://github.com/partheev/localstore-adminbackend',
        description: `A backend application for Admin users rather than managing both end-users and
         admin users. Because this backend is just part of entire microservice
          architecture. All route handlers of this application are dedicated 
          to admin users only.`,
        techstack: ['GO (golang)', 'Gorilla/mux (package)'],
        features: [
            `Fast and secure backend api's for Single Page Applications.`,
            `JWT token verification on each request.`,
            'No frameworks used. Built with standard libraries (except for little functionalities like route handling, third party packages are used.).',
            'Maintainable code and project structure for large applications.',
            'Postgresql database used to persist data.',
        ],
        outlookImg: '/images/projectImages/outlook/ecombackend.png',
        images: [],
    },
];
