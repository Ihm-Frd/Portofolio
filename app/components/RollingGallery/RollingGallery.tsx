'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform, PanInfo, ResolvedValues } from 'motion/react';

const IMGS: string[] = [
    "https://cdn.simpleicons.org/html5/E34F26",       // HTML5
    "https://cdn.simpleicons.org/laravel/FF2D20",     // Laravel
    "https://cdn.simpleicons.org/php/777BB4",         // PHP
    "https://cdn.simpleicons.org/javascript/F7DF1E",  // JavaScript
    "https://cdn.simpleicons.org/nextdotjs/fff",   // Next.js (hitam)
    "https://cdn.simpleicons.org/css/1572B6",        // CSS3
    "https://cdn.simpleicons.org/tailwindcss/06B6D4", // Tailwind CSS
    "https://cdn.simpleicons.org/bootstrap/7952B3",   // Bootstrap
    "https://cdn.simpleicons.org/mysql/4479A1",       // MySQL
    "https://cdn.simpleicons.org/filament/F15A29",    // Filament (brand orange)
    "https://cdn.simpleicons.org/cpanel/FF6C2C",      // cPanel
    "https://cdn.simpleicons.org/python/3776AB",      // Python
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  const galleryImages = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(window.innerWidth <= 640);
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cylinderWidth: number = isScreenSizeSm ? 1100 : 1800;
  const faceCount: number = galleryImages.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
  const radius: number = cylinderWidth / (2 * Math.PI);

  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(rotation, (val: number) => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity
      }
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === 'number') {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative lg:h-[150px] w-full overflow-hidden">
    <div className="flex h-full items-center justify-center px-6 lg:px-0 lg:[perspective:800px] [perspective:5000px] [transform-style:preserve-3d]">
      <motion.div
        drag="x"
        dragElastic={0}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={controls}
        onUpdate={handleUpdate}
        style={{
          transform: transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: 'preserve-3d'
        }}
        className="gap-9 flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
      >
        {galleryImages.map((url, i) => (
          <div
            key={i}
            className="group absolute flex h-fit items-center justify-center px-[12%] [backface-visibility:hidden] md:p-[6%]"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`
            }}
          >
            <img
              src={url}
              alt="gallery"
              className="pointer-events-none h-[120px] w-[300px] rounded-[15px]object-cover transition-transform duration-300 ease-out group-hover:scale-105 sm:h-[100px] sm:w-[220px]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
  );
};

export default RollingGallery;
