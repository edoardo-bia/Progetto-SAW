import React from 'react';
import './ProjectPage.css'
import Navbar from '../home/Navbar.jsx';
import CodeFiles from './CodeFiles'

function ProjectPage({pname, nfiles}) {

    pname = 'Ciao';

    const filesArray = ['File1.js', 'File2.html', 'File3.css', 'File4.py', 'File5.java'];
    nfiles = 5;

    return (
        <>
            <Navbar />
            <div className='ProjectPage'>
                <h1>Project {pname} </h1>
                <div className='description_projectPage'>
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam blanditiis enim explicabo nihil nulla, facere quo ipsa, quos id cupiditate corporis dolore fuga placeat. Sequi sint ullam magnam adipisci vel.</p>
                </div>
                <div className='project_files'>
                    <CodeFiles nfiles={5} files={filesArray}/>
                    <button>Download all</button>
                </div>
            </div>
        </>
    
    );
}

export default ProjectPage