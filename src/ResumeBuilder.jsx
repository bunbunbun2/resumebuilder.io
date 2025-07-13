import { useState } from "react";
import './resumeBuilder.css';
import Resume from './Resume.jsx';
import Forms from './Forms.jsx';

export default function ResumeBuilder() {
    const [personalDetails, setPersonalDetails] = useState({
        fullName: '',
        email: '',
        phoneNo: '',
        address: ''
    });

    const [workExperience, setWorkExperience] = useState([]);
    
    const [education, setEducation] = useState({
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
    });

    const [workExpForm, setWorkExpForm] = useState({
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        details: '',
    });

    const [skillsInput, setSkillsInput] = useState('');
    const [skills, setSkills] = useState([]);

    function handlePersonalInput(e) {
        const { name, value } = e.target;
        setPersonalDetails((prevPersonalDetails) => ({
            ...prevPersonalDetails, 
            [name]: value,
        }));

    }
    
    function handleEducationInput(e) {
        const { name, value } = e.target;
        setEducation((prevEducation) => ({
            ...prevEducation, 
            [name]: value,
        }));
    }

    function handleExperienceInput(e) {
        const { name, value } = e.target;
        setWorkExpForm((prevWorkExpForm) => ({
            ...prevWorkExpForm,
            [name]: value
        }));
    }

    function onAddExperience(e) {
        e.preventDefault();

        setWorkExperience([...workExperience, {
            title: workExpForm.title,
            company: workExpForm.company,
            startDate: workExpForm.startDate,
            endDate: workExpForm.endDate,
            details: workExpForm.details        
        }]);

        setWorkExpForm({
            title: '',
            company: '',
            startDate: '',
            endDate: '',
            details: '',
        });
    }

    function onDeleteExperience(e, idx) {
        e.preventDefault();

        setWorkExperience((prevWorkExperience) =>
            prevWorkExperience.filter((_, i) => i !== idx)
        );
    }

    function handleSkillsInput(e) {
        const { value } = e.target;

        setSkillsInput(value);
    }

    function onAddSkill(e) {
        e.preventDefault();

        if (!skills.find((skill) => skill.toLowerCase() === skillsInput.toLowerCase())) {
            setSkills([...skills, skillsInput]);
            setSkillsInput('');
        }
    }

    function onDeleteSkill(e, idx) {
        e.preventDefault();

        setSkills((prevSkills) => (
            prevSkills.filter((_, i) => i != idx)
        ));
    }

    return (
        <>
            <div className="forms-container">
                <Forms 
                personal={{data: personalDetails, onChange: handlePersonalInput}}
                education={{data: education, onChange: handleEducationInput}}
                experience={{
                    list: workExperience, 
                    form: workExpForm, 
                    onChange: handleExperienceInput, 
                    onAdd: onAddExperience,
                    onDelete: (e, idx) => onDeleteExperience(e, idx) 
                }}
                skills={{
                    data: skills,
                    input: skillsInput,
                    onChange: handleSkillsInput,
                    onAdd: onAddSkill,
                    onDelete: onDeleteSkill,
                }}></Forms>
            </div>
            <div className="resume-container">
                <Resume
                personalDetails={personalDetails}
                education={education}
                experience={workExperience}
                skills={skills}></Resume>
            </div>
        </>
    )
}