function PlayerOverview({ player }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px', background: '#1a1a2e', color: 'white', borderRadius: '10px' }}>
        <img src={player.photo} alt="Player" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
        <div>
          <h2>{player.name}</h2>
          <p>Position: {player.position}</p>
          <p>Club: {player.club}</p>
          <p>Age: {player.age}</p>
          <p>Nationality: {player.nationality}</p>
        </div>
      </div>
    );
  }
  
  export default PlayerOverview;