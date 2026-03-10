"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const totalFrames = 89;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload all frames to memory
    const loadedImages: HTMLImageElement[] = [];
    const preloadImages = () => {
      for (let i = 0; i <= totalFrames; i++) {
        const img = new Image();
        // Fallback or actual image path
        const frameIndex = i.toString().padStart(2, "0");
        const url = `/sequence/frame_${frameIndex}_delay-0.067s.webp`;
        img.src = url;
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, []);

  const drawImage = (img: HTMLImageElement | undefined) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;

      // Object-fit cover logic
      const scale = Math.max(innerWidth / img.naturalWidth, innerHeight / img.naturalHeight);
      const x = innerWidth / 2 - (img.naturalWidth / 2) * scale;
      const y = innerHeight / 2 - (img.naturalHeight / 2) * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
    };

    if (img.complete) {
      render();
    } else {
      img.onload = render;
    }
  };

  useEffect(() => {
    if (images.length === 0) return;
    
    // Draw initial frame
    drawImage(images[0]);
    
    // Fallback if images are missing (e.g. 404), draw placeholder
    const canvas = canvasRef.current;
    if (canvas) {
        images[0].onerror = () => {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                const drawPlaceholder = () => {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    ctx.fillStyle = "#0B0B0B";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // Add some noise or basic shapes for cinematic feel
                    ctx.fillStyle = "#333";
                    ctx.beginPath();
                    ctx.arc(canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.4, 0, Math.PI * 2);
                    ctx.filter = 'blur(100px)';
                    ctx.fill();
                    ctx.filter = 'none';

                    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
                    ctx.font = "24px Inter";
                    ctx.textAlign = "center";
                    ctx.fillText("Insert frame sequence here -> public/sequence/", canvas.width / 2, canvas.height / 2 + 50);
                }
                drawPlaceholder();
                window.addEventListener('resize', drawPlaceholder);
            }
        };
    }

    return scrollYProgress.on("change", (latest) => {
      const frameIndex = Math.floor(latest * totalFrames);
      if (images[frameIndex]) {
        drawImage(images[frameIndex]);
      }
    });
  }, [images, scrollYProgress]);

  return (
    <div ref={containerRef} className="canvas-container bg-primary relative w-full">
      <div className="sticky-canvas z-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
      
      {/* Scroll instruction for mobile/desktop */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{
            opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0])
        }}
      >
        <span className="text-sm font-medium tracking-widest uppercase text-white/50">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
                className="w-full h-1/2 bg-accent absolute top-0"
                animate={{ top: ["-50%", "150%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
        </div>
      </motion.div>
    </div>
  );
}
