import React from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

const SkillSection = ({ skills, onChange }) => {
  return (
    <div>
      <h2>Skills</h2>
      <div className="form-group">
        <TagsInput value={skills} onChange={onChange} />
      </div>
    </div>
  );
};

export default SkillSection;
