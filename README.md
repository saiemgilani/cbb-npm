# cbb-npm

Support for the following data from ESPN's college basketball endpoints and recruiting data from 247Sports:
- play-by-play (including shot location data when available)
- scores
- schedule
- standings
- rankings

# Installation

```
npm install cbb-npm
```

# Usage

```
const cbb = require('cbb-npm');
```

# Examples

## Games
```
const gameId = 401260281;

// get detailed play-by-play data for a game
const result = await cbb.games.getPlayByPlay(gameId);

// get box score
const result = await cbb.games.getBoxScore(id);

// get game all game data
const summary = await cbb.games.getSummary(gameId);
```

## Scores
```
const inputs = {
    year: 2021,
    month: 02,
    day: 15
};
const result = await cbb.scoreboard.getScoreboard(inputs);
```

## Schedules
```
const inputs = {
    groups: 50, // all Div-I games
    year: 2020,
    month: 12,
    day: 02
};

const result = await cbb.schedule.getSchedule(inputs);
```
## Conferences
```
const results = await cbb.scoreboard.getConferences();
```
## Teams
```
// get list of teams
const result = await cbb.teams.getTeamList();

// get individual team data
const teamId = 52;
const result = await cbb.teams.getTeamInfo(teamId);

// get team roster data
const result = await cbb.teams.getTeamPlayers(teamId);
```
# Rankings
```
// get rankings
const inputs = {
    year: 2020,
    week: 19
};

const result = await cbb.rankings.getRankings(inputs);
```
# Standings
```
// get standings
const inputs = {
    year: 2020
};

const result = await cbb.standings.getStandings(inputs);
```
# Recruiting
```
// get recruiting data from 247Composite
// get player rankings
const result = await cbb.recruiting.getPlayerRankings({
                    year: 2016
                });

const result = await cbb.recruiting.getPlayerRankings({
                    year: 2021,
                    position: "C"
                });

const result = await cbb.recruiting.getPlayerRankings({
                    year: 2020,
                    group: "JuniorCollege"
                });

// get school rankings
const result = await cbb.recruiting.getSchoolRankings(2021);

// get a school's commit list
const result = await cbb.recruiting.getSchoolCommits('floridastate', 2020);
```
# NCAA Data
```
// acceptable sport names:
// ['basketball-women','soccer-men','soccer-women','fieldhockey',
//  'volleyball-women','icehockey-men','icehockey-women','baseball',
//  'beach-volleyball', 'lacrosse-men','lacrosse-women', 'volleyball-men']
// get ncaa scoreboard data for sport from above list(default: 'basketball-men')
const result = await cbb.ncaa.getNcaaScoreboard({
    sport = 'basketball-men',
    division = 'd1', // 'fbs' for football
    year = 2020,
    month = null,
    day = null
})
// NCAA game information for a given game id
const result = await cbb.ncaa.getNcaaGameInfo(5764053);

// NCAA box score for a given game id
const result = await cbb.ncaa.getNcaaGameBoxScore(5764053);

// NCAA play-by-play for a given game id
const result = await cbb.ncaa.getNcaaGamePlayByPlay(5764053);

// NCAA game team stats for a given game
const result = await cbb.ncaa.getNcaaGameTeamStats(5764053);

// NCAA game scoring summary for a given game
const result = await cbb.ncaa.getNcaaGameScoringSummary(5764053);
```