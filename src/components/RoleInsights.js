const insights = {
    Midfielder: [
      "Controls the tempo of the game with 31 key passes",
      "High press contribution — 42 tackles this season",
      "83% pass accuracy shows reliable distribution",
      "7 goals from midfield adds attacking threat",
    ],
    Striker: [
      "14 goals this season — clinical finisher",
      "72% shot accuracy shows composure in front of goal",
      "19 chances created — contributes beyond just goals",
      "28 aerial duels won — strong in the air",
    ],
    Defender: [
      "7 clean sheets — one of the best defenders this season",
      "78% tackle success rate — reliable and composed",
      "54 clearances — dominant in the defensive line",
      "Low goals conceded shows excellent positional awareness",
    ],
  };
  
  function RoleInsights({ player }) {
    const position = player.position;
    const roleInsights = insights[position] || ["No insights available for this role."];
  
    return (
      <div style={{ marginTop: '20px', marginBottom: '40px' }}>
        <h2 style={{ color: '#1a1a2e' }}>Role Based Insights — {position}</h2>
        <div style={{ background: '#1a1a2e', borderRadius: '10px', padding: '20px' }}>
          {roleInsights.map((insight, index) => (
            <p key={index} style={{ color: 'white', borderLeft: '4px solid #f0a500', paddingLeft: '12px', marginBottom: '12px' }}>
              {insight}
            </p>
          ))}
        </div>
      </div>
    );
  }
  
  export default RoleInsights;