const axios = require('axios');

exports.getPlayByPlay = async (id) => {
    const baseUrl = 'http://cdn.espn.com/core/mens-college-basketball/playbyplay';
    const params = {
        gameId: id,
        xhr: 1,
        render: 'false',
        userab: 18
    };

    const res = await axios.get(baseUrl, {
        params
    });

    return {
        teams: res.data.gamepackageJSON.header.competitions[0].competitors,
        id: res.data.gamepackageJSON.header.id,
        plays: res.data.gamepackageJSON.plays,
        competitions: res.data.gamepackageJSON.header.competitions,
        season: res.data.gamepackageJSON.header.season,
        week: res.data.gamepackageJSON.header.week,
        boxScore: res.data.gamepackageJSON.boxscore
    };
};

exports.getBoxScore = async (id) => {
    const baseUrl = 'http://cdn.espn.com/core/mens-college-basketball/boxscore';
    const params = {
        gameId: id,
        xhr: 1,
        render: false,
        device: 'desktop',
        userab: 18
    };

    const res = await axios.get(baseUrl, {
        params
    });

    const game = res.data.gamepackageJSON.boxscore;
    game.id = res.data.gameId;

    return game;
};

exports.getSummary = async (id) => {
    const baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/summary';
    const params = {
        event: id
    };

    const res = await axios.get(baseUrl, {
        params
    });

    return res.data;
};