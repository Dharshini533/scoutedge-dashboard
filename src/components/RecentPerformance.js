const statIcons = {
  matches: '🏟️',
  goals: '⚽',
  assists: '🎯',
  'Pass Accuracy': '📊',
  tackles: '🛡️',
  'Key Passes': '🔑',
  'Shot Accuracy': '🎯',
  'Chances Created': '✨',
  'Aerial Duels Won': '⬆️',
  'Tackle Success': '🛡️',
  clearances: '🧹',
  'Clean Sheets': '🧤',
};

function RecentPerformance({ player }) {
  const stats = player.stats;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ color: '#1a1a2e' }}>Recent Performance</h2>
      <div className="stat-cards" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '12px' }}>
        {Object.entries(stats).map(([key, value]) => (
          <div className="stat-card" key={key} style={{
            background: '#1a1a2e',
            color: 'white',
            padding: '20px',
            borderRadius: '12px',
            minWidth: '130px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>{statIcons[key] || '📈'}</div>
            <h3 style={{ fontSize: '24px', marginBottom: '4px' }}>{value}</h3>
            <p style={{ fontSize: '13px', color: '#aaa' }}>{key}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentPerformance;