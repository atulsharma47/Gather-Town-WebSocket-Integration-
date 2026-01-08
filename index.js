const { Game } = require("@gathertown/gather-game-client");
const config = require("./config");
const { handleVoiceLogic } = require("./voiceController");

// Create Gather game instance
global.game = new Game(
  config.SPACE_ID,
  () => Promise.resolve({ apiKey: config.API_KEY })
);

// Connect to Gather Town
game.connect();

// Run logic when players move
game.subscribeToEvent("playerMoves", (_data, context) => {
  if (!context || !context.playerId) return;
  handleVoiceLogic(context.playerId);
});

console.log("✅ Gather Town auto-muting system is running...");
