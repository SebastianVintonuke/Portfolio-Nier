export type Project = {
    id: string,
    tittleToken: string,
    contentToken: string,
    bannerToken: string,
    imgSrc: string,
    demoLink: string | null,
    gitHubLink: string | null
}

export const PROJECTS: Project[] = [{
        id: 'sokoban',
        tittleToken: 'PROJECTS.PROJECTS.SOKOBAN.TITTLE',
        contentToken: 'PROJECTS.PROJECTS.SOKOBAN.CONTENT',
        bannerToken: 'PROJECTS.PROJECTS.SOKOBAN.BANNER',
        imgSrc: '/img/sokoban.jpg',
        demoLink: 'https://sokoban-web.vercel.app/#/',
        gitHubLink: 'https://github.com/SebastianVintonuke/Sokoban-Web'
    },{
        id: 'recomendify',
        tittleToken: 'PROJECTS.PROJECTS.RECOMENDIFY.TITTLE',
        contentToken: 'PROJECTS.PROJECTS.RECOMENDIFY.CONTENT',
        bannerToken: 'PROJECTS.PROJECTS.RECOMENDIFY.BANNER',
        imgSrc: '/img/recomendify.jpg',
        demoLink: null,
        gitHubLink: 'https://github.com/SebastianVintonuke/Spotify-Recomendify'
    },
]