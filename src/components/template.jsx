import React from 'react'
import {connect} from "react-redux";
import {loadLeagues, selectArticle} from "../actions";
import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button/Button";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

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
                {this.props.isLoading && <div>Подождите, идет загрузка</div>}
                {this.props.isFailed && <div>Ой-ой :(</div>}
                <ul>
                    {this.props.leagues.map((doc) => (
                        <Paper key={doc.league_id}>
                            <MenuList>
                                <div >
                                    <p onClick={() => this.props.selectArticle(doc.league_id)}>
                                        <MenuItem >
                                            <Button component={Link} to="/schedule">
                                                {doc.country_name} {doc.league_name}
                                            </Button>
                                        </MenuItem>
                                    </p>
                                </div>
                            </MenuList>
                        </Paper>

                    ))}
                </ul>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    selectedArticle: state.article,
    leagues: state.leagues,
    isLoading: state.leaguesIsLoading,
    isFailed: state.leaguesLoadFailed
});

const mapDispatchToProps = (dispatch) => ({
    selectArticle: (articleText) => dispatch(selectArticle(articleText)),
    loadLeagues: () => loadLeagues(dispatch)
});

const ConnectedTemplate = connect(mapStateToProps, mapDispatchToProps)(Template);

export default ConnectedTemplate;