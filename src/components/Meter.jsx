const MeterGraph = ({ value, min, max }) => {
  const percentage = (value - min) / (max - min);
  const fill = {
    backgroundColor: `hsl(${percentage * 120}, 100%, 50%)`,
  };

  return (
    <div className="meter-graph">
      <div className="meter-bar" style={fill}>
        mmm
      </div>
    </div>
  );
};

export default MeterGraph;
