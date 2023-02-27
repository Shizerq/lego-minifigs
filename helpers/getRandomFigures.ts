import { MiniFigure } from "../types/miniFigs";

export function getRandomFigures(
  figures: MiniFigure[],
  count: number
): MiniFigure[] {
  return figures.sort(() => 0.5 - Math.random()).slice(0, count);
}
