const verdicts = {
    Midfielder: {
      verdict: "Recommended for high-press possession-based systems.",
      rating: "A",
      summary: "Arjun's combination of key passes, tackles and goals from midfield makes him a versatile asset. Best suited for teams that dominate possession and press high.",
    },
    Striker: {
      verdict: "Clinical finisher with strong aerial presence.",
      rating: "A+",
      summary: "Rohan's goal tally and shot accuracy make him one of the most dangerous strikers in the league. Ideal for counter-attacking systems that rely on quick transitions.",
    },
    Defender: {
      verdict: "Defensively solid — ideal for a high defensive line.",
      rating: "B+",
      summary: "Karthik's clean sheet record and tackle success rate show excellent defensive discipline. Best deployed in a back four with freedom to step into midfield.",
    },
  };
  
  function ScoutVerdict({ player }) {
    const data = verdicts[player.position];
  
    return (
      <div style={{ marginTop: '20px', marginBottom: '40px' }}>
        <h2 style={{ color: '#1a1a2e' }}>Scout Verdict</h2>
        <div style={{ background: 'white', borderRadius: '10px', padding: '24px', borderLeft: '6px solid #f0a500', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <span style={{ background: '#1a1a2e', color: '#f0a500', padding: '8px 16px', borderRadius: '8px', fontWeight: '700', fontSize: '24px' }}>
              {data.rating}
            </span>
            <h3 style={{ color: '#1a1a2e', fontSize: '18px' }}>{data.verdict}</h3>
          </div>
          <p style={{ color: '#555', lineHeight: '1.6' }}>{data.summary}</p>
        </div>
      </div>
    );
  }
  
  export default ScoutVerdict;