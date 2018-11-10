import React from 'react'
import {connect} from "react-redux";
import {loadCountries} from "../actions";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button/Button"
import LinearProgress from '@material-ui/core/LinearProgress';
import Search from "./search"
import "../css/main.css"


class Schedule extends React.Component {
    constructor(props) {
        super(props)
        if(this.props.selectedArticle && this.props.date)
             this.props.loadCountries(this.props.selectedArticle, this.props.date)
    }

     shouldComponentUpdate(nextProps, nextState) {
        console.log("upd")
         if (nextProps.date && (nextProps.selectedArticle !== this.props.selectedArticle || nextProps.date !== this.props.date)) {
             this.props.loadCountries(nextProps.selectedArticle, nextProps.date.values.page)
         }
         return true
     }

     getLeague() {
        if (this.props.countries[0] == 404 || this.props.countries[0] == 201) {
            return "No matches"
        }
        else if (this.props.countries[0]){
            return this.props.countries[0].country_name + " " + this.props.countries[0].league_name
        }
     }

    getLink(id){
        return "/schedule/" + id;
    }


    render() {

        return (
            <React.Fragment>

                <div className="schedule">
                    <div className={"headL"}>
                        <div className={"leagueName"}>{  this.getLeague() }</div>
                        <div className="calendar"><Search/></div>
                    </div>
                    {this.props.isLoading && <LinearProgress color="secondary" />}
                    {this.props.isFailed && <img src={"https://okdiario.com/img/2018/03/13/como-calcular-porcentaje-de-error-655x368.jpg"} className={"im"}></img>}
                    <div className="mathes">
                        {this.getLeague()!== "No matches" && this.props.countries.map((doc) => (
                            <div className={"match"} key={doc.match_id }>
                                <Button component={Link} to={this.getLink(doc.match_id)}>
                                    {doc.match_id && <div className={"score"}>
                                            <div className={"time"}>{doc.match_time} </div>
                                            <div className={"hometeam"}>{doc.match_hometeam_name} </div>
                                            {doc.match_hometeam_score !== "?" && <div className={"homescore"}>{doc.match_hometeam_score} </div>}
                                            {doc.match_hometeam_score === "?" && <div className={"homescore"}> </div>}
                                            <div className={"twopoints"}> : </div>
                                            {doc.match_hometeam_score !== "?" && <div className={"awayscore"}>{doc.match_awayteam_score} </div>}
                                            {doc.match_hometeam_score === "?" && <div className={"awayscore"}> </div>}
                                            <div className={"awayteam"}>{doc.match_awayteam_name} </div>

                                        </div>
                                    }
                                </Button>
                            </div>
                        ))}
                    </div>

                </div>


            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    selectedArticle: state.app.article,
    date: state.form.search,
    countries: state.app.countries,
    isLoading: state.app.countriesIsLoading,
    isFailed: state.app.countriesLoadFailed
});


// const dateSelector = (state) => {
//     if (state.form && state.form.search && state.form.search.values)
//         return state.form.search.values.page
// }

const mapDispatchToProps = (dispatch) => ({
    loadCountries: (game, date) => loadCountries(dispatch, game, date)
});

const ConnectedSchedule = connect(mapStateToProps, mapDispatchToProps)(Schedule);

export default ConnectedSchedule;