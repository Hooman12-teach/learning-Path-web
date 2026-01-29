import '../styles/Analytics.css';

const Analytics = () => {
  const chartData = [
    { month: 'Jan', sales: 4000, users: 2400, revenue: 2400 },
    { month: 'Feb', sales: 3000, users: 1398, revenue: 2210 },
    { month: 'Mar', sales: 2000, users: 9800, revenue: 2290 },
    { month: 'Apr', sales: 2780, users: 3908, revenue: 2000 },
    { month: 'May', sales: 1890, users: 4800, revenue: 2181 },
    { month: 'Jun', sales: 2390, users: 3800, revenue: 2500 }
  ];

  return (
    <div className="analytics-page">
      <h1>Analytics</h1>
      <p className="subtitle">View detailed analytics and reports</p>

      <div className="analytics-grid">
        <div className="chart-card">
          <h3>Monthly Sales</h3>
          <div className="chart">
            {chartData.map((data) => (
              <div key={data.month} className="chart-bar">
                <div 
                  className="bar" 
                  style={{ height: `${data.sales / 100}%` }}
                  title={`${data.sales}`}
                ></div>
                <span className="bar-label">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-card">
          <h3>Key Metrics</h3>
          <div className="metrics">
            <div className="metric">
              <span className="metric-label">Conversion Rate</span>
              <span className="metric-value">3.5%</span>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div className="metric">
              <span className="metric-label">User Engagement</span>
              <span className="metric-value">78%</span>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div className="metric">
              <span className="metric-label">Customer Satisfaction</span>
              <span className="metric-value">92%</span>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
