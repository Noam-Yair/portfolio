import { useForm } from 'react-hook-form';
import './Page.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Grid from "@mui/material/Grid";
import React from "react";
import Button from "@mui/material/Button";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    // Function that displays a success toast on bottom right of the page when form submission is successful
    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };

            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );

            reset();
            toastifySuccess();
        } catch (e) {
            console.log(e);
        }
    };

    return (
            <div className='row'>
                <div className='col-12 text-center'>
                    <div className='contactForm'>
                        <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
            <Grid item xs={0} sm={2} md={3}/>
            <Grid item xs={6} sm={4} md={3} sx={{height: "30vh", display: "block", width: "50vw"}}>
                {/*<form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>*/}
                <br/>
                <input
                    type='text'
                    name='name'
                    {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                        }
                    })}
                    className='form-control-formInput'
                    placeholder='Name'
                ></input>
                <br/>
                {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                <input
                    type='email'
                    name='email'
                    {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })}
                    className='form-control-formInput'
                    placeholder='Email address'
                ></input>
                <br/>
                {errors.email && (
                    <span className='errorMessage'>Please enter a valid email address</span>
                )}
                <input
                    type='text'
                    name='subject'
                    {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                        }
                    })}
                    className='form-control-formInput'
                    placeholder='Subject'
                ></input> <br/>
                {errors.subject && (
                    <span className='errorMessage'>{errors.subject.message}</span>
                )}
                {/*</form>*/}
            </Grid>
            <Grid item xs={6} sm={4} md={3} sx={{height: "30vh", width: "50vw"}}>
                    <textarea
                        rows={3}
                        name='message'
                        {...register('message', {
                            required: true
                        })}
                        className='form-control-formInput'
                        style={{height: "22vh"}}
                        placeholder='Message'
                    ></textarea>
                {errors.message && <span className='errorMessage'>Please enter a message</span>}
            </Grid>
            <Grid item xs={0} sm={2} md={3}/>
        </Grid>
                            <Button className='submit-btn' type='submit' variant="contained">Submit</Button>
                        </form>
                        <ToastContainer />

                </div>
            </div>
        </div>
    );
};

export default ContactForm;