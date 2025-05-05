import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [sentence, setSentence] = useState("Loading...");
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [wpm, setWpm] = useState(null);

  const fetchSentence = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setSentence(data.content);
    } catch (err) {
      console.error("API failed, using fallback.");
      const fallbackSentences = [
        "Typing is a useful skill.",
        "The fox jumps over the dog.",
        "React makes UI development fun.",
        "Practice makes perfect.",
        "Stay calm and keep typing.",
        "The quick brown fox jumps over the lazy dog on a sunny day near the riverbank, where birds chirp and the breeze blows gently through the trees.",
        "In the world of technology, artificial intelligence and machine learning are transforming industries by enabling smarter decision-making and automation across various sectors.",
        "The intricate patterns of human behavior are often influenced by a combination of genetic factors, environmental conditions, and personal experiences.",
        "Every journey begins with a single step, and it's essential to maintain focus and perseverance to overcome obstacles along the way towards achieving your goals.",
        "Innovation in the field of medicine has led to groundbreaking advancements in treatments, saving lives and improving the quality of care for patients around the globe.",
        "As the sun set over the horizon, the sky turned into a canvas of vibrant colors, reflecting the beauty of nature in its purest form.",
        "In a world where information flows freely and rapidly, the ability to filter out noise and focus on meaningful data is more important than ever.",
        "The diversity of cultures, languages, and traditions across the world enriches our lives, creating a vibrant tapestry of experiences that connect humanity.",
        "Space exploration has opened up new frontiers for human understanding, inspiring future generations to look to the stars and dream of what lies beyond our planet.",
        "The delicate balance between economic growth, environmental sustainability, and social equity is crucial to ensuring a prosperous future for generations to come."
      ];
      const random = Math.floor(Math.random() * fallbackSentences.length);
      setSentence(fallbackSentences[random]);
    }
  };

  useEffect(() => {
    fetchSentence();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  
    if (!startTime && value.length === 1) setStartTime(Date.now());
  
    if (value.trim().toLowerCase() === sentence.trim().toLowerCase()) {
      setEndTime(Date.now());
    }
  };
  

  const calculateAccuracy = () => {
    let correct = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === sentence[i]) correct++;
    }
    return Math.round((correct / sentence.length) * 100);
  };

  const handleRestart = () => {
    setText("");
    setStartTime(null);
    setEndTime(null);
    setWpm(null);
    fetchSentence();
  };

  // ✅ Fix: include all dependencies used inside
  useEffect(() => {
    if (startTime && endTime) {
      const minutes = (endTime - startTime) / 1000 / 60;
      const words = sentence.split(" ").length;
      setWpm(Math.round(words / minutes));
    }
  }, [endTime, startTime, sentence]); // ← Fixed dependencies

  return (
    <div className="App">
      <h1>⌨️ Typing Speed Test</h1>
      <p className="sentence">{sentence}</p>

      <textarea
        placeholder="Start typing..."
        rows="4"
        cols="60"
        value={text}
        onChange={handleChange}
      />

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(text.length / sentence.length) * 100}%` }}
        ></div>
      </div>

      {wpm && (
        <>
          <h2>🚀 Speed: {wpm} WPM</h2>
          <h2>🎯 Accuracy: {calculateAccuracy()}%</h2>
        </>
      )}

      <button onClick={handleRestart} className="restart-btn">
        🔁 Restart
      </button>
    </div>
  );
}

export default App;
