import '../styles/Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <p className="subtitle">Manage your preferences and configurations</p>

      <div className="settings-sections">
        <div className="settings-card">
          <h3>🔒 Security</h3>
          <div className="setting-item">
            <label>Change Password</label>
            <button className="btn-setting">Update</button>
          </div>
          <div className="setting-item">
            <label>Two-Factor Authentication</label>
            <button className="btn-setting">Enable</button>
          </div>
        </div>

        <div className="settings-card">
          <h3>📧 Notifications</h3>
          <div className="setting-item">
            <label>Email Notifications</label>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="setting-item">
            <label>Push Notifications</label>
            <input type="checkbox" defaultChecked />
          </div>
        </div>

        <div className="settings-card">
          <h3>👤 Profile</h3>
          <div className="setting-item">
            <label>Display Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="setting-item">
            <label>Email Address</label>
            <input type="email" placeholder="your@email.com" />
          </div>
        </div>

        <div className="settings-card">
          <h3>💾 Data</h3>
          <div className="setting-item">
            <button className="btn-danger">Export Data</button>
            <button className="btn-danger">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
