import React, {Component} from 'react'
import Head from 'next/head'
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';

import Header from './Header';
import DisplayForm from './DisplayForm'

import UserForm from './UserForm';
import Social from './Social';

class Main extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Form Handler</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        </Head>
        <Header />
        <DisplayForm />
        <Row>
          <Col lg={6}>
            <UserForm />
          </Col>
          <Col lg={6}>
            <Social />            
          </Col>
        </Row>
      </div>
    )
  }
}

export default Main;