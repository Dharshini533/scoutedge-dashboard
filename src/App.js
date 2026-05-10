import { useState } from 'react';
import players from './data/playerData';
import PlayerOverview from './components/PlayerOverview';
import RecentPerformance from './components/RecentPerformance';
import MatchSection from './components/MatchSection';
import RoleInsights from './components/RoleInsights';
import ScoutVerdict from './components/ScoutVerdict';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const menuItems = ['Dashboard', 'Players', 'Matches', 'Analytics', 'Reports'];

  const PlayerSwitcher = (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
      {players.map((player) => (
        <button
          className="player-btn"
          key={player.id}
          onClick={() => setSelectedPlayer(player)}
          style={{
            padding: '10px 20px',
            background: selectedPlayer.id === player.id ? '#1a1a2e' : 'white',
            color: selectedPlayer.id === player.id ? 'white' : '#1a1a2e',
            border: '2px solid #1a1a2e',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontFamily: 'Poppins',
          }}
        >
          {player.name}
        </button>
      ))}
    </div>
  );

  const renderContent = () => {
    if (activeMenu === 'Dashboard') {
      return (
        <>
          {PlayerSwitcher}
          <PlayerOverview player={selectedPlayer} />
          <RecentPerformance player={selectedPlayer} />
          <MatchSection player={selectedPlayer} />
          <RoleInsights player={selectedPlayer} />
          <ScoutVerdict player={selectedPlayer} />
        </>
      );
    }
    if (activeMenu === 'Players') {
      return (
        <>
          {PlayerSwitcher}
          <PlayerOverview player={selectedPlayer} />
        </>
      );
    }
    if (activeMenu === 'Matches') {
      return (
        <>
          {PlayerSwitcher}
          <MatchSection player={selectedPlayer} />
        </>
      );
    }
    if (activeMenu === 'Analytics') {
      return (
        <>
          {PlayerSwitcher}
          <RecentPerformance player={selectedPlayer} />
          <RoleInsights player={selectedPlayer} />
        </>
      );
    }
    if (activeMenu === 'Reports') {
      return (
        <>
          {PlayerSwitcher}
          <ScoutVerdict player={selectedPlayer} />
        </>
      );
    }
  };

  return (
    <div className="app-container" style={{ display: 'flex', minHeight: '100vh', background: '#f5f7fb' }}>

     
      <div className="sidebar" style={{ width: '220px', background: '#1a1a2e', padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h2 style={{ color: '#f0a500', marginBottom: '30px', fontSize: '20px' }}>⚽ ScoutEdge</h2>
        {menuItems.map((item) => (
          <button
            className="sidebar-btn"
            key={item}
            onClick={() => setActiveMenu(item)}
            style={{
              padding: '12px 16px',
              background: activeMenu === item ? '#f0a500' : 'transparent',
              color: activeMenu === item ? '#1a1a2e' : 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '14px',
            }}
          >
            {item}
          </button>
        ))}
      </div>


      <div className="main-content" style={{ flex: 1, padding: '30px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h1 style={{ color: '#1a1a2e', fontSize: '24px' }}>{activeMenu}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <input
              placeholder="Search players..."
              onChange={(e) => {
                const query = e.target.value.toLowerCase();
                const found = players.find(p => p.name.toLowerCase().includes(query));
                if (found) setSelectedPlayer(found);
              }}
              style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #ddd', fontFamily: 'Poppins', outline: 'none', width: '200px' }}
            />
            <span style={{ fontSize: '20px', cursor: 'pointer' }}>🔔</span>
            <img src="https://i.pravatar.cc/35?img=5" alt="profile" style={{ borderRadius: '50%', width: '35px', height: '35px' }} />
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
}

export default App;