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
    },{
        id: 'adventofcode2023',
        tittleToken: 'PROJECTS.PROJECTS.ADVENTOFCODE2023.TITTLE',
        contentToken: 'PROJECTS.PROJECTS.ADVENTOFCODE2023.CONTENT',
        bannerToken: 'PROJECTS.PROJECTS.ADVENTOFCODE2023.BANNER',
        imgSrc: '/img/adventofcode2023.jpg',
        demoLink: null,
        gitHubLink: 'https://github.com/SebastianVintonuke/rust-advent-of-code-2023'
    }
]