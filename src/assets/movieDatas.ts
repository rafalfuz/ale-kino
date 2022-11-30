export interface Movie {
  posterImg: string,
  isPremiere: boolean,
  title: string,
  type: string,
  time: number,
  age: string,
  description: string,
  seassionHours: string[],
  rate: number
}

export const movieDatas = [
  {
    posterImg: "https://fwcdn.pl/fpo/55/10/10015510/8029347.6.jpg",
    isPremiere: true,
    title: "Apokawixa",
    type: "Horror",
    time: 120,
    age: "PG-13",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure asperiores aspernatur ipsam inventore aliquid? Perspiciatis laudantium accusantium ea recusandae at hic, molestiae, dolor sint dicta vero quia architecto modi.",
    seassionHours: ["12:00", "15:30", "21:30"],
    rate: 8,
  },
  {
    posterImg: "https://fwcdn.pl/fpo/66/50/836650/7934792.6.jpg",
    isPremiere: true,
    title: "Co w duszy gra",
    type: ["Animowany", "Obyczajowy"],
    time: 120,
    age: "dla wszystkich",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure asperiores aspernatur ipsam inventore aliquid? Perspiciatis laudantium accusantium ea recusandae at hic, molestiae, dolor sint dicta vero quia architecto modi.",
    seassionHours: ["13:00", "15:30", "19:00"],
    rate: 10,
  },
];
