import React from 'react'

const JsonToHtml = ({ data }) => {
    const renderValue = (value) => {
        if (typeof value === 'object' && !Array.isArray(value)) {
          return renderHtml(value); // Recursively render nested objects
        } else {
          return <span>{value}</span>; // Render non-object values
        }
      };
    
      const renderHtml = (obj) => {
        return Object.entries(obj).map(([key, value]) => (
          <div key={key}>
            <strong>{key}: </strong>
            {renderValue(value)}
          </div>
        ));
      };
    
      return <div>{renderHtml(data)}</div>;
  };

export default JsonToHtml