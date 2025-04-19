// import images from assets
// To add songs: -check "upcoming" boolean of the last song, make sure all images have (x) aspect ratio, releaseDate format YYYY-MM-DD
const songData = [
    {
        id: 1,
        pathExt: 'song-title1',
        imagePath: 'Future variable defined in imports',
        imageAlt: 'Image alt',
        purchaseLink: 'link',
        composerLast: 'Beethoven',
        composerFirst: 'Firstname',
        songTitle: 'A',
        songParts: 'SATB/SSAA, etc',
        category: 'mixed',
        accompaniment: 'piano + flute',
        releaseDate: '2025-01-01',
        range: {
            soprano: 'customize for specific songs here, only include actual parts'
        },
        upcoming: true

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
        upcoming: false
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
        accompaniment: 'a cappella',
        releaseDate: '2024-11-22',
        range: {
            soprano: 'customize for specific songs here, only include actual parts'
        },
        upcoming: false
    },
];

export default songData;