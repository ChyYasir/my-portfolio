"use client";
import React from "react";

const MatrixRain = ({ children }) => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-green-500 text-xs font-mono"
          style={{
            left: `${i * 10}%`,
            animation: `matrixRain ${1 + Math.random() * 2}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {Array.from({ length: 20 }).map((_, j) => (
            <div key={j}>{"01"[Math.floor(Math.random() * 2)]}</div>
          ))}
        </div>
      ))}
    </div>
    {children}
  </div>
);

export default MatrixRain;
