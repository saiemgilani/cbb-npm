var chai = require('chai');
var app = require('../app/app');
var should = chai.should();

describe('Games', () => {
    var gameId = 401260281;

    it('should populate play by play data for the given game id', (done) => {
        app.games.getPlayByPlay(gameId).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.should.not.be.empty;
            done();
        });
    });

    it('should return a promise for play by play data for the given game id', (done) => {
        app.games.getPlayByPlay(gameId)
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });

    it('should populate box score data for the given game id', (done) => {
        app.games.getBoxScore(gameId).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.id.should.exist;
            data.should.not.be.empty;
            done();
        });
    });

    it('should return a promise for box score data for the given game id', (done) => {
        app.games.getBoxScore(gameId)
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                data.id.should.exist;
                done();
            });
    });

    it('should return a promise for game summary data for the given game id', (done) => {
        app.games.getSummary(gameId)
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });
});

describe('Rankings', () => {
    it('should populate rankings for the current week and year', (done) => {
        app.rankings.getRankings({}).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.should.not.be.empty;
            done();
        });
    });

    it('should populate rankings for the given week and year', (done) => {
        app.rankings.getRankings({
            year: 2020,
            week: 9
        }).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.should.not.be.empty;
            done();
        });
    });

    it('should return a promise for rankings for the current week and year', (done) => {
        app.rankings.getRankings({})
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });

    it('should return a promise for rankings for the given week and year', (done) => {
        app.rankings.getRankings({
                year: 2020,
                week: 9
            })
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });
});

describe('Scoreboard', () => {
    it('should populate scoreboard data for the current week and year', (done) => {
        app.scoreboard.getScoreboard({}).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.should.not.be.empty;
            done();
        });
    });

    it('should populate scoreboard data for the given week and year', (done) => {
        app.scoreboard.getScoreboard({
            year: 2021,
            month: 02,
            day: 15
        }).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.should.not.be.empty;
            done();
        });
    });

    it('should return a promise for scoreboard data for the current week and year', (done) => {
        app.scoreboard.getScoreboard({})
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });

    it('should return a promise for scoreboard data for the given week and year', (done) => {
        app.scoreboard.getScoreboard({
                year: 2021,
                month: 02,
                day: 15
            })
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });
});

describe('Standings', () => {
    it('should populate standings for the given year', (done) => {
        app.standings.getStandings({
            year: 2020
        }).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.should.not.be.empty;
            done();
        });
    });

    it('should return a promise for standings for the given year', (done) => {
        app.standings.getStandings({
                year: 2020
            })
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });
});

describe('Recruiting', () => {
    it('should return a promise for a list of individual rankings for the given year', (done) => {
        app.recruiting.getPlayerRankings({
                year: 2021
            })
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            })
    });

    it('should return a promise for a list of individual rankings for the given year and position', (done) => {
        app.recruiting.getPlayerRankings({
                year: 2021,
                position: "C"
            })
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            })
    });

    it('should return a promise for a list of individual rankings for the given year and group', (done) => {
        app.recruiting.getPlayerRankings({
                year: 2021,
                group: "JuniorCollege"
            })
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            })
    });

    it('should return a promise for a list of school rankings for the given year', (done) => {
        app.recruiting.getSchoolRankings(2021)
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            })
    });

    it('should return a promise for a school\'s commit list for a given year', (done) => {
        app.recruiting.getSchoolCommits('floridastate', 2021)
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            })
    });
describe('NCAA', () => {
    var game = 5764053;
    it('should return a promise for ncaa scoreboard data for a given date', (done) => {
        app.ncaa.getNcaaScoreboard({
            sport: 'basketball-men',
            division: 'd1',
            year: 2021,
            month: 02,
            day: 15
        })
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            })
    });
    it('should return a promise for ncaa game information for a given game', (done) => {
            app.ncaa.getNcaaGameInfo(game)
                .then((data) => {
                    data.should.exist;
                    data.should.be.json;
                    data.should.not.be.empty;
                    done();
                })
        });
    it('should return a promise for ncaa game box score for a given game', (done) => {
            app.ncaa.getNcaaGameBoxScore(game)
                .then((data) => {
                    data.should.exist;
                    data.should.be.json;
                    data.should.not.be.empty;
                    done();
                })
        });
    it('should return a promise for ncaa game play-by-play for a given game', (done) => {
            app.ncaa.getNcaaGamePlayByPlay(game)
                .then((data) => {
                    data.should.exist;
                    data.should.be.json;
                    data.should.not.be.empty;
                    done();
                })
        });
    it('should return a promise for ncaa game team stats for a given game', (done) => {
            app.ncaa.getNcaaGameTeamStats(game)
                .then((data) => {
                    data.should.exist;
                    data.should.be.json;
                    data.should.not.be.empty;
                    done();
                })
        });
    it('should return a promise for ncaa game scoring summary for a given game', (done) => {
            app.ncaa.getNcaaGameScoringSummary(game)
                .then((data) => {
                    data.should.exist;
                    data.should.be.json;
                    data.should.not.be.empty;
                    done();
                })
        });
    });
});