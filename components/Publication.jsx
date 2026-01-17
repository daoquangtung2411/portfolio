import React from 'react';
import ExpandableText from './ExpandableText';

const Publications = ({ publications }) => {
    const groupedPublications = publications
    .slice()
    .sort((a, b) => b.year - a.year)
    .reduce((acc, pub) => {
        if (!acc[pub.year]) {
        acc[pub.year] = [];
        }
        acc[pub.year].push(pub);
        return acc;
    }, {});

    const years = Object.keys(groupedPublications)
    .sort((a, b) => b - a);

    return (

        <section style={{ marginBottom: '60px', textAlign: 'center', marginTop: '20px'}}>
  <h2
    style={{
      display: 'inline-block',
      marginBottom: '30px',
      paddingBottom: '2px',
      borderBottom: '3px solid #360f5a',
      color: '#1c0333',
      
    }}
  >
    Publications
  </h2>

  <div style={{ maxWidth: '900px', margin: '0 auto' }}>
    {years.map((year) => (
      <div key={year} style={{ marginBottom: '40px' }}>
        {/* YEAR HEADER */}
        <h3
          style={{
            textAlign: 'left',
            color: '#360f5a',
            marginBottom: '16px',
            fontSize: '18px'
          }}
        >
          {year}
        </h3>

        {/* PUBLICATIONS IN THIS YEAR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {groupedPublications[year].map((pub, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                padding: '20px',
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                flexWrap: 'wrap'
              }}
            >
              {/* IMAGE */}
              <div
                style={{
                  flex: '0 0 180px',
                  width: '180px',
                  height: '140px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginInline: 'auto'
                }}
              >
                <img
                  src={pub.image}
                  alt={pub.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* CONTENT */}
              <div style={{ flex: 1, minWidth: '260px', textAlign: 'left' }}>
                <h4
                  style={{
                    margin: '0 0 6px',
                    fontSize: '16px',
                    color: '#1c0333'
                  }}
                >
                  {pub.title}
                </h4>

                <p
                  style={{
                    margin: '0 0 4px',
                    fontSize: '13px',
                    fontStyle: 'italic',
                    color: '#555'
                  }}
                >
                  {pub.authors}
                </p>

                <p
                  style={{
                    margin: '0 0 10px',
                    fontSize: '13px',
                    color: '#555'
                  }}
                >
                  {pub.venue}
                </p>

                {/* ABSTRACT (2 lines) */}
                {/* <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    marginBottom: '10px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {pub.abstract}
                </p> */}
                <ExpandableText text={pub.abstract} />
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#360f5a',
                    marginBottom: '10px'
                  }}
                >
                  Keywords: {pub.keyword}
                </p>

                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#360f5a',
                    textDecoration: 'none'
                  }}
                >
                  Full text →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


    );

};

export default Publications