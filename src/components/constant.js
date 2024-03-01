export const BUTTON_ARRAY = [
  { name: "All", id: 1 },
  { name: "Mixes", id: 2 },
  { name: "Music", id: 3 },
  { name: "Live", id: 4 },
  { name: "History", id: 5 },
  { name: "Movies", id: 6 },
  { name: "Seminar", id: 7 },
  { name: "Cricket", id: 8 },
  /* { name: "Game Show", id: 9 }, */
  { name: "Sales", id: 10 },
  { name: "Watched", id: 11 },
  { name: "Python", id: 12 },
];

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]

const YOUTUBE_API_KEY = "AIzaSyA8mG7TxhOflGeT7L89yPhEWziz9B6U2-8";

/* &maxResults=50 */

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

// https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=faded

// http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query

export const YOUTUBE_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const suscribe =
  "https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png";

export const history =
  "https://cdn-icons-png.flaticon.com/512/2961/2961948.png";

export const trending =
  "https://cdn1.iconfinder.com/data/icons/youtube-23/31/Subtract-14-512.png";

export const watch_later =
  "https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp";

export const profile_icon =
  "https://banner2.cleanpng.com/20180516/zq/kisspng-computer-icons-google-account-icon-design-login-5afc02dab4a218.0950785215264652427399.jpg";

export const your_video =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQldkCs1BDpl3FkGwKbQOR9WF34fC9Z3BRHQ&usqp=CAU";

export const music =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZK7r3Tt7qcMEHgYd5R9oJCJLheZPjTkLTA&usqp=CAU";

export const movie =
  "https://w7.pngwing.com/pngs/790/844/png-transparent-computer-icons-movieclips-video-clip-youtube-film-youtube-text-rectangle-logo.png";

export const shopping =
  "https://www.dlf.pt/dfpng/middlepng/216-2164468_playstore-icon-free-download-white-icon-youtube-png.png";

export const live =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqGDRHDnP9W5Dh89bmPjMrl0Xd0IK-ra0_Q&usqp=CAU";

export const game =
  "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_119.png?RaONZ_.W1uIRpMH0M6lmTH77QmF1MomC&itok=VDMepP4c";

export const news =
  "https://c8.alamy.com/comp/2B3HCP4/youtube-icon-2B3HCP4.jpg";

export const report =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3W4fwjzJRWrNMbYXS0P6eI9OzOz02ZPz_1GCyAVRdULh84h1CSCmcXfasrLj_PZ8e6o&usqp=CAU";

export const help =
  "https://w7.pngwing.com/pngs/317/872/png-transparent-youtube-play-button-computer-icons-help-text-trademark-sign-thumbnail.png";

export const podcast =
  "https://img.freepik.com/premium-vector/podcast-microphone-flat-design-concept-podcast-banner-vector-illustration_476325-515.jpg";

export const studio =
  "https://static.vecteezy.com/system/resources/thumbnails/017/396/826/small_2x/youtube-studio-icons-free-png.png";

export const feedback = "https://static.thenounproject.com/png/4808951-200.png";

export const premium =
  "https://cdn-icons-png.flaticon.com/256/1384/1384060.png";

export const music_icon =
  "https://cdn.iconscout.com/icon/free/png-256/free-youtube-music-4062799-3357685.png";

export const kid =
  "https://i.pinimg.com/originals/41/e8/20/41e82046cd52130a111049ea560cfbda.png";

