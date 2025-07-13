import './resume.css'

export default function Resume({personalDetails, education, experience, skills}) {
    const expEntry = experience.map((exp, id) => (
        <li key={id}>
            <div className='exp-info'>
                <p className='regular bold'>{exp.title} | {exp.company}</p>
                <p className='regular'>{exp.startDate} - {exp.endDate}</p>
            </div>
            <p className='regular exp-details'>{exp.details}</p>
        </li>
    ));

    const skillsList = skills.map((skill, idx) => {
        return <span key={idx}>
            {skill}
            {idx !== skills.length - 1 && ', '}
        </span>
    });

    return (
        <>
            <header className='fullName'>
                <h2>{personalDetails.fullName}</h2>
            </header>
            <section className='personal-details'>
                <div id='email'>{personalDetails.email}</div>
                <div id='phoneno'>{personalDetails.phoneNo}</div>
                <div id='address'>{personalDetails.address}</div>
            </section>
            <section className="Education">
                <h3 className='large bold'>Education</h3>
                <hr></hr>
                <div className='education-info'>
                    <p className='regular bold'>{education.school} | <span className="regular thin">{education.location}</span></p>
                    <p className='duration regular'>{education.startDate} - {education.endDate}</p>
                </div>
                <p className='regular thin'>{education.degree}</p>
            </section>
            <section className='experience'>
                <h3 className='large bold'>Experience</h3>
                <hr></hr>
                <ul>
                    {expEntry}
                </ul>
            </section>
            <section className='Additional Information'>
                <h3 className='large bold'>Additional Information</h3>
                <hr />
                <div>
                    <span className='regular bold'>Skills: </span>
                    {skillsList}
                </div>
            </section>
        </>
    );
}