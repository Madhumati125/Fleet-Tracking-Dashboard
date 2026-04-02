export default function Controls({
  isPlaying,
  setIsPlaying,
  speed,
  setSpeed
}) {
  return (
    <div className="controls">
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      <select
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
      >
        <option value={1}>1x</option>
        <option value={5}>5x</option>
        <option value={10}>10x</option>
      </select>
    </div>
  );
}