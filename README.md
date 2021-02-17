# cbb-npm

Support for the following data from ESPN's college basketball endpoints:
- play-by-play (including shot location data when available)
- scores
- schedule
- standings
- rankings

# Installation

```
npm install cfb-npm
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
                    year: 2021,
                    group: "JuniorCollege"
                });

// get school rankings
const result = await cbb.recruiting.getSchoolRankings(2021);

// get a school's commit list
const result = await cbb.recruiting.getSchoolCommits('florida-state', 2016);
```
