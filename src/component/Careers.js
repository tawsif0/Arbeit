/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Careers.css'; // Custom CSS for styling

const Career = () => {
    // eslint-disable-next-line no-unused-vars
    const [jobs, setJobs] = useState([]); // State to store job circulars
    const [loading, setLoading] = useState(true); // State to track loading status
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null); // State to handle errors

    // Fetch job circulars from an API or static data
    useEffect(() => {
        // Static data for demonstration purposes
        // const fetchJobs = async () => {
        //     try {
        //         // Replace this with your actual API endpoint
        //         const response = await fetch('https://api.example.com/jobs');
        //         if (!response.ok) {
        //             throw new Error('Failed to fetch job circulars');
        //         }
        //         const data = await response.json();
        //         setJobs(data);
        //     } catch (err) {
        //         setError(err.message);
        //     } finally {
        //         setLoading(false);
        //     }
        // };
        // const staticJobs = [
        //     {
        //         id: 1,
        //         title: 'Frontend Developer',
        //         location: 'Remote',
        //         type: 'Full-time',
        //         description: 'We are looking for a skilled Frontend Developer to join our team.',
        //         applyLink: 'https://example.com/apply/1'
        //     },
        //     {
        //         id: 2,
        //         title: 'Backend Developer',
        //         location: 'Dhaka, Bangladesh',
        //         type: 'Full-time',
        //         description: 'We are hiring a Backend Developer with experience in Node.js and MongoDB.',
        //         applyLink: 'https://example.com/apply/2'
        //     },
        //     {
        //         id: 3,
        //         title: 'UI/UX Designer',
        //         location: 'Remote',
        //         type: 'Part-time',
        //         description: 'We need a creative UI/UX Designer to design user-friendly interfaces.',
        //         applyLink: 'https://example.com/apply/3'
        //     }
        // ];

        // setJobs(staticJobs);
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="career-loading-text">Loading job circulars...</div>;
    }

    if (error) {
        return <div className="career-error-text">Error: {error}</div>;
    }

    return (
        <Container className="career-container">
            <h1 className="career-main-title">Join Our Team</h1>
            <Row className="career-job-grid">
                {jobs.length > 0 ? (
                    jobs.map((job) => (
                        <Col key={job.id} md={6} lg={4} className="career-job-col">
                            <Card className="career-job-card">
                                <Card.Body className="career-job-card-body">
                                    <Card.Title className="career-job-title">{job.title}</Card.Title>
                                    <Card.Subtitle className="career-job-subtitle">
                                        {job.location} | {job.type}
                                    </Card.Subtitle>
                                    <Card.Text className="career-job-description">{job.description}</Card.Text>
                                    <Button className="career-apply-button" href={job.applyLink} target="_blank" rel="noopener noreferrer">
                                        Apply Now
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col className="career-no-jobs">
                        <p>No jobs available right at this moment.</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default Career;
