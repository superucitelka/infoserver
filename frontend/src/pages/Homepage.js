import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CategoriesList } from '../components/Category/CategoriesList';
import { BlockHeading } from '../components/BlockHeading';

export default function Homepage() {
    return (
        <Container fluid>
            <Row sm={1} md={2} lg={3}>
                <Col>
                    <BlockHeading title='Kategorie' />
                    <CategoriesList />
                </Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
}