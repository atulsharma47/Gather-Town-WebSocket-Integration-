const VOICE_RADIUS = 5;

// Store last decision for each player
const lastDecision = {};

function handleVoiceLogic(playerId) {
  const game = global.game;
  const players = game.players;
  const current = players[playerId];

  if (!current) return;

  let someoneNearby = false;

  for (const id in players) {
    if (id === playerId) continue;

    const other = players[id];
    if (!other) continue;

    const dx = other.x - current.x;
    const dy = other.y - current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= VOICE_RADIUS) {
      someoneNearby = true;
      break;
    }
  }

  const decision = someoneNearby ? "UNMUTE" : "MUTE";

  // Print only when decision changes
  if (lastDecision[playerId] !== decision) {
    if (decision === "MUTE") {
      console.log(`🔇 SHOULD mute player ${playerId}`);
    } else {
      console.log(`🔊 SHOULD unmute player ${playerId}`);
    }
    lastDecision[playerId] = decision;
  }
}

module.exports = { handleVoiceLogic };
