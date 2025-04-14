// import images from assets

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
        //change songPartsDescr to 'category', one word only, and then plan to display in sections down the line? treble section, bass section, mixed section? would also need to display only a certain number per page eventually
        category: 'mixed',
        accompaniment: 'piano + flute',
        releaseDate: '2025-01-01',
        range: {
            soprano: 'customize for specific songs here, only include actual parts'
        }
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
        }
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
        }
    },
];

export default songData;