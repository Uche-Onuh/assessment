import { novel, game, football } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    to: "/",
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
    id: "contacts",
    title: "Contacts",
    to: "#contacts",
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
    title: `Watching Football`,
    p: `I am a passionate soccer enthusiast, finding great joy in the artistry and excitement that unfolds on the pitch. With eager eyes fixed on the players' every move, I immerse myself in the beautiful game, witnessing the graceful dribbles, the thunderous strikes, and the strategic teamwork that defines this sport. My favorite team is Manchester United and my favorite players on the team is Marcus Rashford.`,
  },
  {
    id: "hobby3",
    image: novel,
    title: `Reading Novels`,
    p: `"I am an avid reader with a deep love for the enchanting realm of novels, particularly within the fantasy genre. As I turn the pages, I find myself transported to fantastical worlds filled with magic, mythical creatures, and epic quests. Imagination takes flight as I accompany brave heroes and heroines on their extraordinary journeys, battling dark forces and unraveling captivating mysteries along the way.`,
  },
];
