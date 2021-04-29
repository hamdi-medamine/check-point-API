import React from 'react';
import User from './User';
import {Container,Row,Col} from 'react-bootstrap';
const UserList = ({userList}) => {
    
    return (
        <Container>
            <Row>
             {userList && userList.map((el)=> <Col lg="4"><User el= {el}/></Col>) }
             </Row>
        </Container>
    );
}

export default UserList;
