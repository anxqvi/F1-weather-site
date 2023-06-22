import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Today from '../Today';
import TodayDetails from '../TodayDetails';
import FutureForecast from '../FutureForecast';
import styles from './Forecast.module.css';

// Puts together the cards from Today and FutureForecast and displays the entire weather forecast on one card for present and future weather
const Forecast = ({ forecast }) => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={4}>
                <div className={styles.card}>
                    <Today {...forecast.today} />
                </div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                <TodayDetails forecast={forecast.todayDetails} />
                <FutureForecast days={forecast.future} />
            </Col>
        </Row>
    </Container>
);

export default Forecast;
