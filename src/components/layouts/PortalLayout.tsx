import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from '../views/organisms/NavMenu';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu/>
        <Container fluid>
            {props.children}
        </Container>
    </React.Fragment>
);
