const axios = require('axios');
// acceptable sport names:
// ['basketball-women','soccer-men','soccer-women','fieldhockey',
//  'volleyball-women','icehockey-men','icehockey-women','baseball',
//  'beach-volleyball', 'lacrosse-men','lacrosse-women', 'volleyball-men']
// must use parameter - division = 'fbs' for football
exports.getNcaaScoreboard = async ({
    sport = 'basketball-men',
    division = 'd1',
    year = null,
    month = null,
    day = null
}) => {
    const baseUrl = `https://data.ncaa.com/casablanca/scoreboard/${sport}/${division}/`;
    const params = {
        dates: year+"/"+month+"/"+day
    };

    const res = await axios.get(baseUrl, {
        params
    });
    return res.data;
}
