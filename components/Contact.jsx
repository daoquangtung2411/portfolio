import React from 'react';
const cardStyle = {
  borderRadius: '16px',
  padding: '20px',
  backgroundColor: '#ffffff',
  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
  textDecoration: 'none',
  color: '#1c0333',
  transition: 'transform 0.2s ease',
  textAlign: 'center'
};

const cardTitle = {
  margin: '0 0 8px',
  fontSize: '16px'
};

const cardText = {
  margin: 0,
  fontSize: '14px',
  color: '#555'
};

const Contacts = () => {

    return (

        <section
        style={{
            maxWidth: '900px',
            margin: '60px auto',
            padding: '0 16px',
            textAlign: 'center'
        }}
        >
        <h1
            style={{
            marginBottom: '16px',
            color: '#1c0333'
            }}
        >
            Contact
        </h1>

        <p
            style={{
            maxWidth: '600px',
            margin: '0 auto 40px',
            color: '#555',
            fontSize: '15px',
            lineHeight: 1.6
            }}
        >
            Feel free to reach out regarding research collaboration, academic discussions,
            or opportunities related to AI-driven drug discovery.
        </p>

        {/* CONTACT CARDS */}
        <div
            style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
            }}
        >
            {/* EMAIL */}
            <a
            href="mailto:your.email@domain.com"
            style={cardStyle}
            >
            <h3 style={cardTitle}>Email</h3>
            <p style={cardText}>daoquangtung2411@gmail.com</p>
            </a>

            {/* LINKEDIN */}
            <a
            href="https://www.linkedin.com/in/tungdq24"
            target="_blank"
            rel="noreferrer"
            style={cardStyle}
            >
            <h3 style={cardTitle}>LinkedIn</h3>
            <p style={cardText}>Connect professionally</p>
            </a>

            <div
            style={{
                ...cardStyle,
                cursor: 'default'
            }}
            >
            <h3 style={cardTitle}>Location</h3>
            <p style={cardText}>SciLifeLab, Alfa 5, Tomtebodavägen 23A, 17165 Solna, Sweden</p>
            </div>

        </div>

        </section>

    );

};

export default Contacts