import sicutImg from "../assets/images/sicut.png"
import sitivitImg from "../assets/images/sitivit.png"
import sicutSitivitImg from "../assets/images/sicutSitivit.png"
import silverSwanImg from "../assets/images/silverSwan.png"
import weepImg from "../assets/images/weep.png"
import danzaImg from "../assets/images/danza.png"
import vocaliseImg from "../assets/images/vocalise.png"
import sehnsuchtImg from "../assets/images/sehnsucht.png"
// import seTuMamiImg from "../assets/images/seTuMami.png"
// To add songs: -check "upcoming" boolean of the last song, print to pdf then use preview to export p. 1 as png, releaseDate format YYYY-MM-DD, category = treble/bass/mixed, accidentals: ♭♯♮𝄪𝄫

const songData = [
    {
        id: 1,
        pathExt: 'sicut-ssaa',
        imagePath: sicutImg,
        imageAlt: 'Sicut cervus',
        purchaseInfo: {
            info1: {
                site: 'J.W. Pepper',
                link: 'https://www.jwpepper.com/sicut-cervus-11625731-2547494/p'
            },
            // info2: {
            //     site: 'Sheet Music Plus',
            //     link: ''
            // },
            // info3: {
            //     site: 'Sheet Music Direct',
            //     link: ''
            // }
        },
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
        id: 2,
        pathExt: 'sitivit-ssaa',
        imagePath: sitivitImg,
        imageAlt: 'Sitivit anima mea',
        purchaseInfo: {
            info1: {
                site: 'J.W. Pepper',
                link: 'https://www.jwpepper.com/sitivit-anima-mea-11625736-2547504/p'
            },
            // info2: {
            //     site: 'Sheet Music Plus',
            //     link: ''
            // },
            // info3: {
            //     site: 'Sheet Music Direct',
            //     link: ''
            // }
        },
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
        id: 3,
        pathExt: 'sicut-sitivit-ssaa',
        imagePath: sicutSitivitImg,
        imageAlt: 'Sicut cervus - Sitivit anima mea',
        purchaseInfo: {
            info1: {
                site: 'J.W. Pepper',
                link: 'https://www.jwpepper.com/sicut-cervus-sitivit-anima-mea-11625737-2547449/p'
            },
            // info2: {
            //     site: 'Sheet Music Plus',
            //     link: ''
            // },
            // info3: {
            //     site: 'Sheet Music Direct',
            //     link: ''
            // }
        },
        purchaseLink: 'https://www.jwpepper.com/sicut-cervus-sitivit-anima-mea-11625737-2547449/p',
        purchaseSite: 'J.W. Pepper',
        price: '$3.50',  
        listenLink: 'https://youtu.be/7NrQK2osV3Y',
        composerLast: 'Palestrina',
        composerFirst: 'Giovanni Pierluigi da',
        songTitle: 'Sicut cervus - Sitivit anima mea',
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
        id: 4,
        pathExt: 'the-silver-swan-ssa',
        imagePath: silverSwanImg,
        imageAlt: 'The Silver Swan',
        purchaseInfo: {
            info1: {
                site: 'J.W. Pepper',
                link: 'https://www.jwpepper.com/the-silver-swan-11630296-2582599/p'
            },
            // info2: {
            //     site: 'Sheet Music Plus',
            //     link: ''
            // },
            // info3: {
            //     site: 'Sheet Music Direct',
            //     link: ''
            // }
        },
        purchaseLink: 'https://www.jwpepper.com/the-silver-swan-11630296-2582599/p',
        purchaseSite: 'J.W. Pepper',
        price: '$2.50',  
        listenLink: 'https://youtu.be/8V7DYEfTcRI',
        composerLast: 'Gibbons',
        composerFirst: 'Orlando',
        songTitle: 'The Silver Swan',
        songParts: 'SSA',
        category: 'treble',
        accompaniment: 'aCappella',
        accompDescr: ' a cappella',
        releaseDate: '2025-06-22',
        range: {
            soprano1: 'F4 - G5',
            soprano2: 'C4 - C5',
            alto: 'A3 - G4'
        }, 
        upcoming: false
    },
    {
        id: 5,
        pathExt: 'weep-you-no-more-ssa',
        imagePath: weepImg,
        imageAlt: 'Weep You No More',
        purchaseInfo: {
            info1: {
                site: 'J.W. Pepper',
                link: 'https://www.jwpepper.com/weep-you-no-more-11690510-2785627/p'
            },
            info2: {
                site: 'Sheet Music Plus',
                link: 'https://www.sheetmusicplus.com/en/product/danza-danza-23883766.html'
            },
            info3: {
                site: 'Sheet Music Direct',
                link: 'https://www.sheetmusicdirect.com/se/ID_No/2116123/Product.aspx'
            }
        },
        purchaseLink: 'https://www.jwpepper.com/weep-you-no-more-11690510-2785627/p',
        purchaseSite: 'J.W. Pepper',
        price: '$2.50',  
        listenLink: 'https://youtu.be/290ODmPpDUA',
        composerLast: 'Quilter',
        composerFirst: 'Roger',
        songTitle: 'Weep You No More',
        songParts: 'SSA',
        category: 'treble',
        accompaniment: 'pianoOnly',
        accompDescr: ' and piano',
        releaseDate: '2026-05-05',
        range: {
            soprano1: 'E♭4 - G5',
            soprano2: 'B♭4 - E♭5',
            alto: 'F3 - C5'
        }, 
        upcoming: false
    },
    {
        id: 6,
        pathExt: 'danza-danza-tbb',
        imagePath: danzaImg,
        imageAlt: 'Danza, danza',
        purchaseInfo: {
            info1: {
                site: 'J.W. Pepper',
                link: 'https://www.jwpepper.com/danza-danza-11690507-2785621/p'
            },
            info2: {
                site: 'Sheet Music Plus',
                link: 'https://www.sheetmusicplus.com/en/product/danza-danza-23883766.html'
            },
            info3: {
                site: 'Sheet Music Direct',
                link: 'https://www.sheetmusicdirect.com/se/ID_No/2116123/Product.aspx'
            }
        },
        purchaseLink: 'https://www.jwpepper.com/danza-danza-11690507-2785621/p',
        purchaseSite: 'J.W. Pepper',
        price: '$2.50',  
        listenLink: 'https://youtu.be/8Nkgg7D6t-w',
        composerLast: 'Durante',
        composerFirst: 'Francesco',
        songTitle: 'Danza, danza',
        songParts: 'TBB',
        category: 'bass',
        accompaniment: 'pianoOnly',
        accompDescr: ' and piano',
        releaseDate: '2026-05-06',
        range: {
            tenor: 'A2 - E4',
            baritone: 'A2 - D4',
            bass: 'A2 - B3'
        }, 
        upcoming: false
    },
        {
        id: 7,
        pathExt: 'vocalise-ssaattbb',
        imagePath: vocaliseImg,
        imageAlt: 'Vocalise',
        purchaseInfo: {
            info1: {
                site: 'J.W. Pepper',
                link: ''
            },
            // info2: {
            //     site: 'Sheet Music Plus',
            //     link: ''
            // },
            // info3: {
            //     site: 'Sheet Music Direct',
            //     link: ''
            // }
        },
        purchaseLink: 'www.bethdeutmeyer.com',
        purchaseSite: 'J.W. Pepper',
        price: '$2.50',  
        listenLink: '',
        composerLast: 'Rachmaninoff',
        composerFirst: 'Sergei',
        songTitle: 'Vocalise',
        songParts: 'SSAATTBB',
        category: 'mixed',
        accompaniment: 'aCappella',
        accompDescr: ' a cappella',
        releaseDate: '',
        range: {
            soprano1: '',
            soprano2: '',
            alto1: '',
            alto2: '',
            tenor1: '',
            tenor2: '',
            bass1: '',
            bass2: ''
        }, 
        upcoming: true
    },
    // {
    //     id: 6,
    //     pathExt: 'sehnsucht-ssaa',
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
    // {
    //     id: ,
    //     pathExt: 'se-tu-m\'ami',
    //     imagePath: seTuMamiImg,
    //     imageAlt: 'Se tu m\'ami',
    //     purchaseLink: '',
    //     purchaseSite: '',
    //     price: '',  
    //     listenLink: '',
    //     composerLast: 'Parisotti',
    //     composerFirst: 'presumably by Alessandro',
    //     songTitle: 'Se tu m\'ami',
    //     songParts: 'SSA',
    //     category: 'treble',
    //     accompaniment: 'pianoOnly',
    //     accompDescr: ' and piano',
    //     releaseDate: '',
    //     range: {
    //         soprano1: '',
    //         soprano2: '',
    //         alto: '',
    //     }, 
    //     upcoming: true
    // },
        // {
    //     id: ,
    //     pathExt: 'danza-ttbb',
    //     imagePath: danzaImg,
    //     imageAlt: 'Danza, danza',
    //     purchaseLink: 'https://www.jwpepper.com/danza-danza-11625730-2547492/p',
    //     purchaseSite: 'J.W. Pepper',
    //     price: '$2.50',  
    //     listenLink: 'https://youtu.be/7R6h6a1PyrU',
    //     composerLast: 'Durante',
    //     composerFirst: 'Francesco',
    //     songTitle: 'Danza, danza',
    //     songParts: 'TTBB',
    //     category: 'bass',
    //     accompaniment: 'pianoOnly',
    //     accompDescr: ' and piano',
    //     releaseDate: '2025-02-12',
    //     range: {
    //         tenor1: 'F3 - G♭4',
    //         tenor2: 'D♭3 - F4',
    //         bass1: 'B♭3 - C4',
    //         bass2: 'F2 - B♭3'
    //     },
    //     upcoming: false

    // },
];

export default songData;