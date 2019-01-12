import React, { Component } from 'react';


import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Link from './Link';

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 49px;
`

class Header extends Component{
    render() {
        return (
            <Row>
                <Col lg={12}>
                    <nav>
                        <List>
                            <Link link="#" text="Вызов мастера" />
                            <Link link="#" text="Вызов мастера" />
                            <Link link="#" text="Вызов мастера" />
                            <Link link="#" text="Вызов мастера" />
                            <Link link="#" text="Вызов мастера" />
                            <Link link="#" text="Вызов мастера" />
                            <Link link="#" text="Вызов мастера" />
                            <Link link="#" text="Вызов мастера" />
                        </List>
                    </nav>
                </Col>
            </Row>
        );
    }
}

export default Header;