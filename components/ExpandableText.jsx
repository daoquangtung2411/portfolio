import React, { useState } from 'react';

const ExpandableText = ({
  text,
  previewLength = 150,
  fontSize = '14px',
  lineHeight = 1.5
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = text.length > previewLength;

  return (
    <p
      style={{
        margin: '10px 0',
        fontSize,
        lineHeight,
        color: '#333'
      }}
    >
      {shouldTruncate && !isExpanded
        ? text.slice(0, previewLength) + '...'
        : text}

      {shouldTruncate && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            marginLeft: '6px',
            color: '#360f5a',
            cursor: 'pointer',
            fontWeight: 600,
            whiteSpace: 'nowrap'
          }}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </span>
      )}
    </p>
  );
};

export default ExpandableText;
