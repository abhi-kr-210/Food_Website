"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Fry = {
  id: number;
  image: string;
  zone: {
    top: [number, number];
    left: [number, number];
    class: string;
  };
  top: number;
  left: number;
  duration: number;
  delay: number;
  scale: number;
  rotate: number;
};

const FloatingFries = () => {
  const friesImages = ["/images/fry1.png", "/images/fry2.png", "/images/fry3.png"];
  const cornerZones = [
    { top: [0, 15] as [number, number], left: [0, 15] as [number, number], class: "fry-top" },
    { top: [0, 15] as [number, number], left: [85, 100] as [number, number], class: "fry-top" },
    { top: [85, 100] as [number, number], left: [0, 15] as [number, number], class: "fry-bottom" },
    { top: [85, 100] as [number, number], left: [85, 100] as [number, number], class: "fry-bottom" },
  ];

  const [fries, setFries] = useState<Fry[]>([]);

  useEffect(() => {
    const friesArray: Fry[] = Array.from({ length: 12 }).map((_, i) => {
      const randomImage = friesImages[Math.floor(Math.random() * friesImages.length)];
      const zone = cornerZones[Math.floor(Math.random() * cornerZones.length)];
      const top = Math.random() * (zone.top[1] - zone.top[0]) + zone.top[0];
      const left = Math.random() * (zone.left[1] - zone.left[0]) + zone.left[0];
      return {
        id: i,
        image: randomImage,
        zone,
        top,
        left,
        duration: 5 + Math.random() * 4,
        delay: Math.random() * 5,
        scale: 0.6 + Math.random() * 0.6,
        rotate: Math.random() * 360,
      };
    });
    setFries(friesArray);
  }, []);

  return (
    <div className="absolute inset-0 z-[100] overflow-hidden pointer-events-none mt-6">
      {fries.map((fry) => (
        <div
          key={fry.id}
          className={`absolute fry ${fry.zone.class}`}
          style={{
            top: `${fry.top}vh`,
            left: `${fry.left}vw`,
            animationDuration: `${fry.duration}s`,
            animationDelay: `${fry.delay}s`,
            transform: `scale(${fry.scale}) rotate(${fry.rotate}deg)`,
          }}
        >
          <Image src={fry.image} alt="Fries" width={60} height={60} />
        </div>
      ))}
    </div>
  );
};

export default FloatingFries;
