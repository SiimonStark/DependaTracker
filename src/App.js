import React from 'react';
import './App.css';
import {Accordion, Card} from "react-bootstrap";

function App() {
  let applications = 0;
  let responses = 0;
  let interviews = 0;

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <h1 className="navbar-brand">
          <img
            src="/docs/4.4/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Dependa-Tracker
        </h1>
      </nav>
      <main>
        <Accordion defaultActiveKey="1">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Habit Tracker
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="card-body container">
                  <h4>Days This Month:</h4>
                  <div className="row">test</div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Stats
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="container row m-auto p-4">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Applications Sent Out</h5>
                        <h2 className="card-subtitle mb-2 text-muted">
                          {applications}
                        </h2>
                        <button
                          href="#"
                          className="btn btn-secondary btn-lg disabled"
                          tabIndex="-1"
                          aria-disabled="true"
                        >
                          <i className="fas fa-chevron-down"></i>
                        </button>
                        <button
                          href="#"
                          className="btn btn-primary btn-lg m-2"
                          tabIndex="-1"
                          aria-disabled="false"
                        >
                          <i className="fas fa-chevron-up"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Responses</h5>
                        <h2 className="card-subtitle mb-2 text-muted">
                          {responses}
                        </h2>
                        <button
                          href="#"
                          className="btn btn-secondary btn-lg disabled"
                          tabIndex="-1"
                          aria-disabled="true"
                        >
                          <i className="fas fa-chevron-down"></i>
                        </button>
                        <button
                          href="#"
                          className="btn btn-primary btn-lg m-2"
                          tabIndex="-1"
                          aria-disabled="false"
                        >
                          <i className="fas fa-chevron-up"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Interview</h5>
                        <h2 className="card-subtitle mb-2 text-muted">
                          {interviews}
                        </h2>
                        <button
                          href="#"
                          className="btn btn-secondary btn-lg disabled"
                          tabIndex="-1"
                          aria-disabled="true"
                        >
                          <i className="fas fa-chevron-down"></i>
                        </button>
                        <button
                          href="#"
                          className="btn btn-primary btn-lg m-2"
                          tabIndex="-1"
                          aria-disabled="false"
                        >
                          <i className="fas fa-chevron-up"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </main>
    </div>
  );
}

export default App;
