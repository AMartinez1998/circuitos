import React from "react";
import { FaYoutube, FaTwitch, FaTiktok } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">MisteriDriver</p>
      <div className="footer-icons">
        <a href="https://www.youtube.com/@MisteriDriver" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.twitch.tv/MisteriDriver" target="_blank" rel="noopener noreferrer">
          <FaTwitch />
        </a>
        <a href="https://www.tiktok.com/@MisteriDriver" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </div>
    </footer>
  );
}
