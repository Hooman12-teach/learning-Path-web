const DataCard = ({ title, value, icon, color }) => {
  return (
    <div className="data-card" style={{ borderLeft: `4px solid ${color}` }}>
      <span className="icon">{icon}</span>
      <div className="content">
        <p className="title">{title}</p>
        <p className="value">{value}</p>
      </div>
    </div>
  );
};

export default DataCard;
