import React, { Component } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
//import "./../../../Styles/Citas.scss";
import { Button } from "@material-ui/core";
class Agenda extends Component {

    state = {
        startDate: new Date(),
        show: false,
        iseditdelete: false,
        addneweventobj: null,
        isnewevent: false,
        event_title: "",
        category_color: "",
        weekendsVisible: true,
        currentEvents: [],
       
        defaultEvents: [
            {
                title: "Gianluca",
                start: Date.now() + 148000000,
                className: "bg-purple",
            },
            {
                title: "Paolo",
                start: Date.now(),
                end: Date.now(),
                className: "bg-success",
            },
            {
                title: "André",
                start: Date.now() + 168000000,
                className: "bg-info",
            },
            {
                title: "Renato",
                start: Date.now() + 338000000,
                className: "bg-primary",
            },
        ],
    };

    handleChange = (date) => {
        this.setState({
            startDate: date,
        });
    };

    handleClose = () => {
        this.setState({
            isnewevent: false,
            iseditdelete: false,
            show: false,
        });
    };
    handleEventClick = (clickInfo) => {
        this.setState({
            iseditdelete: true,
            event_title: clickInfo.event.title,
            calenderevent: clickInfo.event,
        });
    };

    handleDateSelect = (selectInfo) => {
        this.setState({
            isnewevent: true,
            addneweventobj: selectInfo,
        });
    };
    addnewevent() {
        const { event_title, category_color, addneweventobj } = this.state;
        let calendarApi = addneweventobj.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (event_title) {
            calendarApi.addEvent({
                id: 10,
                title: event_title,
                className: category_color,
                start: addneweventobj.startStr,
                end: addneweventobj.endStr,
                allDay: addneweventobj.allDay,
            });
        }
        this.setState({ isnewevent: false });
    }

    onupdateModalClose() {
        this.setState({
            iseditdelete: false,
            event_title: "",
        });
    }
    oncreateeventModalClose() {
        this.setState({
            isnewevent: false,
            event_title: "",
        });
    }
    handleEventClick = (clickInfo) => {
        this.setState({
            iseditdelete: true,
            event_title: clickInfo.event.title,
            calenderevent: clickInfo.event,
        });
    };
    removeevent() {
        const { calenderevent } = this.state;
        calenderevent.remove();
        this.setState({ iseditdelete: false });
    }
    clickupdateevent() {
        const { defaultEvents, calenderevent, event_title } = this.state;
        const newArray = defaultEvents;
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].id === parseInt(calenderevent.id)) {
                newArray[i].title = event_title;
            }
        }
        this.setState({ defaultEvents: newArray, iseditdelete: false });
    }

    handleClick() {
        this.setState({
            show: true,
        });
    }
    componentDidMount() {
        //this.props.makeSubtitulo("Mi calendario de citas");
        this.props.makeSubtitulo("MI CALENDARIO DE CITAS");

    }

    render() {
        const { defaultEvents } = this.state;

        return (
            <div
                style={{
                    padding: "0 6%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div style={{ alignSelf: "flex-end" }}>
                    <Button color="primary" variant="contained">
                        Nuevo Evento
          </Button>
                    <br />
                    <br />
                </div>

                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={this.state.weekendsVisible}
                    initialEvents={defaultEvents} // alternatively, use the `events` setting to fetch from a feed
                    select={this.handleDateSelect}
                    // eventContent={renderEventContent} // custom render function
                    eventClick={(clickInfo) => this.handleEventClick(clickInfo)}
                // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                                    eventAdd={function(){}}
                                    eventChange={function(){}}
                                    eventRemove={function(){}}
                                    */
                />
            </div>
        );
    }

    rendereventclick() {
        const { event_title } = this.state;

        return (
            <form className="event-form">
                <label>Change event name</label>
                <div className="input-group">
                    <input
                        className="form-control"
                        type="text"
                        value={event_title}
                        onChange={(event) =>
                            this.setState({ event_title: event.target.value })
                        }
                    />
                    <span className="input-group-append">
                        <button
                            type="button"
                            className="btn btn-success btn-md"
                            onClick={() => this.clickupdateevent()}
                        >
                            Save
                </button>
                    </span>
                </div>
            </form>
        );
    }
    renderaddnewevent() {
        const { event_title } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="control-label">Event Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="title"
                                value={event_title}
                                onChange={(event) =>
                                    this.setState({ event_title: event.target.value })
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="control-label">Category</label>
                            <select
                                className="select form-control"
                                name="category"
                                onChange={(event) =>
                                    this.setState({ category_color: event.target.value })
                                }
                            >
                                <option value="bg-danger">Danger</option>
                                <option value="bg-success">Success</option>
                                <option value="bg-purple">Purple</option>
                                <option value="bg-primary">Primary</option>
                                <option value="bg-pink">Pink</option>
                                <option value="bg-info">Info</option>
                                <option value="bg-inverse">Inverse</option>
                                <option value="bg-orange">Orange</option>
                                <option value="bg-brown">Brown</option>
                                <option value="bg-teal">Teal</option>
                                <option value="bg-warning">Warning</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
    


export default Agenda;