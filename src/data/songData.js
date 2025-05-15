import danzaImg from "../assets/images/danza.png"
import sicutImg from "../assets/images/sicut.png"
import sitivitImg from "../assets/images/sitivit.png"
import sicutSitivitImg from "../assets/images/sicutSitivit.png"
import seTuMamiImg from "../assets/images/seTuMami.png"
import sehnsuchtImg from "../assets/images/sehnsucht.png"
// To add songs: -check "upcoming" boolean of the last song, print to pdf then use preview to export p. 1 as png, releaseDate format YYYY-MM-DD, category = treble/bass/mixed, accidentals: ♭♯♮𝄪𝄫

const songData = [
    {
        id: 1,
        pathExt: 'danza-ttbb',
        imagePath: danzaImg,
        imageAlt: 'Danza, danza',
        purchaseLink: 'https://www.jwpepper.com/danza-danza-11625730-2547492/p',
        purchaseSite: 'J.W. Pepper',
        price: '$2.50',  
        listenLink: 'https://youtu.be/7R6h6a1PyrU',
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
        upcoming: false

    },
    {
        id: 2,
        pathExt: 'sicut-ssaa',
        imagePath: sicutImg,
        imageAlt: 'Sicut cervus',
        purchaseLink: 'https://www.jwpepper.com/sicut-cervus-11625731-2547494/p',
        purchaseSite: 'J.W. Pepper',
        price: '$2.50',  
        listenLink: 'https://youtu.be/S8CDvuqfrSg',
        composerLast: 'Palestrina',
        composerFirst: 'Giovanni Pierluigi da',
        songTitle: 'Sicut cervus',
        songParts: 'SSAA',
        category: 'treble',
        accompaniment: 'aCappella',
        accompDescr: ' a cappella',
        releaseDate: '2025-02-16',
        range: {
            soprano1: 'E4 - E5',
            soprano2: 'A3 - D5',
            alto1: 'G♯3 - D5',
            alto2: 'F♯3 - B4'
        }, 
        upcoming: false
    },
    {
        id: 3,
        pathExt: 'sitivit-ssaa',
        imagePath: sitivitImg,
        imageAlt: 'Sitivit anima mea',
        purchaseLink: 'https://www.jwpepper.com/sitivit-anima-mea-11625736-2547504/p',
        purchaseSite: 'J.W. Pepper',
        price: '$2.50',  
        listenLink: 'https://youtu.be/UDCn0zJUZL4',
        composerLast: 'Palestrina',
        composerFirst: 'Giovanni Pierluigi da',
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
        upcoming: false
    },
    {
        id: 4,
        pathExt: 'sicut-sitivit-ssaa',
        imagePath: sicutSitivitImg,
        imageAlt: 'Sicut cervus/Sitivit anima mea',
        purchaseLink: 'https://www.jwpepper.com/sicut-cervus-sitivit-anima-mea-11625737-2547449/p',
        purchaseSite: 'J.W. Pepper',
        price: '$3.50',  
        listenLink: 'https://youtu.be/7NrQK2osV3Y',
        composerLast: 'Palestrina',
        composerFirst: 'Giovanni Pierluigi da',
        songTitle: 'Sicut cervus/Sitivit anima mea',
        songParts: 'SSAA',
        category: 'treble',
        accompaniment: 'aCappella',
        accompDescr: ' a cappella',
        releaseDate: '2025-02-20',
        range: {
            soprano1: 'E4 - F♯5',
            soprano2: 'A3 - F♯5',
            alto1: 'G♯3 - C♯5',
            alto2: 'F♯3 - B4'
        }, 
        upcoming: false
    },
    {
        id: 5,
        pathExt: 'se-tu-m\'ami',
        imagePath: seTuMamiImg,
        imageAlt: 'Se tu m\'ami',
        purchaseLink: '',
        purchaseSite: '',
        price: '',  
        listenLink: '',
        composerLast: 'Parisotti',
        composerFirst: 'presumably by Alessandro',
        songTitle: 'Se tu m\'ami',
        songParts: 'SSA',
        category: 'treble',
        accompaniment: 'pianoOnly',
        accompDescr: ' and piano',
        releaseDate: '',
        range: {
            soprano1: '',
            soprano2: '',
            alto: '',
        }, 
        upcoming: true
    },
    // {
    //     id: 5,
    //     pathExt: 'sehnsucht',
    //     imagePath: sehnsuchtImg,
    //     imageAlt: 'Sehnsucht',
    //     purchaseLink: 'https://www.youtube.com',
    //     purchaseSite: 'J.W. Pepper',
    //     price: '',  
    //     listenLink: '',
    //     composerLast: 'Brahms',
    //     composerFirst: 'Johannes',
    //     songTitle: 'Sehnsucht',
    //     songSubtitle: 'Op. 112, No. 1',
    //     songParts: 'SSAA',
    //     category: 'treble',
    //     accompaniment: 'pianoOnly',
    //     accompDescr: ' and piano',
    //     releaseDate: '',
    //     range: {
    //         soprano1: 'E4 - F♯5',
    //         soprano2: 'A3 - F♯5',
    //         alto1: 'G♯3 - C♯5',
    //         alto2: 'F♯3 - B4'
    //     }, 
    //     upcoming: true
    // },
];

export default songData;