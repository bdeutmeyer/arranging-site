import danzaImg from "../assets/images/danza.png"
// To add songs: -check "upcoming" boolean of the last song, print to pdf then use preview to crop and export as png then use Canva to crop to 5:4 aspect ratio, releaseDate format YYYY-MM-DD, category = treble/bass/mixed, accidentals: ♭♯♮𝄪𝄫, 
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
        accompaniment: 'a cappella',
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
        pathExt: 'song-title2',
        imagePath: 'Future variable defined in imports',
        imageAlt: 'Image alt',
        purchaseLink: 'link',
        composerLast: 'Lastname',
        composerFirst: 'Firstname',
        songTitle: 'B',
        songParts: 'SATB/SSAA, etc',
        category: 'treble',
        accompaniment: 'piano',
        releaseDate: '2025-01-15',
        range: {
            soprano: 'customize for specific songs here, only include actual parts'
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
        accompaniment: 'piano + flute',
        releaseDate: '2024-11-22',
        range: {
            soprano: 'customize for specific songs here, only include actual parts'
        },
        upcoming: false
    },
];

export default songData;