import React, { Component } from "react";
import dateFns from "date-fns";

class Calendar extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
  };

  renderHeader() {}

  renderDays() {}

  renderCells() {}

  onDateClick = (day) => {};

  nextMonth = () => {};

  prevMonth = () => {};

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}

        <div>Header</div>
        <div>Days</div>
        <div>Cells</div>
      </div>
    );
  }
}

export default Calendar;
