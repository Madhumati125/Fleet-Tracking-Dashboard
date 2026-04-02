import { useEffect, useState } from "react";
import { processEvent } from "../services/eventProcessor";
import mockEvents from "../data/trips.json";

export default function useSimulation() {
  const [events, setEvents] = useState([]);
  const [index, setIndex] = useState(0);
  const [tripState, setTripState] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const sorted = [...mockEvents].sort(
      (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
    );
    setEvents(sorted);
  }, []);

  useEffect(() => {
    if (!isPlaying || index >= events.length) return;

    const interval = setInterval(() => {
      processEvent(events[index], setTripState);
      setIndex((prev) => prev + 1);
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [index, isPlaying, speed, events]);

  return {
    tripState,
    isPlaying,
    setIsPlaying,
    speed,
    setSpeed
  };
}