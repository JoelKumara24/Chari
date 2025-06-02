// src/components/ElephantMapAnimation.jsx
import React from 'react';
import styles from './ElephantMapAnimation.module.scss';

export default function ElephantMapAnimation() {
  return (
    <div className={styles.wrapper}>
      <svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgMap}
      >
        {/* (1) Optional faint map image */}
        <image
          href="/assets/sri-lanka-map.jpg"
          x="0"
          y="0"
          width="600"
          height="600"
          opacity="0.2"
        />
        {/* (2) Path for the elephant */}
        <path
          id="elephantRoute"
          d="
            M 100,500
            L 200,400
            L 300,450
            L 450,300
            L 500,200
            L 350,150
          "
          fill="none"
          stroke="#8AC926"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        {/* (3) Elephant icon glyph */}
        <g id="elephantIcon">
          <circle r="12" fill="#FFCA3A" stroke="#1982C4" strokeWidth="2" />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fontSize="16"
            fill="#1982C4"
            pointerEvents="none"
          >
            🐘
          </text>
        </g>
        {/* (4) Animate that icon along the path */}
        <use href="#elephantIcon">
          <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
            <mpath href="#elephantRoute" />
          </animateMotion>
        </use>
      </svg>
    </div>
  );
}
