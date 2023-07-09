import { useState } from 'react';
import {evaluate} from 'mathjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./calc.css";

const Calc=()=>{
    const [data, setData]=  useState("")
    const [sin, setSin]=  useState("")
    const calculate = (e) =>{
        setData(data+e.target.value)
    };
    const clear = (e) =>{
        setData("")
    };
    const bkspc = (e) =>{
        setData(data)
    };
    const sub = () =>{
        setData((data) => evaluate(data))
    };
    const expand = (e) =>{
        
    };

    return(
    <Container fluid className='my-5'>
      <Row>
        <Col xs={1} md={2} lg={3} xl={4}></Col>
        <Col className='p-5' id='main'>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <Form.Control placeholder={data} aria-describedby="basic-addon1"/>
                    </InputGroup>
                </Col>
            </Row>
            <Row className='my-4'>
                <Col>
                    <Button type="button" value="C"  variant="light" className='inpbtn' onClick={clear}>C</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="bkspc"  variant="light" className='inpbtn' onClick={bkspc}><i className="fa-solid fa-delete-left fa-lg"></i></Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="%"  variant="light" className='inpbtn' onClick={calculate}>%</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="/"  variant="light" className='inpbtn' onClick={calculate}>/</Button>{' '}
                </Col>
            </Row>
            <Row className='my-4'>
                <Col>
                    <Button type="button" value="7"  variant="light" className='inpbtn' onClick={calculate}>7</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="8"  variant="light" className='inpbtn' onClick={calculate}>8</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="9"  variant="light" className='inpbtn' onClick={calculate}>9</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="*"  variant="light" className='inpbtn' onClick={calculate}>*</Button>{' '}
                </Col>
            </Row>
            <Row className='my-4'>
                <Col>
                    <Button type="button" value="4"  variant="light" className='inpbtn' onClick={calculate}>4</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="5"  variant="light" className='inpbtn' onClick={calculate}>5</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="6"  variant="light" className='inpbtn' onClick={calculate}>6</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="-"  variant="light" className='inpbtn' onClick={calculate}>-</Button>{' '}
                </Col>
            </Row>
            <Row className='my-4'>
                <Col>
                    <Button type="button" value="1"  variant="light" className='inpbtn' onClick={calculate}>1</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="2"  variant="light" className='inpbtn' onClick={calculate}>2</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="3"  variant="light" className='inpbtn' onClick={calculate}>3</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="+"  variant="light" className='inpbtn' onClick={calculate}>+</Button>{' '}
                </Col>
            </Row>
            <Row className='my-4'>
                <Col>
                    <Button type="button" value="00"  variant="light" className='inpbtn' onClick={calculate}>00</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="0"  variant="light" className='inpbtn' onClick={calculate}>0</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="."  variant="light" className='inpbtn' onClick={calculate}>.</Button>{' '}
                </Col>
                <Col>
                    <Button type="button" value="="  variant="light" className='inpbtn' onClick={sub}>=</Button>{' '}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button type='button' variant='dark' className='inpbtn' onClick={expand}><i className="fa-solid fa-chevron-down fa-bounce fa-xl"></i></Button>
                </Col>
            </Row>
        </Col>
        <Col xs={1} md={2} lg={3} xl={4}></Col>
      </Row>
    </Container>
    );
}

export default Calc