import './forms.css';

export default function Forms({ personal, education, experience, skills}) {
    const experienceItems = experience.list.map((exp, idx) => (
        <li key={idx}>
            <h3 className='regular bold'>Work experience {idx + 1}</h3>
            <div className='form-row'>
                <label htmlFor={exp.title + idx}>Title</label>
                <input type="text" className='experienceEntry' id={exp.title + idx} name={exp.title + idx} 
                value={exp.title}
                disabled></input>
            </div>
            <div className='form-row'>
                <label htmlFor={exp.company + idx}>Company</label>
                <input type="text" className='experienceEntry' id={exp.company + idx} name={exp.company + idx} 
                value={exp.company}
                disabled></input>
            </div>
            <div className='form-row'>
                <label htmlFor='startDate'>Start Date</label>
                <input type='date' id='startDate' className='startDate' name='startDate'
                value={exp.startDate}
                disabled></input>
            </div>
            <div className='form-row'>
                <label htmlFor='endDate'>End Date</label>
                <input type='date' id='endDate' className='endDate' name='endDate'
                value={exp.endDate}
                disabled></input>
            </div>
            <div className='form-row'>
                <label htmlFor={exp.details + idx}>Title</label>
                <textarea name={exp.details + idx} id={exp.details + idx}
                value={exp.details}
                disabled></textarea>
            </div>
            <button onClick={(e) => experience.onDelete(e, idx)}>delete</button>
        </li>
    ));

    const skillItems = skills.data.map((skill, idx) => (
        <li>
            <div className='form-row'>
                <label htmlFor={`skill + ${idx}`}>Skill {idx + 1}</label>
                <input id={`skill + ${idx}`} className={`skill + ${idx}`} name={`skill + ${idx}`}
                    value={skill}
                    type='text'
                    disabled>
                </input>
            </div>
        </li>
    ));

    return (
        <>
            <div className='forms'>
                <section className='general-info'>
                    <form className='general form'>
                        <h2 className='large bold'>Personal Details</h2>
                        <div class='form-row'>
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id='fullName' className="fullName" name="fullName"
                            placeholder="firstName lastName"
                            value={personal.data.fullName}
                            onChange={personal.onChange}/>
                        </div>
                        <div class='form-row'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' className="email" name="email"
                            placeholder="example@email.com"
                            value={personal.data.email}
                            onChange={personal.onChange}/>
                            <span className='emailError'></span>
                        </div>
                        <div class='form-row'>
                            <label htmlFor="phoneNo">Phone Number</label>
                            <input type="text" id='phoneNo' className="phoneNo" name="phoneNo"
                            placeholder='+61 333 333 333'
                            value={personal.data.phoneNo}
                            onChange={personal.onChange}/>
                        </div>
                        <div class='form-row'>
                            <label htmlFor="address">Address</label>
                            <input type="text" id='address' className="address" name="address"
                            placeholder='City, State'
                            value={personal.data.address}
                            onChange={personal.onChange}/>
                        </div>
                    </form>
                </section>
                <section className='education'>
                    <form className='education form'>
                        <h2 className='large bold'>Education</h2>
                        <div className='form-row'>
                            <label htmlFor="school">School</label>
                            <input type='text' id="school" className='school' name='school'
                            placeholder='University'
                            value={education.data.school}
                            onChange={education.onChange}></input>
                        </div>
                        <div className='form-row'>
                            <label htmlFor="degree">Degree</label>
                            <input type='text' id="degree" className='degree' name='degree'
                            placeholder='Degree'
                            value={education.data.degree}
                            onChange={education.onChange}></input>
                        </div>
                        <div className='form-row'>
                            <label htmlFor='startDate'>Start Date</label>
                            <input type='date' id='startDate' className='startDate' name='startDate'
                            value={education.data.startDate}
                            onChange={education.onChange}></input>
                        </div>
                        <div className='form-row'>
                            <label htmlFor='endDate'>End Date</label>
                            <input type='date' id='endDate' className='endDate' name='endDate'
                            value={education.data.endDate}
                            onChange={education.onChange}></input>
                        </div>
                        <div className='form-row'>
                            <label htmlFor='location'>Location</label>
                            <input type='text' id='location' className='location' name='location'
                            value={education.data.location}
                            onChange={education.onChange}></input>
                        </div>
                    </form>
                </section>
                <section className='experience'>
                    <form className='experience form'>
                        <h2 className='large bold'>Work Experience</h2>
                        <ul>
                            {experienceItems}
                        </ul>
                        <h2 className='regular bold'>New experience</h2>
                        <div className='form-row'>
                            <label htmlFor="title">Title</label>
                            <input type='text' id='title' className='title' name='title'
                            value={experience.form.title}
                            onChange={experience.onChange}></input>
                        </div>
                        <div className='form-row'>
                            <label htmlFor='company'>Company</label>
                            <input type="text" className='company' id='company' name='company' 
                            value={experience.form.company}
                            onChange={experience.onChange}></input>
                        </div>
                        <div className='form-row'>
                            <label htmlFor='startDate'>Start Date</label>
                            <input type='date' id='startDate' className='startDate' name='startDate'
                            value={experience.form.startDate}
                            onChange={experience.onChange}></input>
                        </div>
                        <div className='form-row'>
                            <label htmlFor='endDate'>End Date</label>
                            <input type='date' id='endDate' className='endDate' name='endDate'
                            value={experience.form.endDate}
                            onChange={experience.onChange}></input>
                        </div>
                        <div className='form-row'>
                            <label htmlFor='details'>Details</label>
                            <textarea name='details' id='details'
                            value={experience.form.details}
                            onChange={experience.onChange}></textarea>
                        </div>
                        <button onClick={experience.onAdd}>Add</button>
                    </form>
                    <p>{experience.list.length}</p> 
                </section>
                <section className='skills'>
                    <form className='skills form'>
                        <h2 className='large bold'>Skills</h2>
                        <ul>
                            {skillItems}
                        </ul>
                        <div className='form-row'>
                            <label htmlFor="skill">Add new skill</label>
                            <input type='text' id='skill' className='skill' name='text'
                            value={skills.input}
                            onChange={skills.onChange}></input>
                        </div>
                        <button 
                        onClick={skills.onAdd}>add skill</button>
                    </form>
                </section>
            </div>
        </>
    );
}

