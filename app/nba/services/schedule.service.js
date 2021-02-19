const axios = require('axios');

const getSchedule = async ({
    year = null,
    month = null,
    day = null,
    groups = null,
    seasontype = null
}) => {
    const baseUrl = 'http://cdn.espn.com/core/nba/schedule';
    const params = {
        dates: year+""+month+""+day,
        group: groups,
        seasontype: seasontype,
        xhr: 1
    };

    const res = await axios.get(baseUrl, {
        params
    });
    return res.data;
}

module.exports = {
    getSchedule
}