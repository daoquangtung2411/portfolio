import React from 'react';
import ExpandableText from './ExpandableText';

const HomeDesktop = ({ blogPosts, publications, researchInterest }) => {

    return (

        <div style={{margin:'20px', maxWidth: '1100px', marginInline: 'auto'}}>

            {/* IMAGE + DESCRIPTION */}

            <section
                style={{
                    display: 'flex',
                    gap: '32px',
                    marginBottom: '30px',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap'
                }}
            >

                    <img 
                        src='https://i.ibb.co/DHYZyRJX/Tung.png'
                        alt='Profile Image'
                        style={{
                            width: '180px',
                            height: '180px',
                            // borderRadius: '50%',
                            objectFit: 'contain',
                            flexShrink: 0
                        }}
                    />
            
                <div style={{flex: 1, minWidth: '280px', maxWidth: '950px'}}>
                    
                    <p style={{lineHeight: 1.7, fontSize: '18px', color: '#1c0333', marginBottom: '5px'}}>
                        Tung received his pharmacist degree from Hanoi University of Pharmacy in 2015. After graduation, he worked as a clinical pharmacist for 8 years at National Hospital for Tropical Disease in Vietnam.
                    </p>
                    <p style={{lineHeight: 1.7, fontSize: '18px', color: '#1c0333', marginBottom: '5px'}}>
                        Tung is in final year of Master program in Artificial Intelligence for Health at Stockholm University. His interest lies in using AI for drug discovery and development.
                    </p>
                    <p style={{lineHeight: 1.7, fontSize: '18px', color: '#1c0333', marginBottom: '5px'}}>
                        Currently conducting Master Thesis at{' '} <a href="https://luttenslab.netlify.app/" target="_blank" rel="noreferrer" style={{textDecoration: 'none', fontWeight: 700}}>Luttens Lab</a>{' '}, under supervision of Andreas Luttens (KI) and Ioanna Miliou (DSV)
                    </p>
                    <div
                        style={{
                            marginTop: '10px',
                            display: 'flex',
                            gap: '12px',
                            flexWrap: 'wrap',
                            fontSize: '18px'
                        }}
                        >
                        <a
                            href="https://www.linkedin.com/in/tungdq24/"
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: 'none', fontWeight: 600, color: '#360f5a' }}
                        >
                            LinkedIn
                        </a>

                        <span>•</span>

                        <a
                            href="https://scholar.google.com/citations?user=pAM2HwkAAAAJ&hl=en"
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: 'none', fontWeight: 600, color: '#360f5a' }}
                        >
                            Google Scholar
                        </a>

                        <span>•</span>

                        <a
                            href="mailto:daoquangtung2411@gmail.com"
                            style={{ textDecoration: 'none', fontWeight: 600, color: '#360f5a' }}
                        >
                            Email
                        </a>

                        <span>•</span>

                        <a
                            href="https://github.com/daoquangtung2411"
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: 'none', fontWeight: 600, color: '#360f5a' }}
                        >
                            GitHub
                        </a>
                        </div>

                </div>

            </section>

            {/* RESEARCH INTEREST */}

            <section style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <h2
                        style={{
                            display: 'inline-block',
                            marginBottom: '30px',
                            paddingBottom: '2px',
                            borderBottom: '3px solid #360f5a',
                            color: '#1c0333'
                        }}
                    >Research Interests</h2>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'flex-start',
                            gap: '12px',
                            flexWrap: 'wrap',
                            maxWidth: '1000px',
                            margin: '0 auto'
                        }}
                    >
                        {researchInterest.map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    transition: 'transform 0.2s ease',
                                    textAlign: 'center',
                                }}
                            >   
                            <div
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    margin: '0 auto',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.88)',
                                    backgroundColor: '#ffffff',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex'
                                }}
                            >
                                <img 
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '80%',
                                        height: '80%',
                                        objectFit: 'cover',
                                        
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    padding: '16px',
                                    width: '200px'
                                }}
                            >

                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: '16px',
                                        color: '#1c0333'
                                    }}
                                >
                                    {item.title}
                                </h3>

                            </div>
                            </div>
                        ))}
                    </div>
            </section>

            {/* PUBLICATION (DESKTOP) */}
            <section style={{ marginBottom: '20px', textAlign: 'center' }}>
            <h2
                style={{
                display: 'inline-block',
                marginBottom: '30px',
                paddingBottom: '2px',
                borderBottom: '3px solid #360f5a',
                color: '#1c0333'
                }}
            >
                Latest Publications
            </h2>

            {/* Card container */}
            <div
                style={{
                maxWidth: '1100px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center'
                }}
            >
                {(() => {
                const pub = publications[publications.length - 1]; // latest
                return (
                    <div
                    style={{
                        display: 'flex',
                        gap: '24px',
                        padding: '24px',
                        borderRadius: '16px',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        alignItems: 'center',
                        width: '100%'
                    }}
                    >
                    {/* IMAGE */}
                    <div
                        style={{
                        width: '220px',
                        height: '160px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#ffffff'
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

                    {/* INFO */}
                    <div style={{ textAlign: 'left', flex: 1 }}>
                        <h3
                        style={{
                            margin: '0 0 8px',
                            fontSize: '18px',
                            color: '#1c0333'
                        }}
                        >
                        {pub.title}
                        </h3>

                        <p
                        style={{
                            margin: '0 0 6px',
                            fontSize: '14px',
                            color: '#555'
                        }}
                        >
                        {pub.authors} • <i>{pub.venue}</i> ({pub.year})
                        </p>

                        {/* ABSTRACT (2 lines clamp) */}
                        {/* <
                        style={{
                            margin: '10px 0',
                            fontSize: '14px',
                            lineHeight: 1.5,
                            color: '#333',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}
                        > */}
                        <ExpandableText text={pub.abstract} />
                        

                        {/* KEYWORDS */}
                        <p
                        style={{
                            margin: '8px 0',
                            fontSize: '13px',
                            color: '#360f5a',
                            fontWeight: 600
                        }}
                        >
                        Keywords: {pub.keyword}
                        </p>

                        {/* SEE MORE */}
                        <a
                        href={pub.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            fontSize: '14px',
                            fontWeight: 700,
                            color: '#360f5a',
                            textDecoration: 'none',
                            marginRight: '40px'
                        }}
                        >
                        Full text →
                        </a>

                    </div>
                    </div>
                );
                })()}
            </div>
            <a
                href="/publications"
                style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 24px',
                borderRadius: '24px',
                backgroundColor: '#360f5a',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 700,
                textDecoration: 'none'
                }}
            >
                View all publications
            </a>
            </section>
            {/* BLOG POSTS (DESKTOP) */}
            <section style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h2
                style={{
                display: 'inline-block',
                marginBottom: '30px',
                paddingBottom: '2px',
                borderBottom: '3px solid #360f5a',
                color: '#1c0333'
                }}
            >
                Recent Blog Post
            </h2>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, 260px)',
                    justifyContent: 'center',
                    gap: '24px',
                    maxWidth: '1100px',
                    margin: '0 auto 30px'
                }}
            >
                {blogPosts
                .slice() // prevent mutation
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // latest first
                .slice(0, 4)
                .map((post, idx) => (
                    <a
                    href={`/blog/${post.id}`}
                    key={idx}
                    style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                        transition: 'transform 0.2s ease',
                        textDecoration: 'none'
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
                        src={post.image}
                        alt={post.title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'scale-down'
                        }}
                        />
                    </div>

                    {/* CONTENT */}
                    <div style={{ padding: '16px', textAlign: 'left' }}>
                        <h3
                        style={{
                            margin: '0 0 12px',
                            fontSize: '16px',
                            color: '#1c0333',
                            lineHeight: 1.4
                        }}
                        >
                        {post.title}
                        </h3>

                    </div>
                    </a>
                ))}
            </div>

            {/* EXPLORE ALL */}
            <a
                href="/blog"
                style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: '24px',
                backgroundColor: '#360f5a',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 700,
                textDecoration: 'none'
                }}
            >
                Explore all blogs
            </a>
            </section>

        </div>

    );

};

export default HomeDesktop