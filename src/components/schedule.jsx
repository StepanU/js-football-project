import React from 'react'
import {connect} from "react-redux";
import {loadCountries} from "../actions";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";


class Schedule extends React.Component {
    constructor(props) {
        super(props)
        if(this.props.selectedArticle)
             this.props.loadCountries(this.props.selectedArticle)
    }

     shouldComponentUpdate(nextProps, nextState) {
         if (nextProps.selectedArticle !== this.props.selectedArticle) {
             this.props.loadCountries(nextProps.selectedArticle)
         }
         return true
     }

     getLeague() {
        if (this.props.countries.length == 0) {
            return ""
        }
        else{
            return this.props.countries[0].country_name + " " + this.props.countries[0].league_name
        }
     }

    getLink(id){
        return "/schedule/" + id;
    }


    render() {
        return (
            <React.Fragment>
                {console.log(this.props)}
                <h1>{  this.getLeague() }</h1>
                {this.props.isLoading && <div>Подождите, идет загрузка</div>}
                {this.props.isFailed && <div>Ой-ой :(</div>}
                <ul>
                    {this.props.countries.map((doc) => (
                        <div key={doc.match_id }>
                            <Button component={Link} to={this.getLink(doc.match_id)}>
                                <div>{doc.match_hometeam_name} {doc.match_hometeam_score} : {doc.match_awayteam_score} {doc.match_awayteam_name}</div>
                            </Button>
                        </div>
                    ))}
                </ul>

            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    selectedArticle: state.article,
    countries: state.countries,
    isLoading: state.countriesIsLoading,
    isFailed: state.countriesLoadFailed
});

const mapDispatchToProps = (dispatch) => ({
    loadCountries: (game) => loadCountries(dispatch, game)
});

const ConnectedSchedule = connect(mapStateToProps, mapDispatchToProps)(Schedule);

export default ConnectedSchedule;