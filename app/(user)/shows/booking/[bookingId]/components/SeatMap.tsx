"use client";

import Image from "next/image";
import React, { useState, useRef, MouseEvent } from "react";

const SeatMap = () => {
  // Ensure containerRef is correctly typed for a div element
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Draggable viewport frame position
  const [framePosition, setFramePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Constants
  const frameSize = 100; // Size of the draggable frame on the minimap
  const zoomScale = 2; // Zoom scale applied to the right-side view

  // Handle mouse press on the frame
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);

    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Handle dragging motion
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    // Calculate new position within the minimap container
    let newX = e.clientX - containerRect.left - dragOffset.x;
    let newY = e.clientY - containerRect.top - dragOffset.y;

    // Ensure the frame stays within bounds
    newX = Math.max(0, Math.min(newX, containerRect.width - frameSize));
    newY = Math.max(0, Math.min(newY, containerRect.height - frameSize));

    setFramePosition({ x: newX, y: newY });
  };

  // Stop dragging when mouse is released
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="grid grid-cols-3 h-[600px]" onMouseUp={handleMouseUp}>
      {/* Left Column: Minimap */}
      <div className="col-span-1">
        <div
          ref={containerRef}
          className="relative border border-gray-400 h-[600px] select-none"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
        >
          {/* Minimap image */}
          <Image
            src="/show1.jpg"
            alt="Minimap"
            fill
            className="object-cover"
          />
          {/* Draggable selection frame */}
          <div
            className="absolute border-2 border-blue-500 cursor-move bg-white/20"
            style={{
              width: `${frameSize}px`,
              height: `${frameSize}px`,
              left: `${framePosition.x}px`,
              top: `${framePosition.y}px`,
            }}
            onMouseDown={handleMouseDown}
          />
        </div>
      </div>

      {/* Right Column: Zoomed View */}
      <div className="col-span-2 relative border border-gray-400 h-[600px] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            transform: `scale(${zoomScale}) translate(-${framePosition.x}px, -${framePosition.y}px)`,
            transformOrigin: "top left",
          }}
        >
          <Image
            src="/show1.jpg"
            alt="Zoomed View"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SeatMap;
