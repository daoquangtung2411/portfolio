import React from 'react';

const Research = ({ researchInterest }) => {

    return (

        <section style={{ marginBottom: '60px', textAlign: 'center', marginTop: '30px' }}>
            <h2
                style={{
                display: 'inline-block',
                marginBottom: '30px',
                paddingBottom: '2px',
                borderBottom: '3px solid #360f5a',
                color: '#1c0333'
                }}
            >
                Research Interests
            </h2>

            <div
                style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, 260px)',
                justifyContent: 'center',
                gap: '24px',
                maxWidth: '1100px',
                margin: '0 auto'
                }}
            >
                {researchInterest.map((item, idx) => (
                <div
                    key={idx}
                    style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                    textAlign: 'left'
                    }}
                >
                    {/* IMAGE */}
                    <div
                    style={{
                        width: '100%',
                        height: '160px',
                        overflow: 'hidden',
                        backgroundColor: '#ffffff'
                    }}
                    >
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                        }}
                    />
                    </div>

                    {/* CONTENT */}
                    <div style={{ padding: '16px' }}>
                    <h3
                        style={{
                        margin: '0 0 8px',
                        fontSize: '16px',
                        color: '#1c0333'
                        }}
                    >
                        {item.title}
                    </h3>

                    <p
                        style={{
                        margin: 0,
                        fontSize: '14px',
                        lineHeight: 1.6,
                        color: '#444'
                        }}
                    >
                        {item.description}
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </section>


    );

};

export default Research