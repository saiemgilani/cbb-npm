# cbb-npm

Support for the following data from ESPN's college basketball endpoints and recruiting data from 247Sports:
- play-by-play (including shot location data when available)
- scores
- schedule
- standings
- rankings

College Basketball
Women's College Basketball
WNBA
NBA
All team sports on the NCAA website

# Installation

```
npm install cbb-npm
```

# Usage

```
const sdv = require('cbb-npm');
```

# Examples
# Men's College Basketball
## Games
```
const gameId = 401260281;

// get detailed play-by-play data for a game
const result = await sdv.cbbGames.getPlayByPlay(gameId);

// get box score
const result = await sdv.cbbGames.getBoxScore(gameId);

// get game all game data
const summary = await sdv.cbbGames.getSummary(gameId);
```

## Scores
```
const inputs = {
    year: 2021,
    month: 02,
    day: 15
};
const result = await sdv.cbbScoreboard.getScoreboard(inputs);
```

## Schedules
```
const inputs = {
    groups: 50, // all Div-I games
    year: 2020,
    month: 12,
    day: 02
};

const result = await sdv.cbbSchedule.getSchedule(inputs);
```
## Conferences
```
const results = await sdv.cbbScoreboard.getConferences();
```
## Teams
```
// get list of teams
const result = await sdv.cbbTeams.getTeamList();

// get individual team data
const teamId = 52;
const result = await sdv.cbbTeams.getTeamInfo(teamId);

// get team roster data
const result = await sdv.cbbTeams.getTeamPlayers(teamId);
```
## Rankings
```
// get rankings
const inputs = {
    year: 2020,
    week: 19
};

const result = await sdv.cbbRankings.getRankings(inputs);
```
## Standings
```
// get standings
const inputs = {
    year: 2020
};

const result = await sdv.cbbStandings.getStandings(inputs);
```
## Recruiting
```
// get recruiting data from 247Composite
// get player rankings
const result = await sdv.cbbRecruiting.getPlayerRankings({
                    year: 2016
                });

const result = await sdv.cbbRecruiting.getPlayerRankings({
                    year: 2021,
                    position: "C"
                });

const result = await sdv.cbbRecruiting.getPlayerRankings({
                    year: 2020,
                    group: "JuniorCollege"
                });

// get school rankings
const result = await sdv.cbbRecruiting.getSchoolRankings(2021);

// get a school's commit list
const result = await sdv.cbbRecruiting.getSchoolCommits('floridastate', 2020);
```

# Women's College Basketball
## Games
```
const gameId = 401260281;

// get detailed play-by-play data for a game
const result = await sdv.wbbGames.getPlayByPlay(gameId);

// get box score
const result = await sdv.wbbGames.getBoxScore(gameId);

// get game all game data
const summary = await sdv.wbbGames.getSummary(gameId);
```

## Scores
```
const inputs = {
    year: 2021,
    month: 02,
    day: 15
};
const result = await sdv.wbbScoreboard.getScoreboard(inputs);
```

## Schedules
```
const inputs = {
    groups: 51, // all Div-I games
    year: 2020,
    month: 12,
    day: 02
};

const result = await sdv.wbbSchedule.getSchedule(inputs);
```
## Conferences
```
const results = await sdv.wbbScoreboard.getConferences();
```
## Teams
```
// get list of teams
const result = await sdv.wbbTeams.getTeamList();

// get individual team data
const teamId = 52;
const result = await sdv.wbbTeams.getTeamInfo(teamId);

// get team roster data
const result = await sdv.wbbTeams.getTeamPlayers(teamId);
```
# Rankings
```
// get rankings
const inputs = {
    year: 2020,
    week: 19
};

const result = await sdv.wbbRankings.getRankings(inputs);
```
# Standings
```
// get standings
const inputs = {
    year: 2020
};

const result = await sdv.wbbStandings.getStandings(inputs);
```
# NCAA Data
```
// acceptable sport names:
// ['basketball-women','soccer-men','soccer-women','fieldhockey',
//  'volleyball-women','icehockey-men','icehockey-women','baseball',
//  'beach-volleyball', 'lacrosse-men','lacrosse-women', 'volleyball-men']
// get ncaa scoreboard data for sport from above list(default: 'basketball-men')
const result = await sdv.ncaa.getNcaaScoreboard({
    sport = 'basketball-men',
    division = 'd1', // 'fbs' for football
    year = 2020,
    month = null,
    day = null
})
// NCAA game information for a given game id
const result = await sdv.ncaa.getNcaaGameInfo(5764053);

// NCAA box score for a given game id
const result = await sdv.ncaa.getNcaaGameBoxScore(5764053);

// NCAA play-by-play for a given game id
const result = await sdv.ncaa.getNcaaGamePlayByPlay(5764053);

// NCAA game team stats for a given game
const result = await sdv.ncaa.getNcaaGameTeamStats(5764053);

// NCAA game scoring summary for a given game
const result = await sdv.ncaa.getNcaaGameScoringSummary(5764053);
```


# NBA
## Games
```
const gameId = 401283399;

// get detailed play-by-play data for a game
const result = await sdv.nbaGames.getPlayByPlay(gameId);

// get box score
const result = await sdv.nbaGames.getBoxScore(gameId);

// get game all game data
const summary = await sdv.nbaGames.getSummary(gameId);
```

## Scores
```
const inputs = {
    year: 2021,
    month: 02,
    day: 15
};
const result = await sdv.nbaScoreboard.getScoreboard(inputs);
```

## Schedules
```
const inputs = {
    groups: 46, // all Div-I games
    year: 2020,
    month: 12,
    day: 02
};

const result = await sdv.nbaSchedule.getSchedule(inputs);
```
## Conferences
```
const results = await sdv.nbaScoreboard.getConferences();
```
## Teams
```
// get list of teams
const result = await sdv.nbaTeams.getTeamList();

// get individual team data
const teamId = "por";
const result = await sdv.nbaTeams.getTeamInfo(teamId);

// get team roster data
const result = await sdv.nbaTeams.getTeamPlayers(teamId);
```
# Standings
```
// get standings
const inputs = {
    year: 2020
};

const result = await sdv.nbaStandings.getStandings(inputs);
```

# WNBA
## Games
```
const gameId = 401244185;

// get detailed play-by-play data for a game
const result = await sdv.wnbaGames.getPlayByPlay(gameId);

// get box score
const result = await sdv.wnbaGames.getBoxScore(gameId);

// get game all game data
const summary = await sdv.wnbaGames.getSummary(gameId);
```

## Scores
```
const inputs = {
    year: 2021,
    month: 02,
    day: 15
};
const result = await sdv.wnbaScoreboard.getScoreboard(inputs);
```

## Schedules
```
const inputs = {
    groups: 54, // all Div-I games
    year: 2020,
    month: 12,
    day: 02
};

const result = await sdv.wnbaSchedule.getSchedule(inputs);
```
## Conferences
```
const results = await sdv.wnbaScoreboard.getConferences();
```
## Teams
```
// get list of teams
const result = await sdv.wnbaTeams.getTeamList();

// get individual team data
const teamId = "sea";
const result = await sdv.wnbaTeams.getTeamInfo(teamId);

// get team roster data
const result = await sdv.wnbaTeams.getTeamPlayers(teamId);
```
# Standings
```
// get standings
const inputs = {
    year: 2020
};

const result = await sdv.wnbaStandings.getStandings(inputs);
```