export const sports =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAADq6upNTU3Pz8/8/Pz5+fn29vb6+vqlpaWwsLDb29vj4+Pf39/p6em0tLSGhoZgYGDBwcF9fX3Hx8fw8PC6uro/Pz86OjoYGBgyMjIeHh5zc3OYmJjU1NRYWFidnZ2oqKhISEgmJiaQkJBSUlJsbGwkJCQNDQ1lZWWBgYE0NDQsLCxshuaOAAAJ/0lEQVR4nO1d6XqqQAwVKm7gUhFQ6y5abX3/57toF0UmmejAzKTfPX+v9Mu5QCbLSajVbIDnmbagSrhxvJ6Fgzium7akEizap3fnG4fpvN40bVDJqA+cO7x0TNtUJhrHt3uCGWa+abtKQ/9dwO+MtmnLSsIQ4Jdh/ifexjVM0HES09aVgM4BY+jw9zfRCSXI/12MlhKCjsPco7alBJ2ZaRvVgL+EX2Adw8UEgs6sYdrM5xG9UBhOu6btfB4LKJjJY2jazudB8DNnvJi282l4GxrDg2lDn4a3ozHk6009kqNxGL+IPSJBZ2Ta0mfR/c+QPcPmmMiQ7XtY++9Lv8H3PKzNaQz5xjS1+oTEsG/azufh0h5Ttq40exFnFIK7yLSdCnApDFemrVRCoV1RxNG0jWqI5AnUwrSNiujLCM5NW6gMSZ6/6Zk2UBmNI0Yw+QutGXcPE1zyv4NnNMEHNXFN21YW+kKPmvDvO13RWxcj1I/AtFXlotE53uTDh92AectJiF6cvl4wiId/VTfkNS/4q/T+Bv7G8VaE57pBfRF+jrdOMh6Pp/PFosc558uh2XTXq8HL7r5umBxT5qd5y3N7vXa4376J9FwXvIdsD7xgOGzPQjjYvCJlduh5tdaoM18uxw5Ff3DBiU3g4vvD9np7IDO7wdz2HL7nd+cfs9P0CW4/99HSALsZub6/SpLnmV3xGVuW5zYb/fb6uKM2cCl47VjB0fOakZ8OliqPJIhN13A02huOOmEo0xEqwaDouTFqvyZP+cnHcArNcFyklVO7YqA/NPcGlT6ZBSS6XU6EFjMrwXu/pZFgQ67grQAzjf1Cna/gDSZHXS6nS1WDlI5DW0/2aI5h5nJWOqoAJhlmUc6wercaGGXoOMcnXY6/SlPipSOzDLMI4IlHtf56Cb/2NHU40vjSg7f0QRl771eFtCSF8q0hTdNTId4f0gsNb3I6Yn/cbR/xLHeye5FAleMmpg5cLHIh2Jh6WRQs6gh8VwKyEhhGSArIvXibu2qiKzYiSGYIHKU1OW9x7zTeNIk2g88yGDrJGj8do3nBYySaqgarUghmGCNK4UZX0CfXpMRxS4waQqi06r4Kfj3RlE3XyyOYnRwz4ekYC729puFTr+S63HZeiHLqYrX4TFP/blEuwQybuxJ5Cvwf6mrefZTOMAvHFle3KlbiZM+zrrPQr6J4nD2B3zcoAIsQ2uYXqiqDfKZZROb1IT990DeCUhHBDJN2HSyT6QpmasRB5idxANvnGrX9BIlzBUg0zhB1TBB81ajxaIliqaqx1ynUCQwQPGpte5AEJ6XiIEmxSkYXdnYUCFdHSRDr5EeYpEAxbQaPvsYbzYOYgVrAds59GutHpB4vuheErJUInr6S3eCuuIQg1d4+VruF6c+fiVY7koJA//CQWm7/dntDhnKnvDEw7a2WGOaXmHn1AV56PxjQ/9XVxCnFklOKOJ3QhOB4rUTwVWByEEPZ0od+erVaU4kgtIZusRS4r6mZdQTEQXsAU+i1avrp/d4ljdluzhK1flOK/OkgzZUuiH3Q0jFU8jPvkr/eD39C1l3HkKCRNmYP4igz2ws6gwwfHWNDG4qnve3C7wxqt3Bv/4o9xcRQc5L3DBTLwPbP5vXU9PsMNgyolYE5LDJRKwMPTJsvh1oZeMJgk6daDXFv2nw56uTCihAMxvXUbuHSiuEgFC0lgs7atP1yrP/6LaypjS+Eps2XQ1HiZdp8OZpqIzYMbiF5IakQJwaJoZosnMECfV+tDGzpxPMt1NTAG9PmyxFRV8qKwSAxVMsqxgw2u6gdFQxuoVoNccsgMZTFMy+op+Www1MinTjiJTgGm3Ql4pKkidaJ9/bXEGWHYaeGFRk1Sl6fhqQnmtY87J83DGqIeJX0pYX/YGXafALQt2xblxRwGLyFPtqNWUv0wka0Bg8C3QY8yX4wwhQxDPwM+mmqyXnOdc38FqJzojNPUt/g8PkK7CGdnn8QIafhybT1FGBDhpeeLjbhxeEbjlgFKrycBMhhkjBIDDEJ1OfF/iYyDMzhFkZIWvGV2CJSxQODrKK2gDtqy69fILkjgzIwljh9q38aSCGVxfJLeB3YdwkUiemWOvdePQvYk06/f4E8pAz0QdhD+mM+nFdsWGwTBl+y9Ccpgm8hg5gb0UBtfyR4yMfTjVpOBSiX/e20wA8pA31QDQ5oflWUPTD55fGlX0jTfZWYw/u0ZgyqF1nIBlh/7UPAZwULPwN1nMa/whH4m7hjk3bTAVSCrz15+NtqHGLuGtSu2F+1P2BqdWJQBs7QFAalkytBeLqEgcTrDPFpeDP1Uoei7jGLrAKoQR0jyQ/OYCAlPaMlmqS8nQmB5QsM9EFnCAncpu1gkW3H4rTPGArEiDlVxRogeOBQBj4jELjSXFILFdk4TB1c4OPPaK0HeVIONcQLBAxz+QKU//P5EHWRYX6hKtTdx8ZE7UL3/sDPF166QBnujclpn8G7Pw/z0TQkdZvZP2P4i7thw7sKNlC/mHA5Ki7I5bfLu3sD3EImieEPVte7GN7FKdBDykANnMPv/tdC5QzoGu4YDI7k4XZnySaJg/tIE6qkMkkMCYBKOHyOCgk8wJMymDogAhLzsWjGkAC0K5am7SoPQE+KRceQhJ64u693s2GlABInbqc9DMiTmrarPABbBVmIS2gQq57faad96+sD3RWbqAhxP2NFuLK16IdfH1lfxRZr3iJhtZ8wdTAabG4KA+NZbGtdVexJX2WXdQeF/5mpHd8oLUBcgpKd9m2he1ra2Gj0hSWoBC/PBJAKddK3r64jfkhX6DU+rJQ+fFj3pAqXe+KJoYuObNwXSExDPOSEVvJdyXopywJ28UOKHm6yDWFvdrkboctAm75rCcHMo9qUOfeE0wnYTWgQ9mfZNAstLEGhiSFp0t0ef9oSPqQr5ArasgJ7GlbCmPQNu0LQhhTAnnlvoRgRze1p+7PsGc0QlqDQ05748W9bKiCBaJgSf4doBK0ZVBRl93jHkLpwwhbRtCgmxSv51AVaEzvOC2HvHm/6olPEt7CDoegh/cRNY8ZQVIKSuHlmDAWedCpZaUldUr+1gqHouJeGW0SGdvhSEUNp1ZPI0I7zUHBWyJu+xA3gD32iuzII8gr5YlnaCvDEDgFAkeFSLiWlfZDVDmW4YGqbkBGIpMZF2JHk14ufx6ZcRsnxN1acFQKGNDUw4XsKlmSHBYZEKal89Wloxy0sMDxQPbwsrtna4UiLDHfkngpO8WSNJPWeIX0yBt+HtqrM4kfh5wcsHnLwcIph1bdncmWo9LGdEJCyP7FqnPbWys9HW2Kjo6DUOrVMzHgzFPvxuPvz4kKTbWXd9xJ+oujJc9lcczS4NvMnn33r+GW3YRgune0+VTi/hnF/EIbpMLbJweQQ+YGytMArv639D2/Al6X8HVEAAAAAAElFTkSuQmCC";

