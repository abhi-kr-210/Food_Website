import React from "react";
import Image from "next/image";

const FloatingFries = () => {
  const friesImages = [
    "/images/fry1.png",
    "/images/fry2.png",
    "/images/fry3.png",
  ];

  const friesArray = Array.from({ length: 12 }); // More fries for density

  const cornerZones = [
    { top: [0, 15], left: [0, 15], class: "fry-top" },      // Top-left
    { top: [0, 15], left: [85, 100], class: "fry-top" },    // Top-right
    { top: [85, 100], left: [0, 15], class: "fry-bottom" }, // Bottom-left
    { top: [85, 100], left: [85, 100], class: "fry-bottom"} // Bottom-right
  ];

  return (
    <div className="absolute inset-0 z-[100] overflow-hidden pointer-events-none mt-6">
      {friesArray.map((_, i) => {
        const randomImage =
          friesImages[Math.floor(Math.random() * friesImages.length)];

        const zone = cornerZones[Math.floor(Math.random() * cornerZones.length)];
        const top = Math.random() * (zone.top[1] - zone.top[0]) + zone.top[0];
        const left =
          Math.random() * (zone.left[1] - zone.left[0]) + zone.left[0];

        return (
          <div
            key={i}
            className={`absolute fry ${zone.class}`}
            style={{
              top: `${top}vh`,
              left: `${left}vw`,
              animationDuration: `${5 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.6 + Math.random() * 0.6}) rotate(${
                Math.random() * 360
              }deg)`,
            }}
          >
            <Image src={randomImage} alt="Fries" width={60} height={60} />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingFries;
