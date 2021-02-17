const axios = require('axios');

exports.getScoreboard = async ({year = null, month = null, day = null, groups = 50, seasontype = null, limit = 300}) => {
    const baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard';
    const params = {
        dates: year+""+month+""+day,
        groups,
        seasontype,
        limit
    };

    const res = await axios.get(baseUrl, {
        params
    });

    return res.data;
};

exports.getConferences = async () => {
    const baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard/conferences';

    const res = await axios.get(baseUrl);
    return res.data;
};