export const learning =
  "data:image/png;base64,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";

export const setting =
  "data:image/png;base64,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";

export const notification =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADu7u5aWlp/f3+fn5/Ly8uQkJD39/dxcXH8/Pyrq6vGxsby8vLa2tqCgoJfX18WFha0tLTc3Nw3Nzfk5OSZmZl5eXm6urpra2uLi4vS0tJVVVVGRkbIyMgRERFKSkopKSk9PT0hISEuLi6Qs80iAAAFF0lEQVR4nO2d6XbiMAyFa5YCodCyBNpCh+ny/s84w/Rwpm0kk0Sy5OTc7z+yLvEmObFubgAAAAAAAAAAAAAAACA7isN8N9nNl4W3I4lYzsKF2dLbmQQshuErw4W3Q9rchZ/cebuky7oiMIS1t1OaVJ9gz57ighQYQn/G4pBROPR2TIslIzCEviwaM1bhzNs1HQpWYAj92N0cIgr70U3nEYVzb+dU2EUU7rydU2ESUTjxdk4FKOw+UNh9+q/wOaLw2ds5McXdfhURGMJq/9jhnVvx+BBVd+GhoyLL+1ryPhmV3u425paLejmOt94uN+Lwu6G+My/d0TioN/yqDDvSV2Pr3zW6sD4uXwUCQ3g/eAu4RiwYrEfeIeP0KBb4d1adesvgKeP7l7qcsp1wblX0ncl03XhUExjCo7cYCup4qT0ZHkxpPsEsJf5SFpjd2dtGXWBm+XDugPA/p+NkvSwX50CwWJTL9eR4uvqbnI4X3+Kuvow31Ri32Ixf4j97c1DCEI91J/wCXu6iT3JkqCEKfUr/yeranLiO7YMymW2mERfrnC3FzqbyGIpPrH+zenvoKX9I/JTY91rwK2H9Psb3818JPa8LN462gwZGBlvGyimZ37UZM649NLTD5XbGSbxuADfN7Btb2jOWvONh5lCiuUBWovPRBrNdazcFMpOy74pBZw63La3R041rhpF5Gajtv870CM9zG3o70j7LQmd6PF+6IbvVvcAguYdv2+kVIF86fJd0quKdMukXC5P/uCweIPdvkl4hg/LmKLRJZs1VvG0BOS9shEbJjI9XhnhE+NJ0O1qF2qB6BftUVCGfFKjpa6XgbQuo/vSiYJfKT0n7fjuo5V4jU00dD/gs+tSA0Qh1qIBMPrzbQAxDnXfvibSNy0Asib9aJ/tHrfoeh6bUYZNOPE51U48DRSI0lO5nLhD7Go8gkXitSytrRGS3PD6R+qi6ofUuDPENyoeS6QZQg0UrLUbF+vYpN2IqfVUz/lo1bj+ZEoGF3iEDkXWzDy+IxULvfS1inrZfLoj5Tu/1CWJrap/dJ5Ldeh2JGAL2qW8iB68X4hCBWZtzAhnE9rjJcVqcQdW4/Qe1xHSnt2QRi639aTARHSparxq3jxCJbami9apx+40pFMqAQgugUAYUWgCFMqDQAiiUAYUWQKEMKLQACmVAoQVQKAMKLYBCGVBoARTKgEILoFAGFFoAhTKg0AIolAGFFkChDCi0AAplQKEFUCgDCi3ov8Lev19KfcetaJ6wbvzBBfmhuqJ9yrypRPqGDsUGSPuGEpnLZhVboBswk8jdpqvYBNOCkUT2umDFNrgmTCTy9yErNsK2YSAxcuGzYit8I8klxm60Vmwm0kpiidEru+9HWkQvRE0qUe9OcgkJJeYhMKHEXAQmk5iPwEQScxKYRGJeAhNIzE2gusT8BCpLjJWD9UOz6A53WbAvmpcQQKEPUAiFUOgPFDZBXi8uBZo16KaDHPG+cR8AAAAAnwx24+vs9O55s4csD1Ehq0KHDaHui66SbXHcGjB1aH7gWUdGDFds7CuORVYUYApefcO5ZJWQOqnk7Kupx7leTzWD6ngiYgUqP/Gs5qTCtXLrTuVHFImVYT2TSTFVCXyR0TP2l+cmILYmdnstvDAlK439470n6bIp9xS3PRF4w43FXozBC3fVRWPVg1n0G/Pvu5tT5xd6gsPzZTxunzu+F+Upys1yU3Y6HgQAAAAAAAAAAIATfwDJ3z3tPzB3hQAAAABJRU5ErkJggg==";

export const channel =
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-channel-logo-tv-icon-design-template-9ba287bdd80d6a37b085d94906553731_screen.jpg?ts=1660369011";

export const home =
  "https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png";

export const shorts =
  "https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png";

export const nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
export function GenerateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function newMessage() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

export const OFFSET_LIVE_CHAT = 20;
