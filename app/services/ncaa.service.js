const axios = require('axios');
// acceptable sport names:
// ['basketball-women','soccer-men','soccer-women','fieldhockey',
//  'volleyball-women','icehockey-men','icehockey-women','baseball',
//  'beach-volleyball', 'lacrosse-men','lacrosse-women', 'volleyball-men']
exports.getNcaaScoreboard = async ({
    sport = 'basketball-men',
    division = 'd1',
    year = null,
    month = null,
    day = null
}) => {
    let d = (sport == 'football') ? "fbs" : division
    const baseUrl = `https://data.ncaa.com/casablanca/scoreboard/${sport}/${d}/`;
    const params = {
        dates: year+"/"+month+"/"+day
    };

    const res = await axios.get(baseUrl, {
        params
    });
    return res.data;
}

exports.getNcaaGameInfo = async (game) => {
    const baseUrl = `https://data.ncaa.com/casablanca/game/${game}/gameInfo.json`;
    const res = await axios.get(baseUrl);
    return res.data;
}

exports.getNcaaGameBoxScore = async (game) => {
    const baseUrl = `https://data.ncaa.com/casablanca/game/${game}/boxscore.json`;
    const res = await axios.get(baseUrl);
    return res.data;
}

exports.getNcaaGamePlayByPlay = async (game) => {
    const baseUrl = `https://data.ncaa.com/casablanca/game/${game}/pbp.json`;
    const res = await axios.get(baseUrl);
    return res.data;
}

exports.getNcaaGameTeamStats = async (game) => {
    const baseUrl = `https://data.ncaa.com/casablanca/game/${game}/teamStats.json`;
    const res = await axios.get(baseUrl);
    return res.data;
}

exports.getNcaaGameScoringSummary = async (game) => {
    const baseUrl = `https://data.ncaa.com/casablanca/game/${game}/scoringSummary.json`;
    const res = await axios.get(baseUrl);
    return res.data;
}