import { readFile } from "fs/promises";
import { join } from "path";

export type OgAssets = {
  photoSrc: string;
};

export async function getOgAssets(): Promise<OgAssets> {
  const photo = await readFile(join(process.cwd(), "public/work.png"));
  return {
    photoSrc: `data:image/png;base64,${photo.toString("base64")}`,
  };
}

export const OG_SIZE = { width: 1200, height: 630 };
export const TECH_STACK = ["React", "Vite", "TypeScript", "TanStack", "Tailwind"];
