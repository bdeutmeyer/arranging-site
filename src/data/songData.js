import danzaImg from "../assets/images/danza.png"
import sicutImg from "../assets/images/sicut.png"
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
            tenor1: 'F3-G♭4',
            tenor2: 'D♭3-F4',
            bass1: 'B♭3-C4',
            bass2: 'F2-B♭3'
        },
        upcoming: false

    },
    {
        id: 2,
        pathExt: 'sicut-SSAA',
        imagePath: sicutImg,
        imageAlt: 'Sicut Cervus',
        purchaseLink: 'link',
        composerLast: 'da Palestrina',
        composerFirst: 'Giovanni Pierluigi',
        songTitle: 'Sicut Cervus',
        songParts: 'SSAA',
        category: 'treble',
        accompaniment: 'aCappella',
        accompDescr: ', a cappella',
        releaseDate: '', //real date for when it's not a test subject anymore: 2025-02-16
        range: {
            soprano1: 'E4-E5',
            soprano2: 'A3-D5',
            alto1: 'G♯3-D5',
            alto2: 'F♯3-B4'
        },
        upcoming: true
    },
    {
        id: 3,
        pathExt: 'song-title3',
        imagePath: 'Future variable defined in imports',
        imageAlt: 'Image alt',
        purchaseLink: 'link',
        composerLast: 'Lastname',
        composerFirst: 'Firstname',
        songTitle: 'C',
        songParts: 'SATB/SSAA, etc',
        category: 'bass',
        accompaniment: 'otherInstr',
        accompDescr: '',
        releaseDate: '2024-11-22',
        range: {
            soprano: 'customize for specific songs here, only include actual parts'
        },
        upcoming: false
    },
];

export default songData;