import './Codefiles.css'

function CodeFiles({ files, nfiles }) {

    return (
        <div className='project_files_v'>
            <ul>
                {files.map((file, index) => (
                    <li key={index}>{file}</li>
                ))}
            </ul>
        </div>
    )



} 

export default CodeFiles