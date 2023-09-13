"use client";

import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton uploadPreset="ajwlocmx" />
      <CldImage
        width="400"
        height="300"
        src="r3vfeslrpahwxxqtrt6e"
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
