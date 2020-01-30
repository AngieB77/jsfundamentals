/*
container that stores multibple sets of data
    stores data as a key/value pairs
    objects are denoted by {}

    */

    let netflix = {
        id: 1, 
        showName: 'The Office',
        season: {
            episodeInfo: [{
                episode:1,
                episodeName: 'Pilot',
            }, {
                episode 2,
                episodeName: 'diversity Day'
            }, {
                episode 3,
                episodeName: 'Healthcare',
            }, {
                episode 4,
                episodeName: 'The Alliance',
            }, {
                episode 5,
                episodeName: 'Basketball',
            },{
                episode 6,
                episodeName: 'Hot Girl',

            
            }]
        }
        season2: (),
        season3: (),
        season4: (),
    }

        //to access data inside of an object, or to dive into an object, we use dot notation


    console.log('all data:', netflix):let netflix = {
        id: 1,
        showName: 'The Office',
        season1: {
            seasonInfo: {
                episodeInfo: [{
                    episode: 1,
                    episodeName: 'Pilot'
                }, {
                    episode: 2,
                    episodeName: 'Diversity Day'
                }, {
                    episode: 3,
                    episodeName: 'Health Care'
                }, {
                    episode: 4,
                    episodeName: 'The Alliance'
                }, {
                    episode: 5,
                    episodeName: 'Basketball'
                }, {
                    episode: 6,
                    episodeName: 'Hot Girl'
                }]
            }
        },
        season2: {},
        season3: {},
        season4: {}

    }
console.log('all data', netflx);
console.log('season info:', netflix.season1.seasonInfo);
console.log('specific episode name':, netflix.season1.seasonInfo.episodeInfo[1].episodeName);

console.log('specific episode name'; netflix.season1.seasonInfo.episodeInfo[3]);
console.log('specific episode name'; netflix.season1.seasonInfo.episodeInfo[3].episodeName);

console.log('episode number: ${netflix.season1.seasonInfo.episodeInfo[4].episode})
episode name: ${netflix.season1.seasonInfo.episodeInfo[4].episodeName}');

/*
   JSON stands for Javascript Object Notation
   JSON  sytax is derived from Javascript Object syntax, but JSON data is in text only format
   JSON exists as a string, and needs to be converted to a nativie Javascript object if we want to access the data
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }

    console.log(object.keys(spaceJam.toonSquad));

    console.log(object.keys(spaceJam.toonSquad.duck));//indices of duck name
    
    console.log(object.keys(spaceJam.toonSquad).toString());

    console.log(object.value(spaceJam.nbaPlayers));

    /*
        object bracket notation
            object bracket notation, just like dot notation, allows us to find a value in an object
            object bracket notation also allows us to set the key of an object
            also handy if we want to store keys of an object as a variable

            o b n       works because all keys inside of an object are strings, even tho theyre noot wrapped in single or double quotes

    */

    let garden = {
        vegetable: 'zuchini',
        flower: 'sun flower',
        fruit: 'grape',
        water: true,
        sun: true,
        size: 10
    }

    let test = Object.keys(garden); //object.keys returns an array of all keys in an object

    console.log(test);
    console.log(typeof test[0]);

    let zuchini = garden['vegetable'];
     console.log(zuchini);

     let baking = {};

     baking['zuchini'] = 'better make some bread';
     console.log(baking);

     console.log(baking[garden['vegetable']])

     let testObj = {
         "spaces here" true,
         noSpaces: true

         console.log(testObj.noSpace);
         console.log(testObj["spaces here"])
     }




    



