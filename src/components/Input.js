import React, {Component} from 'react';
import {Formik, Form, Field} from 'formik';
import cardImage from './cardimg.jpg'
import Axios from 'axios';
import './Style.css'


class Input extends Component{
    state = {
        data: []
    }

    handleSubmit = (values, actions) => {
    let data = [];
    const URL = `http://localhost:8000/heroes`
    Axios.post(URL,{
        values
    })
    .then(response => {
        actions.setSubmitting(false)
        actions.resetForm()
        alert('Successfully Submitted')
    })
    }
    render(){
        return(
            <Formik
            initialValues={{
                name: '',
                born: '',
                died:'',
                description:'',
                establishment:'',
                imgURL:''
            }}
            onSubmit={this.handleSubmit}
            render={formProps => {

                return(
                    <div className="isi">
                    <Form>
                        <div className="container">
                                <div className="col-sm-6">
                                    <div className="card" style={{width: '22rem'}}>
                                        <img src={cardImage} className="card-img-top" />
                                        <div className="card-body">
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    placeholder="Name of the heroes"/>
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="born"
                                                    placeholder="Year where the heroes born"/>
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="died"
                                                    placeholder="Year where the heroes died"/>
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="description"
                                                    placeholder="Description of the heroes"/>
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="establishment"
                                                    placeholder="Year of the heroes get establish"/>                                                    
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="imgUrl"
                                                    placeholder="Link of the heroes picture"/>                                                    
                                            </div>
                                            <button
                                            className="btn btn-info"
                                            type="submit"
                                            disabled={formProps.isSubmitting}>
                                            Submit
                                            </button>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Form>
                        </div>
                )
            }}
            />
            
        )
    }
}

export default Input