import danzaImg from "../assets/images/danza.png"
import sicutImg from "../assets/images/sicut.png"
import sitivitImg from "../assets/images/sitivit.png"
// To add songs: -check "upcoming" boolean of the last song, print to pdf then use preview to export p. 1 as png, releaseDate format YYYY-MM-DD, category = treble/bass/mixed, accidentals: ♭♯♮𝄪𝄫, accompaniment = a cappella
const songData = [
    {
        id: 1,
        pathExt: 'danza-ttbb',
        imagePath: danzaImg,
        imageAlt: 'Danza, danza',
        purchaseLink: 'link',
        composerLast: 'Durante',
        composerFirst: 'Francesco',
        songTitle: 'Danza, danza',
        songParts: 'TTBB',
        category: 'bass',
        accompaniment: 'pianoOnly',
        accompDescr: ' and piano',
        releaseDate: '2025-02-12',
        range: {
            tenor1: 'F3 - G♭4',
            tenor2: 'D♭3 - F4',
            bass1: 'B♭3 - C4',
            bass2: 'F2 - B♭3'
        },
        price: '',        
        upcoming: false

    },
    {
        id: 2,
        pathExt: 'sicut-ssaa',
        imagePath: sicutImg,
        imageAlt: 'Sicut cervus',
        purchaseLink: 'link',
        composerLast: 'da Palestrina',
        composerFirst: 'Giovanni Pierluigi',
        songTitle: 'Sicut cervus',
        songParts: 'SSAA',
        category: 'treble',
        accompaniment: 'aCappella',
        accompDescr: ' a cappella',
        releaseDate: '', //real date for when it's not a test subject anymore: 2025-02-16
        range: {
            soprano1: 'E4 - E5',
            soprano2: 'A3 - D5',
            alto1: 'G♯3 - D5',
            alto2: 'F♯3 - B4'
        },
        price: '',   
        upcoming: true
    },
    {
        id: 3,
        pathExt: 'sitivit-ssaa',
        imagePath: sitivitImg,
        imageAlt: 'Sitivit anima mea',
        purchaseLink: 'link',
        composerLast: 'da Palestrina',
        composerFirst: 'Giovanni Pierluigi',
        songTitle: 'Sitivit anima mea',
        songParts: 'SSAA',
        category: 'treble',
        accompaniment: 'aCappella',
        accompDescr: ' a cappella',
        releaseDate: '2025-02-18',
        range: {
            soprano1: 'E4 - F♯5',
            soprano2: 'C♯4 - F♯5',
            alto1: 'A3 - C♯5',
            alto2: 'F♯3 - B4'
        },
        price: '',   
        upcoming: false
    },
    {
        id: 4,
        pathExt: 'sicut-sitivit-ssaa',
        imagePath: 'Future variable defined in imports',
        imageAlt: 'Sicut cervus + Sitivit anima mea',
        purchaseLink: 'link',
        composerLast: 'da Palestrina',
        composerFirst: 'Giovanni Pierluigi',
        songTitle: 'Sicut cervus + Sitivit anima mea',
        songParts: 'SSAA',
        category: 'treble',
        accompaniment: 'aCappella',
        accompDescr: ' a cappella',
        releaseDate: '2024-02-20', //change to 2025 when everything is up
        range: {
            soprano1: 'E4 - F♯5',
            soprano2: 'A3 - F♯5',
            alto1: 'G♯3 - C♯5',
            alto2: 'F♯3 - B4'
        },
        price: '',   
        upcoming: false
    },
];

export default songData;