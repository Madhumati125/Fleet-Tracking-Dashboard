export default function TripCard({ tripId, trip }) {
  return (
    <div className="trip-card">
      <div className="trip-title">{tripId}</div>

      <p>
        Status: <span className="status">{trip.status}</span>
      </p>

      <p>Progress: {trip.progress}%</p>

      <p>Fuel: {trip.fuel || "N/A"}</p>

      <p>
        Location:{" "}
        {trip.location
          ? `${trip.location.lat}, ${trip.location.lng}`
          : "N/A"}
      </p>

      <strong>Alerts:</strong>

      {trip.alerts?.length === 0 ? (
        <p>No alerts</p>
      ) : (
        trip.alerts?.map((a, i) => (
          <p className="alert" key={i}>
            ⚠️ {a}
          </p>
        ))
      )}
    </div>
  );
}