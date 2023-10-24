"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imagesUrls: string[];
}

const ProductImages = ({ name, imagesUrls }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imagesUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col">
      <div className="bg-accent h-[380px] w-full items-center flex justify-center">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[80%] max-h-[70%]"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8 px-5">
        {imagesUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`bg-accent rounded-lg flex items-center justify-center h-[100px] ${
              imageUrl === currentImage &&
              "border-2 border-solid border-primary"
            }`}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto w-auto max-w-[80%] max-h-[70%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
