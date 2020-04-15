import React from 'react';
import {useFormik, Form, Field} from 'formik';
import {Card, Button} from 'react-bootstrap';

const inputForm = () => {
    const formik = useFormik({
            initialValues:{
                name: '',
                born: '',
                died: '',
                description:'',
                establishment:'',
                imgUrl:''
            },
            onSubmit: values => {
                console.log(values);
                
            },
        });
        return (
            <Form onSubmit={formik.handleSubmit}>
                <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                 <Field
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    name="name"
                    placeholder="Name"
                    />
                    <br/>
                <Field
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.born}
                    name="born"
                    placeholder="Born"
                    />
                    <br/>
                <Field
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.died}
                    name="died"
                    placeholder="Died"
                    />
                    <br/>
                <Field
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    name="description"
                    placeholder="Description"
                    />
                    <br/>
                <Field
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.establishment}
                    name="establisment"
                    placeholder="Establishment"
                    />
                    <br/>
                <Field
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.imgUrl}
                    name="imgUrl"
                    placeholder="Image Url"
                    />
                   <Button variant="primary">Add Heroes</Button>
                </Card.Body>
                </Card>
            </div>
            </Form>
    );          
};

export default inputForm;