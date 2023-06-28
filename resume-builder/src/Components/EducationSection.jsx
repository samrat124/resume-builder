import React from 'react';

const EducationSection = ({ education, onChange, onAdd }) => {
  return (
    <div>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <div className="form-group">
            <label>Institute:</label>
            <input
              type="text"
              className="form-control"
              value={edu.institute}
              onChange={(e) => onChange(index, 'institute', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Year:</label>
            <input
              type="text"
              className="form-control"
              value={edu.year}
              onChange={(e) => onChange(index, 'year', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Degree:</label>
            <input
              type="text"
              className="form-control"
              value={edu.degree}
              onChange={(e) => onChange(index, 'degree', e.target.value)}
            />
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-secondary" onClick={onAdd}>
        Add Education
      </button>
    </div>
  );
};

export default EducationSection;
