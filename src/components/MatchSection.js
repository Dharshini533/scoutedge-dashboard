import { useState } from 'react';

function MatchSection({ player }) {
  const [modal, setModal] = useState(null);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ color: '#1a1a2e' }}>Recent Matches</h2>

      {modal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', zIndex: 1000
        }}>
          <div style={{
            background: 'white', borderRadius: '12px', padding: '32px',
            maxWidth: '400px', width: '90%', textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>
              {modal === 'video' ? '🎬' : '📊'}
            </div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '12px' }}>
              {modal === 'video' ? 'Match Video' : 'Match Analysis'}
            </h3>
            <p style={{ color: '#666', marginBottom: '24px', lineHeight: '1.6' }}>
              {modal === 'video'
                ? 'Video analysis is unavailable in the demo version.'
                : 'Detailed match analysis is unavailable in the demo version. AI-powered insights will be available in the live platform.'}
            </p>
            <button
              onClick={() => setModal(null)}
              style={{
                padding: '10px 24px', background: '#1a1a2e', color: 'white',
                border: 'none', borderRadius: '8px', cursor: 'pointer',
                fontFamily: 'Poppins', fontWeight: '600'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="table-wrapper">
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '10px', tableLayout: 'fixed' }}>
          <thead>
            <tr style={{ background: '#1a1a2e', color: 'white', textAlign: 'center' }}>
              <th style={{ padding: '12px', width: '25%' }}>Opponent</th>
              <th style={{ padding: '12px', width: '20%' }}>Date</th>
              <th style={{ padding: '12px', width: '15%' }}>Result</th>
              <th style={{ padding: '12px', width: '15%' }}>Rating</th>
              <th style={{ padding: '12px', width: '25%' }}>Analysis</th>
            </tr>
          </thead>
          <tbody>
            {player.recentMatches.map((match, index) => (
              <tr className="match-row" key={index} style={{ textAlign: 'center', borderBottom: '1px solid #eee', background: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                <td style={{ padding: '12px' }}>{match.opponent}</td>
                <td style={{ padding: '12px' }}>{match.date}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{
                    padding: '4px 10px', borderRadius: '20px', fontWeight: '600',
                    background: match.result.startsWith('W') ? '#d4edda' : match.result.startsWith('L') ? '#f8d7da' : '#fff3cd',
                    color: match.result.startsWith('W') ? '#155724' : match.result.startsWith('L') ? '#721c24' : '#856404',
                  }}>
                    {match.result}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>{match.rating}</td>
                <td style={{ padding: '12px' }}>
                  <button className="action-btn"
                    onClick={() => setModal('video')}
                    style={{ padding: '6px 12px', background: '#1a1a2e', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontFamily: 'Poppins', fontSize: '12px', marginRight: '6px' }}>
                    ▶ Watch Clip
                  </button>
                  <button className="action-btn"
                    onClick={() => setModal('analysis')}
                    style={{ padding: '6px 12px', background: 'transparent', color: '#1a1a2e', border: '1px solid #1a1a2e', borderRadius: '6px', cursor: 'pointer', fontFamily: 'Poppins', fontSize: '12px' }}>
                    📊 Analysis
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MatchSection;