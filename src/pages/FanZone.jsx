import React from "react";

import QuizComponent from "../components/QuizComponent";
import FanArtWall from "../components/FanArtWall";
import PizzaBuilder from "../components/PizzaBuilder";
import DonnieLab from '../components/DonnieLab';
import TMNTSoundboard from '../components/TMNTSoundboard';
import RetroGallery from '../components/RetroGallery';

import "../styles/fanzone.css"; // تأكد من وجود الملف أو أنشئه بنفسك

export default function FanZone() {
  return (
    <div className="fan-zone">
  

      <main className="fan-zone-content">
        <h1 className="fan-title">🎉 Fan Zone</h1>
        <p className="fan-description">
          Ready to test your Turtle Power? Answer as many questions as you like—no pressure, just fun!
        </p>
        <QuizComponent />
        <FanArtWall />
        <PizzaBuilder />
          <DonnieLab />
      <TMNTSoundboard />
      <RetroGallery />
      </main>

    
    </div>
  );
}
