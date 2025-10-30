import React from "react";
import styled from "styled-components";

import QuizComponent from "../components/QuizComponent";
import FanArtWall from "../components/FanArtWall";
import PizzaBuilder from "../components/PizzaBuilder";
import DonnieLab from "../components/DonnieLab";
import TMNTSoundboard from "../components/TMNTSoundboard";
import RetroGallery from "../components/RetroGallery";

// ✅ هنا نستبدل fanzone.css بـ styled-components
const FanZoneWrapper = styled.div`
  .fan-title {
    font-size: 2.5rem;
    font-family: "Orbitron", sans-serif;
    color: #126e0c;
    text-shadow: 0 0 8px #00ffcc;
    margin-bottom: 0.5rem;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 1rem;
    background: linear-gradient(45deg, #00ffcc, #ff2bf2);
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 255, 204, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .fan-description {
    font-size: 1.1rem;
    color: #ff2bf2;
    margin-bottom: 2rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    text-transform: capitalize;
    font-weight: 300;
    letter-spacing: 1px;
    padding: 1rem;
    border: 1px solid #ff2bf2;
    box-sizing: border-box;
    background-image: linear-gradient(
      45deg,
      rgba(255, 43, 242, 0.1),
      rgba(0, 255, 204, 0.1)
    );
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(255, 43, 242, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(255, 43, 242, 0.2);
      box-shadow: 0 4px 20px rgba(255, 43, 242, 0.3);
      transform: translateY(-5px);
    }
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 10px rgba(255, 43, 242, 0.2);
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(255, 43, 242, 0.5);
    }
  }

  /* ✅ Responsive adjustments */
  @media (max-width: 768px) {
    .fan-title {
      font-size: 2rem;
      padding: 0.8rem;
    }

    .fan-description {
      font-size: 1rem;
      padding: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .fan-title {
      font-size: 1.6rem;
    }

    .fan-description {
      font-size: 0.9rem;
    }
  }
`;

export default function FanZone() {
  return (
    <FanZoneWrapper className="fan-zone">
      <main className="fan-zone-content">
        <h1 className="fan-title">🎉 Fan Zone</h1>
        <p className="fan-description">
          Ready to test your Turtle Power? Answer as many questions as you like
          — no pressure, just fun!
        </p>
        <QuizComponent />
        <FanArtWall />
        <PizzaBuilder />
        <DonnieLab />
        <TMNTSoundboard />
        <RetroGallery />
      </main>
    </FanZoneWrapper>
  );
}
