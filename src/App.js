import React, {Component} from 'react';
import './App.css';
import {Accordion, Card} from "react-bootstrap";

class App extends Component {
  constructor() {
    super()
    this.state = {
      stats : { applications: 0, responses: 0, interviews: 0 },
    }
  }
  
  componentDidMount() {
    this.setState({daysItems: this.createCalendar()});
  }

  createCalendar = () => {
    //* Used for habit tracking
    // Based on number of days in a month
      // Make sure that the day clicked, aligns with the correct day
    // Needs to have 3 optional states [clear, green, red]
    const daysInMonth = 30;
    let daysItems = []

    for (let i = 1; i <= daysInMonth; i++) {
      daysItems.push({i, stat: 'clear'})
    }

    return daysItems;
  }

  renderDays = () => {
    return this.state.daysItems.map(day => 
      <i className={'far fa-circle ' + day.stat} id={day.i} key={'day'+day.i} />
    )
  }

  handleHabit = (e) => {
    // Once calendar date has been clicked,
      // Based on data, update database!
    // Call updateDatabase(habit, data)
    console.log(e.target.name, e.target.type)
    this.updateDatabase('habit', {'month': 0, 'day': 0, 'status': 'clear'})
  }

  handleStatsTracker = (e) => {
    //If target name [Application, Response, Interview],
      // If target type [plus, minus],
        // Then notate whether it's incre/decre
    // Call updateDatabase(stats, data)
    console.log(e.target.name, e.target.type)
    this.updateDatabase('stats', { 'apps': 0, 'responses': 0, 'interviews': 0 })
  }

  updateDatabase = (collection, data) => {
    //!! Update DataBase w/ new data
    console.alert('sent to DB:', collection)
  }

  render() {
    console.log(this.state)

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
                    <div className="row d-flex justify-content-center">
                      <article className="calendar">
                        {this.state.daysItems && this.renderDays()}
                      </article>
                    </div>
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
                            {this.state.stats.applications}
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
                            {this.state.stats.responses}
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
                            {this.state.stats.interviews}
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
}

export default App;
