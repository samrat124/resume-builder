import React, { useState } from 'react';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillSection from './SkillSection';

const ResumeBuilder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institute: '', year: '', degree: '' }]);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: '', year: '', designation: '' }]);
  };

  const handleSkillChange = (value) => {
    setSkills(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container">
      <h1>Resume Builder</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <EducationSection
          education={education}
          onChange={handleEducationChange}
          onAdd={handleAddEducation}
        />
        <ExperienceSection
          experience={experience}
          onChange={handleExperienceChange}
          onAdd={handleAddExperience}
        />
        <SkillSection skills={skills} onChange={handleSkillChange} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResumeBuilder;
