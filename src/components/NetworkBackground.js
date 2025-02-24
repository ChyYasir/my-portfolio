"use client";
import { useEffect, useRef, useState } from "react";

const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Only run after client-side mount
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Skip until mounted on client

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let nodes = [];
    let animationFrameId;

    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 128, 0.5)";
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(
        window.innerHeight,
        document.documentElement.scrollHeight
      );
      nodes = [];
      const numberOfNodes = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numberOfNodes; i++) {
        nodes.push(
          new Node(Math.random() * canvas.width, Math.random() * canvas.height)
        );
      }
    };

    const drawConnections = () => {
      nodes.forEach((nodeA) => {
        nodes.forEach((nodeB) => {
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(0, 255, 128, ${
              0.2 * (1 - distance / 100)
            })`;
            ctx.stroke();
          }
        });
      });
    };

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((node) => node.update());
      drawConnections();
      nodes.forEach((node) => node.draw());
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-[#0a0a0a] -z-10" />
    ); // Placeholder during SSR
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0a0a0a]"
      style={{ minHeight: "100vh" }}
    />
  );
};

export default NetworkBackground;
