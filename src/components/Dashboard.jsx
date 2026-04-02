import React from "react";
import useSimulation from "../hooks/useSimulation";
import TripCard from "./TripCard";
import FleetMetrics from "./FleetMetrics";
import Controls from "./Controls";

export default function Dashboard() {
  const {
    tripState,
    isPlaying,
    setIsPlaying,
    speed,
    setSpeed
  } = useSimulation();

  return (
    <div className="container">
      <h1 className="header">Fleet Tracking Dashboard</h1>

      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        speed={speed}
        setSpeed={setSpeed}
      />

      <FleetMetrics tripState={tripState} />

      <div className="trip-container">
        {Object.entries(tripState).map(([id, trip]) => (
          <TripCard key={id} tripId={id} trip={trip} />
        ))}
      </div>
    </div>
  );
}