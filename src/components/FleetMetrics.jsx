export default function FleetMetrics({ tripState }) {
  const totalTrips = Object.keys(tripState).length;

  const completedTrips = Object.values(tripState).filter(
    (t) => t.status === "COMPLETED"
  ).length;

  return (
    <div className="metrics">
      <div className="metric-card">
        <h4>Total Trips</h4>
        <p>{totalTrips}</p>
      </div>

      <div className="metric-card">
        <h4>Completed Trips</h4>
        <p>{completedTrips}</p>
      </div>
    </div>
  );
}