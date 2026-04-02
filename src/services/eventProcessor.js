export const processEvent = (event, setTripState) => {
  setTripState((prev) => {
    const trip = prev[event.trip_id] || { progress: 0, alerts: [] };

    let updatedTrip = { ...trip };

    switch (event.event_type) {
      case "GPS_UPDATE":
        updatedTrip.location = event.location;
        break;

      case "FUEL_UPDATE":
        updatedTrip.fuel = event.fuel;
        break;

      case "TRIP_PROGRESS":
        updatedTrip.progress = event.progress;
        break;

      case "ALERT":
        updatedTrip.alerts = [...trip.alerts, event.message];
        break;

      case "TRIP_STATUS":
        updatedTrip.status = event.status;
        break;
    }

    return {
      ...prev,
      [event.trip_id]: updatedTrip
    };
  });
};