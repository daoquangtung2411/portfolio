import React, {useState, useEffect} from 'react';
import { researchInterests } from '../data/researchInterests';

const HomeMobile = ({ blogPosts, publications, researchInterest }) => {
    const slides = [
        researchInterest[researchInterest.length-1],
        ...researchInterest,
        researchInterest[0]
    ];
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    
    useEffect(() => {
        
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 1500);

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (currentIndex === slides.length - 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1)
            }, 500);
        }

        if (currentIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(slides.length - 2);
            }, 500)
        }
    }, [currentIndex, slides.length])

    useEffect(() => {
        if (!isTransitioning) {
            requestAnimationFrame(() => {
                setIsTransitioning(true)
            })
        }
    }, [isTransitioning])

    return (

        <div style={{margin:'5px',maxWidth: '712px', marginInline: 'auto'}}>

            {/* IMAGE + DESCRIPTION */}

            <section
                style={{
                    display: 'flex',
                    gap: '15px',
                    marginBottom: '20px',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap'
                }}
                >
                {/* IMAGE */}
                <img 
                    src="https://i.ibb.co/DHYZyRJX/Tung.png"
                    alt="Profile Image"
                    style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'contain',
                    marginInline: 'auto'
                    }}
                />

                {/* TEXT + LINKS */}
                <div
                    style={{
                    flex: 1,
                    minWidth: '250px'
                    }}
                >
                    <p style={{ lineHeight: 1.6, fontSize: '14px', marginBottom: '6px' }}>
                    Tung is in final year of Master program in Artificial Intelligence for Health at Stockholm University.
                    </p>

                    <p style={{ lineHeight: 1.6, fontSize: '14px', marginBottom: '8px' }}>
                    Currently conducting Master Thesis at{' '}
                    <a
                        href="https://luttenslab.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', fontWeight: 700 }}
                    >
                        Luttens Lab
                    </a>, under supervision of Andreas Luttens (KI) and Ioanna Miliou (DSV)
                    </p>

                    {/* SOCIAL LINKS */}
                    <div
                    style={{
                        display: 'flex',
                        gap: '10px',
                        flexWrap: 'wrap',
                        fontSize: '13px'
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
                        href="mailto:daoquangtung24@gmail.com"
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
            <div
            style={{
                width: '100%',
                maxWidth: '320px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '20pxs'
            }}
            >
            {/* TITLE */}
            <h2
                style={{
                marginBottom: '6px',
                paddingBottom: '4px',
                borderBottom: '3px solid #360f5a',
                color: '#1c0333',
                textAlign: 'center',
                fontSize: '14px'
                }}
            >
                Research Interests
            </h2>

            {/* SLIDER VIEWPORT */}
            <div
                style={{
                overflow: 'hidden',
                width: '100%'
                }}
            >
                {/* SLIDER TRACK */}
                <div
                style={{
                    display: 'flex',
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning
                    ? 'transform 0.5s ease-in-out'
                    : 'none'
                }}
                >
                {slides.map((item, idx) => (
                    <div
                    key={idx}
                    style={{
                        minWidth: '100%',
                        padding: '12px',
                        boxSizing: 'border-box'
                    }}
                    >
                    {/* CARD */}
                    <div
                        style={{
                        height: '120px',               
                        borderRadius: '16px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        backgroundColor: '#fff',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                        }}
                    >
                        {/* IMAGE */}
                        <div
                        style={{
                            width: '120px',
                            height: '120px',
                            marginBottom: '16px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        >
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                            }}
                        />
                        </div>

                        {/* TITLE */}
                        <h3
                        style={{
                            margin: 0,
                            fontSize: '13px',
                            color: '#1c0333'
                        }}
                        >
                        {item.title}
                        </h3>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
            {/* PUBLICATION (MOBILE) */}
            <section style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2
                style={{
                display: 'inline-block',
                marginBottom: '20px',
                paddingBottom: '2px',
                borderBottom: '3px solid #360f5a',
                color: '#1c0333',
                fontSize: '14px'
                }}
            >
                Latest Publications
            </h2>

            {(() => {
                const pub = publications[publications.length - 1]; // latest only
                return (
                <div
                    style={{
                    maxWidth: '340px',
                    margin: '0 auto',
                    padding: '20px',
                    borderRadius: '16px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                    textAlign: 'left'
                    }}
                >
                    {/* IMAGE */}
                    <div
                    style={{
                        width: '100%',
                        height: '100px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginBottom: '16px',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
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

                    {/* TITLE */}
                    <h3
                    style={{
                        margin: '0 0 8px',
                        fontSize: '14px',
                        color: '#1c0333',
                        lineHeight: 1.4
                    }}
                    >
                    {pub.title}
                    </h3>

                    {/* META */}
                    <p
                    style={{
                        margin: '0 0 12px',
                        fontSize: '13px',
                        color: '#555'
                    }}
                    >
                    {pub.authors} • <i>{pub.venue}</i> ({pub.year})
                    </p>

                    {/* KEYWORDS */}
                    <p
                    style={{
                        fontSize: '12px',
                        color: '#360f5a',
                        fontWeight: 600,
                        marginBottom: '14px'
                    }}
                    >
                    Keywords: {pub.keyword}
                    </p>

                    {/* LINK */}
                    <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#360f5a',
                        textDecoration: 'none',
                        marginRight: '30px'
                    }}
                    >
                    Full text →
                    </a>

                    <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#360f5a',
                        textDecoration: 'none'
                    }}
                    >
                    See more →
                    </a>
                </div>
                );
            })()}
            </section>
            {/* BLOG POSTS (MOBILE – LATEST ONLY) */}
            <section style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h2
                style={{
                display: 'inline-block',
                marginBottom: '20px',
                paddingBottom: '2px',
                borderBottom: '3px solid #360f5a',
                color: '#1c0333',
                fontSize: '14px'
                }}
            >
                Recent Blog Post
            </h2>

            {blogPosts
                .slice()
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 1)
                .map((post, idx) => (
                <a
                    key={idx}
                    href={post.link}
                    style={{
                    display: 'block',
                    width: '260px',
                    margin: '0 auto 24px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
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
                        margin: 0,
                        fontSize: '14px',
                        color: '#1c0333',
                        lineHeight: 1.4
                        }}
                    >
                        {post.title}
                    </h3>
                    </div>
                </a>
                ))}

            {/* EXPLORE ALL */}
            <a
                href="/blog"
                style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: '24px',
                backgroundColor: '#360f5a',
                color: '#ffffff',
                fontSize: '12px',
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

export default HomeMobile