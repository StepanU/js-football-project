import TextField from "@material-ui/core/TextField/TextField";
import {Field, reduxForm} from 'redux-form'
import React from "react";

const validate = values => {

    const errors = {}
    const requiredFields = [ 'page' ]
    requiredFields.forEach(field => {
        if (!values[ field ]) {
            errors[ field ] = 'Required'
        }
    })
    if (values.page && values.page < '2000-01-01') {
        errors.page = 'Invalid date'
    }
    return errors
}

const AdaptedTextField = ({input: {value, onChange}, ...custom}) => (
    <TextField
        value={value}
        onChange={onChange}
        {...custom}
        type={'date'} margin='normal'

    />

);

const ShowCurrentDate = () => {

    var date = new Date().getDate()
    if (date<10){
        date = '0' + date
    }
    var month = new Date().getMonth() + 1;
    if (month<10){
        month = '0' + month
    }
    var year = new Date().getFullYear();
    return year + '-' + month + '-' + date;

}



const Search = () => (
    <form>
        <Field component={AdaptedTextField} name="page" margin="normal" />
    </form>
);

const initialValues = {
    page: ShowCurrentDate()
};

export default reduxForm({form: 'search', initialValues, validate})(Search);
