import {
  novel,
  game,
  football,
  img12,
  img11,
  img10,
  img9,
  img8,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    to: "#hero",
  },
  {
    id: "hobbies",
    title: "Hobbies",
    to: "#hobbies",
  },
  {
    id: "gallery",
    title: "Gallery",
    to: "#gallery",
  },
  {
    id: "contact",
    title: "Contact Me",
    to: "#contact",
  },
];

export const hobbies = [
  {
    id: "hobby1",
    image: game,
    title: `Playing Video Games`,
    p: `I am an avid gamer, passionate about the captivating world of video games. With a controller in hand or a keyboard at my fingertips, I embark on thrilling virtual adventures, exploring vast landscapes, battling formidable foes, and unraveling intricate narratives. Some of my favorite games include but are not limited to: The last of Us, The witcher 3 Wild hunt, Resident Evil 4, Sekiro, Elden Ring and Bloodborne.`,
  },
  {
    id: "hobby2",
    image: football,
    title: `Watching Sports`,
    p: `I am a passionate sport enthusiast, most especially football, finding great joy in the artistry and excitement that unfolds on the pitch. With eager eyes fixed on the players' every move, I immerse myself in the beautiful game, witnessing the graceful dribbles, the thunderous strikes, and the strategic teamwork that defines this sport. My favorite team is Manchester United and my favorite players on the team is Marcus Rashford.`,
  },
  {
    id: "hobby3",
    image: novel,
    title: `Reading Novels`,
    p: `I am an avid reader with a deep love for the enchanting realm of novels, particularly within the fantasy genre. As I turn the pages, I find myself transported to fantastical worlds filled with magic, mythical creatures, and epic quests. Imagination takes flight as I accompany brave heroes and heroines on their extraordinary journeys, battling dark forces and unraveling captivating mysteries along the way. Favorite books include The wheel of time series, A song of ice and fire series etc`,
  },
];

export const images = [
  {
    src: img1,
    original: img1,
    width: 450,
    height: 174,
    tags: [
      { value: "Game", title: "Game" },
      { value: "The Witcher 3", title: "The Witcher 3" },
    ],
    caption:
      "Geralt of rivia, Triss Merrigold, Yeneffer and Ciri on the cover of The witcher 3 Wildhunt",
  },
  {
    src: img2,
    original: img2,
    width: 450,
    height: 174,
    tags: [
      { value: "Game", title: "Game" },
      { value: "Elden Ring", title: "Elden Ring" },
    ],
    caption:
      "One of the various enemy types encountered in the lands between in Elden Ring",
  },
  {
    src: img3,
    original: img3,
    width: 450,
    height: 174,
    tags: [
      { value: "Game", title: "Game" },
      { value: "Sekiro Shadows Die Twice", title: "Sekiro Shadows Die Twice" },
    ],
    caption: "Sekiro battling the immortal Guardian ape boss",
  },
  {
    src: img4,
    original: img4,
    width: 450,
    height: 174,
    tags: [
      { value: "Game", title: "Game" },
      { value: "Resident Evil 4", title: "Resident Evil 4" },
    ],
    caption:
      "The main protagonist Leon S. Kennedy protecting the president's daughter Ashley Graham",
  },
  {
    src: img5,
    original: img5,
    width: 450,
    height: 174,
    tags: [
      { value: "Football", title: "Football" },
      { value: "Manchester United", title: "Manchester United" },
    ],
    caption:
      "Bruno Fernandes of Manchester United Football Club sending instructions to teammates",
  },
  {
    src: img6,
    original: img6,
    width: 450,
    height: 174,
    tags: [
      { value: "Football", title: "Football" },
      { value: "Manchester United", title: "Manchester United" },
    ],
    caption: "Manchester United players celebrating a goal together",
  },
  {
    src: img7,
    original: img7,
    width: 450,
    height: 174,
    tags: [
      { value: "Football", title: "Football" },
      { value: "Manchester United", title: "Manchester United" },
    ],
    caption: "Team picture of united players before a match",
  },
  {
    src: img8,
    original: img8,
    width: 450,
    height: 174,
    tags: [
      { value: "Football", title: "Football" },
      { value: "Manchester United", title: "Manchester United" },
    ],
    caption:
      "Cristiano Ronaldo celbrating a goal for manchester united with his trademark SUIII celabration",
  },
  {
    src: img9,
    original: img9,
    width: 450,
    height: 174,
    tags: [
      { value: "Novel", title: "Novel" },
      { value: "The wheel of time", title: "The wheel of time" },
    ],
    caption:
      "Lan Mandragoran from the wheel of time series. A total badass of a character",
  },
  {
    src: img10,
    original: img10,
    width: 450,
    height: 174,
    tags: [
      { value: "Novel", title: "Novel" },
      { value: "The wheel of time", title: "The wheel of time" },
    ],
    caption: "The dragon reborn Rand Althor from the wheel of time. Destined to bsttle the dark one in the Tarmon Gaiden",
  },
  {
    src: img11,
    original: img11,
    width: 450,
    height: 174,
    tags: [
      { value: "Novel", title: "Novel" },
      { value: "A song of ice and fire", title: "A song of ice and fire" },
    ],
    caption:
      "Jon Snow with his direwolf Ghost from a Song of Fire and Ice. A man that knows nothing",
  },
  {
    src: img12,
    original: img12,
    width: 450,
    height: 174,
    tags: [
      { value: "Novel", title: "Novel" },
      {
        value: "The King Killer Chronical",
        title: "The King Killer Chronical",
      },
    ],
    caption:
      "Kvothe from the Kings Killer Chronical series. Was a little to clever for his own good",
  },
];
