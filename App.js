import React from 'react';
import UniversityCourseStudent from './UniversityCourseStudent';
import UniversityCourseModulePanel from './UniversityCourseModulePanel';
import ReactDOM from 'react-dom';
import './App.css';
import Module from './Module';



class App extends React.Component{
  render() {
    const courses = [
      ["Computer Science"],
        ["Databases"],
        ["Cybersecurity"],
        ["Artifical Intelligence"]
        ];
    return (
      <div>
        <div className="App">
          <h1>Student Details:</h1>
            <UniversityCourseStudent
              name="Lukas"
              studentId="21420664"
              courseName="Computer Science"
              courseStartDate="08/05/2019"/>
        </div>
        <div className="App2">
        <UniversityCourseModulePanel />
        </div>
        <div className="App3">
        <Module Module={courses}/>
        </div>
      </div>
    );
  }
}
export default App;
ReactDOM.render(<App/>, document.getElementById('root'));
