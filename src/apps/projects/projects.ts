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
        tittleToken: 'PROJECTS.PROJECTS.SOKOBAN.TITLE',
        contentToken: 'PROJECTS.PROJECTS.SOKOBAN.CONTENT',
        bannerToken: 'PROJECTS.PROJECTS.SOKOBAN.BANNER',
        imgSrc: '/img/sokoban.jpg',
        demoLink: 'https://sokoban-web.vercel.app/#/',
        gitHubLink: 'https://github.com/SebastianVintonuke/Sokoban-Web'
    },{
        id: 'recomendify',
        tittleToken: 'PROJECTS.PROJECTS.RECOMENDIFY.TITLE',
        contentToken: 'PROJECTS.PROJECTS.RECOMENDIFY.CONTENT',
        bannerToken: 'PROJECTS.PROJECTS.RECOMENDIFY.BANNER',
        imgSrc: '/img/recomendify.jpg',
        demoLink: null,
        gitHubLink: 'https://github.com/SebastianVintonuke/Spotify-Recomendify'
    },{
        id: 'adventofcode2023',
        tittleToken: 'PROJECTS.PROJECTS.ADVENTOFCODE2023.TITLE',
        contentToken: 'PROJECTS.PROJECTS.ADVENTOFCODE2023.CONTENT',
        bannerToken: 'PROJECTS.PROJECTS.ADVENTOFCODE2023.BANNER',
        imgSrc: '/img/adventofcode2023.jpg',
        demoLink: null,
        gitHubLink: 'https://github.com/SebastianVintonuke/rust-advent-of-code-2023'
    },{
        id: 'evangelion-new-year-timer',
        tittleToken: 'PROJECTS.PROJECTS.EVNEWYEAR.TITLE',
        contentToken: 'PROJECTS.PROJECTS.EVNEWYEAR.CONTENT',
        bannerToken: 'PROJECTS.PROJECTS.EVNEWYEAR.BANNER',
        imgSrc: '/img/evnewyear.jpg',
        demoLink: 'https://evangelion-new-year-timer.vercel.app/',
        gitHubLink: 'https://github.com/SebastianVintonuke/Evangelion-New-Year-Timer'
    },{
        id: 'gojuon',
        tittleToken: 'PROJECTS.PROJECTS.GOJUON.TITLE',
        contentToken: 'PROJECTS.PROJECTS.GOJUON.CONTENT',
        bannerToken: 'PROJECTS.PROJECTS.GOJUON.BANNER',
        imgSrc: '/img/gojuon.jpg',
        demoLink: 'https://gojuon.vercel.app/',
        gitHubLink: 'https://github.com/SebastianVintonuke/Gojuon'
    }
]