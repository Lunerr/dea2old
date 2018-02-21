class Guild {
  constructor(guildId) {
    this.guildId = guildId;
    this.roles = {
      mod: [],
      rank: [],
      muted: null
    };
    this.channels = {
      modLog: null,
      gamble: null
    };
    this.settings = {
      messageMultiplier: 1
    };
    this.misc = {
      caseNumber: 1
    };
    this.autoTrivia = true;
    this.trivia = {};
  }
}

module.exports = Guild;
