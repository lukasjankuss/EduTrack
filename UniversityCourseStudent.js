import React from 'react';

class UniversityCourseStudent extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h1>Student Id: {this.props.studentId}</h1>
        <h1>Course Name: {this.props.courseName}</h1>
        <h1>Course Start Date: {this.props.courseStartDate}</h1>
      </div>
    );
  }
}

export default UniversityCourseStudent;
