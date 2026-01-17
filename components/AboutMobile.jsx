import React from 'react';

const TimelineItem = ({ title, place, time }) => (
  <div style={{ marginBottom: '20px', position: 'relative' }}>
    <div
      style={{
        position: 'absolute',
        left: '-26px',
        top: '4px',
        width: '10px',
        height: '10px',
        backgroundColor: '#360f5a',
        borderRadius: '50%'
      }}
    />

    <h4 style={{ margin: 0, fontSize: '14px' }}>{title}</h4>
    <p style={{ margin: '3px 0', fontSize: '12px', opacity: 0.8 }}>
      {place}
    </p>
    <p style={{ margin: 0, fontSize: '12px', opacity: 0.6 }}>
      {time}
    </p>
  </div>
);


const AboutMobile = () => {

    return (

        <div
            style={{
                maxWidth: '920px',
                marginInline: 'auto',
                padding: '10px'
            }}
            >
            {/* ABOUT TEXT */}
            <section style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '16px', marginBottom: '10px' }}>
                About
                </h2>

                <p style={{ lineHeight: 1.7, fontSize: '14px', marginBottom: '10px' }}>
                Pharmacist with 8 years of working experience in hospital settings and
                2 years of research experience in data science and AI applications for
                drug discovery. Currently pursuing a Master’s degree in Artificial
                Intelligence for Health, expected to graduate in June 2026.
                </p>

                <p style={{ lineHeight: 1.7, fontSize: '14px', marginBottom: '10px' }}>
                Specialized in leveraging machine learning and deep learning to accelerate
                drug discovery. Proven track record of applying machine learning, deep
                learning, reinforcement learning, and large language models to large-scale
                chemical datasets.
                </p>

                <p style={{ lineHeight: 1.7, fontSize: '14px', marginBottom: '10px' }}>
                Tung is in the final year of the Master program in Artificial Intelligence
                for Health at Stockholm University. His research interests lie in applying
                AI techniques to drug discovery and development.
                </p>

                <p style={{ lineHeight: 1.7, fontSize: '14px' }}>
                Currently conducting a Master’s thesis at{' '}
                <a
                    href="https://luttenslab.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontWeight: 600, textDecoration: 'none' }}
                >
                    Luttens Lab
                </a>, under the supervision of Andreas Luttens (KI) and Ioanna Miliou (DSV).
                </p>
            </section>

            {/* TIMELINE */}
            <section>
                <h2 style={{ fontSize: '16px', marginBottom: '15px' }}>
                Experience
                </h2>

                <div style={{ borderLeft: '2px solid #ddd', paddingLeft: '20px' }}>
                {/* ITEM */}
                <TimelineItem
                    title="Master Thesis Student"
                    place="Luttens Lab / SciLifeLab and Karolinska Institutet"
                    time="Oct 2025 - present"
                />

                <TimelineItem
                    title="Student Research"
                    place="AI DRUG lab - Hanoi University of Pharmacy / Remote"
                    time="Oct 2023 - present"
                />

                <TimelineItem
                    title="Student Research"
                    place="IAST - Ton Duc Thang University / Remote"
                    time="June 2024 - June 2025"
                />

                <TimelineItem
                    title="Clinical Pharmacist"
                    place="National Hospital for Tropical Diseases / Hanoi"
                    time="Dec 2015 - Jul 2024"
                />

                </div>
            </section>
            <section>
                <h2 style={{ fontSize: '16px', marginBottom: '15px' }}>
                Education
                </h2>
                <div style={{ borderLeft: '2px solid #ddd', paddingLeft: '20px' }}>
                <TimelineItem
                    title="Master in AI for Health"
                    place="Department of Computer and System Sciences / Stockholm University"
                    time="2024 - 2026"
                />

                <TimelineItem
                    title="Pharmacist"
                    place="Hanoi University of Pharmacy"
                    time="2010 - 2015"
                />
                </div>
            </section>
            </div>

    );

};

export default AboutMobile