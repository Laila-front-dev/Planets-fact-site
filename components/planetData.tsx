import mercury from "@/public/planets/planet-mercury.jpg";
import venus from "@/public/planets/planet-venus.png";
import earth from "@/public/planets/planet-earth.jpg";
import mars from "@/public/planets/planet-mars.jpg";
import jupiter from "@/public/planets/planet-jupiter.jpg";
import saturn from "@/public/planets/planet-saturn.png";
import uranus from "@/public/planets/planet-uranus.png";
import neptune from "@/public/planets/planet-neptune.jpg";

const random = (a: number, b: number): number => a + Math.random() * b;
const randomInt = (a: number, b: number): number => Math.floor(random(a, b));
const randomColor = (): string =>
  `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;

const shuffle = <T,>(array: T[]): T[] => {
  const temp = array.slice();
  for (let i = temp.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [temp[i], temp[j]] = [temp[j], temp[i]];
  }
  return temp;
};

const textures: string[] = shuffle([
  mercury.src,
  venus.src,
  earth.src,
  mars.src,
  jupiter.src,
  saturn.src,
  uranus.src,
  neptune.src,
]);

interface Planet {
  id: number;
  color: string;
  xRadius: number;
  zRadius: number;
  size: number;
  speed: number;
  offset: number;
  rotationSpeed: number;
  textureMap: string;
}

const planetData: Planet[] = [];
const totalPlanets = 8;

for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    color: randomColor(),
    xRadius: (index + 1.5) * 4,
    zRadius: (index + 1.5) * 2,
    size: random(0.5, 1),
    speed: random(0.05, 0.06),
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.008, 0.004),
    textureMap: textures[index],
  });
}

export default planetData;
