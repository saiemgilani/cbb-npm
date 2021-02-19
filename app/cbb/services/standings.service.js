const axios = require('axios');

exports.getStandings = async ({
    year = new Date().getFullYear(),
    type = 50
}) => {
    const baseUrl = `http://cdn.espn.com/core/mens-college-basketball/standings/_/season/${year}/group/${type}`;

    const params = {
        xhr: 1,
        render: false,
        device: 'desktop',
        userab: 18
    };

    const res = await axios.get(baseUrl, {
        params
    });

    return res.content.standings.groups;
};