//Import Images
import GirlWithGlasses from "../img/Designs/vectorGirl.png";
import Portrait from "../img/Designs/portrait.png";
import Limbo from "../img/Designs/limboBooya.png";
import Eminem from "../img/Designs/eminem.png";


export const DesignState = () => {
  return [
    {
        title: "Someone Somewhere",
        mainImg: GirlWithGlasses,
        description: "A vector of a random girl I met. Drew this to learn about detailing in vectors.",
        behance: "https://www.behance.net/gallery/107181275/Just-a-random-Girl",
    },
    {
        title: "Portrait",
        mainImg: Portrait,
        description: "A minimalistic portrait based on myself.",
        behance: "https://www.behance.net/gallery/106729525/Sinner",
    },
    {
        title: "Limbo",
        mainImg: Limbo,
        description: "A limbo themed design using Photoshop.",
        behance: "https://www.behance.net/gallery/106835273/Limbo",
    },
    {
      title: "Biggest fan, Stan.",
      mainImg: Eminem,
      description: "Posturized vector artwork using Illustrator.",
      behance: "https://www.behance.net/gallery/106966899/EMINEM",
  },
  ];
};