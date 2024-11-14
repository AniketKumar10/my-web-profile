import React from 'react';
import { TagCloud } from 'react-tagcloud';

const SkillsWordCloud = () => {
  const data = [
    { value: 'AWS', count: 30 },
    { value: 'ReactApp', count: 20 },
    { value: 'Azure', count: 15 },
    { value: 'Docker', count: 25 },
    { value: 'Numpy', count: 20 },
    { value: 'TensorFlow', count: 35 },
    { value: 'C++', count: 25 },
    { value: 'Git', count: 15 },
    { value: 'Java', count: 30 },
    { value: 'GCP', count: 35 },
    { value: 'Scikit-learn', count: 30 },
    { value: 'Mage.ai', count: 20 },
    { value: 'Python', count: 35 },
    { value: 'R', count: 20 },
    { value: 'ApacheSpark', count: 25 }
  ];

  return (
    <div className="flex items-center justify-center w-full h-full min-h-[300px]">
      <TagCloud 
        minSize={20}
        maxSize={40}
        tags={data}
        shuffle={false}
        onClick={tag => console.log('clicking on tag:', tag)}
        className="tag-cloud"
        style={{
          padding: 5,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
    </div>
  );
};

export default SkillsWordCloud;