import React from 'react'
import {connect} from "react-redux";
import {loadGame} from "../actions";
import "../css/game.css"
import LinearProgress from '@material-ui/core/LinearProgress';

export class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id
        };
        this.props.loadGame(this.state.id)
    }

    render() {
        return (
            <React.Fragment>



                {this.props.isLoading && <LinearProgress color="secondary" />}
                {this.props.isFailed && <div>Ой-ой :(</div>}
                {this.props.game.length > 0 && <div className={"gameLeagueName"}>{this.props.game[0].country_name} {this.props.game[0].league_name}</div>}
                {this.props.game.length > 0 && <div className={"gameDate"}>{this.props.game[0].match_date}</div>}
                {this.props.game.length > 0 && <div className={"gameTime"}>{this.props.game[0].match_time}</div>}
                {this.props.game.length > 0 && this.props.game[0].match_status === "FT" && <div className={"gameStatus"}>Match completed</div>}
                {this.props.game.length > 0 && <div className={"gameScore"}>

                    <div className={"gameHometeamName"}>{this.props.game[0].match_hometeam_name}</div>
                    {this.props.game[0].match_hometeam_score !== "?" && <div className={"gameHometeamScore"}>{this.props.game[0].match_hometeam_score}</div>}
                    <div className={"gameTwoPoints"}>:</div>
                    {this.props.game[0].match_hometeam_score !== "?" && <div className={"gameAwayteamScore"}>{this.props.game[0].match_awayteam_score}</div>}
                    <div className={"gameAwayteamName"}>{this.props.game[0].match_awayteam_name}</div>
                </div>}
                {this.props.game.length > 0 && <div className={"gameHalfScore"}>({this.props.game[0].match_hometeam_halftime_score} : {this.props.game[0].match_awayteam_halftime_score})</div>}
                {this.props.game.length > 0 && this.props.game[0].statistics.length>0 && <div className={"gameStatistics"}>Statistics:</div>}
                { this.props.game.length > 0 && this.props.game[0].statistics.map((doc) => (
                    <div className={"gameStatistic"} key={doc.type }>
                        <div>
                            <div className={"gameHometeamStat"}>{doc.home} </div>
                            <div className={"gameStatType"}>{doc.type} </div>
                            <div className={"gameAwayteamStat"}>{doc.away}</div>
                        </div>
                    </div>
                ))}







            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    game: state.app.game,
    isLoading: state.app.isLoading,
    isFailed: state.app.isFailed
});

const mapDispatchToProps = (dispatch) => ({
    loadGame: (game) => loadGame(dispatch, game)
});

const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game);

export default ConnectedGame;

