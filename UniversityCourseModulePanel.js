import React, {useState} from 'react';
import Module from './Module';

const UniversityCourseModulePanel = () => {
    const [moduleName, setModuleName] = useState('');
    const [moduleCode, setModuleCode] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [courseName, setCourseName] = useState('');
    const submitHandler = () => {
        const str = `
        Module Name: ${moduleName}
        Module Code: ${moduleCode}
        Start Date: ${startDate}
        End Date: ${endDate}
        Course Name: ${courseName}
        List of Modules: ${Module}
        `;
        window.alert(str);
    };
    return (
        <div>
            <h3>Enter the details:</h3>
            Module Name:
            <input
                type="text"
                value={moduleName}
                onChange={(ev) => setModuleName(ev.target.value)}
            />
            <br/>
            Module Code:
            <input
                type="text"
                value={moduleCode}
                onChange={(ev) => setModuleCode(ev.target.value)}
            />
            <br/>
            Start Date:
            <input
                type="text"
                placeholder="DD/MM/YY"
                value={startDate}
                onChange={(ev) => setStartDate(ev.target.value)} 
            />
            <br/>
            End Date:
            <input
                type="text"
                placeholder="DD/MM/YY"
                value={endDate}
                onChange={(ev) => setEndDate(ev.target.value)}
            />
            <br/>
            Course Name:
            <input
                type="text"
                value={courseName}
                onChange={(ev) => setCourseName(ev.target.value)} 
            />
            <br/>
            <button onClick={submitHandler}>Submit</button>
        </div>
    );
};

export default UniversityCourseModulePanel;
