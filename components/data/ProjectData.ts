export const ProjectData = [
    {
        id: "film-finder",
        name: "FilmFinder",
        images: [
            '/img/projects/film-finder_home.png'
        ],
        githubURL: "https://github.com/TvGelderen/film-finder",
        liveURL: "https://film-finder.tvgelderen.nl/",
        skills: [
            "TypeScript",
            "Nuxt",
            "Go",
        ],
        content: new Map([
            ['en', {
                brief_description: "A web app for searching and saving movies. The frontend uses Nuxt and uses the API from The Movie Database to fetch the movie data. A seperate backend has been written in Go to handle the user management and authentication, user data is stored in a PostgreSQL database.",
                description: ""
            }],
            ['nl', {
                brief_description: "Een web app voor het zoeken en bewaren van films. De frontend maakt gebruik van Nuxt en de API van The Movie Database voor het ophalen van de film data. Er is een aparte backend geschreven in Go voor het aanmaken en authenticeren van gebruikers, de gebruikersgegevens worden opgeslagen in een PostgreSQL database.",
                description: ""
            }]
        ])
    },
    {
        id: "netflix-clone",
        name: "Netflix Clone",
        images: [
            '/img/projects/netflix_home.png',
            '/img/projects/netflix_profile.png',
            '/img/projects/netflix_stripe.png',
            '/img/projects/netflix_logged-out.png',
        ],
        githubURL: "https://github.com/TvGelderen/netflix-clone",
        liveURL: "https://netflix-clone-tvgelderen.vercel.app/",
        skills: [
            "TypeScript",
            "Tailwind CSS",
            "Next.js",
            "Firebase"
        ],
        content: new Map([
            ['en', {
                brief_description: "A Netflix look-alike web application, which allows users to log in and save movies to their own watch list. It shows movies in different categories such as trending, top rated, and different genres. By clicking on a movie more information about it is shown along with the trailer.",
                description: ""
            }],
            ['nl', {
                brief_description: "Een namaak versie van Netflix met beperkte functionaliteit. Gebruikers kunnen een account aanmaken en onder hun account films toevoegen aan hun persoonlijke lijst. Er zijn verschillende categoriën zoals de trending, top rated, en verschillende genres. Wanneer een gebruiker op een film klikt komt meer informatie over de film tevoorschijn samen met de trailer.",
                description: ""
            }]
        ])
    },
    {
        id: "us-national-parks",
        name: "National Parks",
        images: [
            '/img/projects/us-national-parks.png',
            '/img/projects/us-national-parks2.png',
            '/img/projects/us-national-parks3.png',
            '/img/projects/us-national-parks_yosemite.png',
            '/img/projects/us-national-parks_yosemite2.png',
            '/img/projects/us-national-parks_yosemite3.png',
        ],
        githubURL: "https://github.com/TvGelderen/us-national-parks",
        liveURL: "https://us-national-parks.tvgelderen.nl/",
        skills: [
            "JavaScript",
            "Tailwind CSS",
            "Next.js",
        ],
        content: new Map([
            ['en', {
                brief_description: "A web application which provides images and information about some of the United States' national parks. On the homepage a carousel is found along with a map which shows the location of each park with a marker. Each park's specific page contains more images along with information about the park fetched using the National Park's officail API.",
                description: ""
            }],
            ['nl', {
                brief_description: "Een website met informatie over een aantal van Amerika's nationale parken. Op de thuispagina is een carousel met afbeeldingen te zien samen met een kaart met daarop de locatie van ieder park met een marker aangegeven. Op de pagina van ieder park zijn meer foto's te vinden samen met informatie verkregen via de officiële National Parks API.",
                description: ""
            }]
        ])
    },
    {
        id: "crypto-watch",
        name: "Crypto Watch",
        images: [
            '/img/projects/crypto-watch_home.png',
            '/img/projects/crypto-watch_list.png',
            '/img/projects/crypto-watch_chartsearch.png',
            '/img/projects/crypto-watch_coinpage.png' 
        ],
        githubURL: "https://github.com/TvGelderen/crypto-watch",
        liveURL: "https://crypto-watch-tvgelderen.vercel.app/",
        skills: [
            "JavaScript",
            "Bootstrap",
            "React",
        ],
        content: new Map([
            ['en', {
                brief_description: "A website showing the current crypto courses using Coingecko's API. Each coin has its own page which shows two graphs, one for the historic price data and the other for showing the marketcap change over time, the time shown can be set ranging from 1 day up to change over all time since the coin's creation.",
                description: ""
            }],
            ['nl', {
                brief_description: "Een website die de huidige crypto koersen weergeeft door gebruik te maken van Coingecko's API. Iedere munt heeft een eigen pagina waarop grafieken van de prijs data en marktkapitalisatie data te zien zijn over verloop van tijd, deze tijd is in te stellen van 1 dag terug tot aan de creatie van de munt.",
                description: ""
            }]
        ])
    }
]
