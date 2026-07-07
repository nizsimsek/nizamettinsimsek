import { ImageResponse } from "next/og";
import { getOgAssets, OG_SIZE } from "@/lib/og-assets";
import { renderGlowOg } from "@/lib/og-glow";

export const alt = "Nizamettin Şimşek - Co-founder & Frontend Developer";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const { photoSrc } = await getOgAssets();

  return new ImageResponse(renderGlowOg(photoSrc), { ...OG_SIZE });
}
