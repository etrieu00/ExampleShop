import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const NotificationTab = () => {
    const [news, setNews] = useState(false);
    const [story, setStory] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(news, story)
    };

    return (
        <>
            <h3>Notifications</h3>
            <Form onSubmit={submitHandler}>
                <Form.Check
                    className='my-2'
                    type='checkbox'
                    id='news'
                    checked={news}
                    onChange={() => setNews(!news)}
                    label='Subscribe to our news letter for the latest products' />
                <Form.Check
                    className='my-2'
                    type='checkbox'
                    id='story'
                    checked={story}
                    onChange={() => setStory(!story)}
                    label='Subscribe to our stories' />
                <Button className='my-3' type='submit' variant='primary'>
                    Update notifications
            </Button>
            </Form>
        </>
    );
};

export default NotificationTab;
