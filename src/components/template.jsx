import React from 'react'
import {connect} from "react-redux";
import {loadLeagues, selectArticle} from "../actions";
import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import LinearProgress from '@material-ui/core/LinearProgress';
import "../css/main.css"

class Template extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isFailed: false,
            leagues: []
        }
        props.loadLeagues()
    }


    render() {
        return (
            <React.Fragment>
                {this.props.isLoading && <LinearProgress color="secondary" />}
                {this.props.isFailed && <div>Ой-ой :(</div>}

                    {this.props.leagues.map((doc) => (
                                    <div  key={doc.league_id} onClick={() => {this.props.selectArticle(doc.league_id)}}>
                                            <Button   variant="contained" color="primary" className="league" component={Link} to="/schedule">
                                                {doc.country_name} {doc.league_name}
                                            </Button>
                                    </div>



                    ))}

            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    selectedArticle: state.app.article,
    leagues: state.app.leagues,
    isLoading: state.app.leaguesIsLoading,
    isFailed: state.app.leaguesLoadFailed
});

const mapDispatchToProps = (dispatch) => ({
    selectArticle: (articleText) => dispatch(selectArticle(articleText)),
    loadLeagues: () => loadLeagues(dispatch)
});

const ConnectedTemplate = connect(mapStateToProps, mapDispatchToProps)(Template);

export default ConnectedTemplate;