import React from 'react'
import {connect} from "react-redux";
import {loadGame} from "../actions";
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";

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



                {this.props.isLoading && <div>Подождите, идет загрузка</div>}
                {this.props.isFailed && <div>Ой-ой :(</div>}
                {this.props.game.length > 0 && <div>{this.props.game[0].country_name} {this.props.game[0].league_name}</div>}
                {this.props.game.length > 0 && <div>{this.props.game[0].match_date}</div>}
                {this.props.game.length > 0 && <div>{this.props.game[0].match_time}</div>}
                {this.props.game.length > 0 && this.props.game[0].match_status === "FT" && <div>Матч завершен</div>}
                {this.props.game.length > 0 && <div>{this.props.game[0].match_hometeam_name} {this.props.game[0].match_hometeam_score} : {this.props.game[0].match_awayteam_score} {this.props.game[0].match_awayteam_name} </div>}
                {this.props.game.length > 0 && <div>({this.props.game[0].match_hometeam_halftime_score} : {this.props.game[0].match_awayteam_halftime_score})</div>}
                <div>Statistics:</div>
                {this.props.game.length > 0 && this.props.game[0].statistics.map((doc) => (
                    <div key={doc.type }>
                        <div>{doc.home} {doc.type} {doc.away}</div>
                    </div>
                ))}







            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    game: state.game,
    isLoading: state.isLoading,
    isFailed: state.isFailed
});

const mapDispatchToProps = (dispatch) => ({
    loadGame: (game) => loadGame(dispatch, game)
});

const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game);

export default ConnectedGame;

