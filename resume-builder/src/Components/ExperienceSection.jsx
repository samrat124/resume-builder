import React from 'react';

const ExperienceSection = ({ experience, onChange, onAdd }) => {
  return (
    <div>
      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <div className="form-group">
            <label>Company:</label>
            <input
              type="text"
              className="form-control"
              value={exp.company}
              onChange={(e) => onChange(index, 'company', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Year:</label>
            <input
              type="text"
              className="form-control"
              value={exp.year}
              onChange={(e) => onChange(index, 'year', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Designation:</label>
            <input
              type="text"
              className="form-control"
              value={exp.designation}
              onChange={(e) => onChange(index, 'designation', e.target.value)}
            />
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-secondary" onClick={onAdd}>
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceSection;
