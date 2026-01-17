import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import '../style/navbar.css'

const navigationItems = [
    {id: '/', label: 'Home'},
    {id: '/about', label: 'About'},
    {id: '/research', label: 'Research'},
    {id: '/publications', label: 'Publications'},
    {id: '/blog', label: 'Blog'},
    {id: '/contact', label: 'Contact'},
    
]

const MobileNavigation = ({ isMobile, activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen}) => {
    if (!isMobile) return null;

    const handleNavigationClick = (id) => {
        setActiveSection(id);
        setMobileMenuOpen(false);
    };

    return (
        <>

            <div 
                className='cursor-pointer'
                onClick={() => setMobileMenuOpen(true)}
            >
                <img 
                    src='https://i.ibb.co/Z60fw4Fn/pngtree-chemical-laboratory-transparent-flask-icon-png-image-2023093-removebg-preview.png'
                    alt='Header Image'
                    className='h-[45px] w-auto object-contain pl-[15px]'
                />
            </div>
            {mobileMenuOpen && (
                <div 
                    style={{
                        position: 'fixed',
                        inset: '0',
                        zIndex: 50,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <div 
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            height: '100%',
                            width: '100%',
                            backgroundColor: 'white',
                            boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.1)',
                            padding: '24px',
                            transform: 'translateX(0)',
                            transition: 'transform 0.3s ease-in-out'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#374151'
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={28} />
                        </button>

                        <nav style={{
                            marginTop: '64px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px'
                        }}>
                            {navigationItems.map(item => (
                                <NavLink
                                    key={item.id}
                                    to={item.id}
                                    onClick={(e) => {
                                        // e.preventDefault();
                                        handleNavigationClick(item.id);
                                    }}
                                    style={{
                                        textAlign: 'left',
                                        fontSize: '18px',
                                        fontWeight: '500',
                                        padding: '12px 16px',
                                        borderRadius: '8px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        backgroundColor: activeSection === item.id ? '#DBEAFE' : 'transparent',
                                        color: activeSection === item.id ? '#1D4ED8' : '#374151',
                                        transition: 'all 0.2s',
                                        textDecoration: 'none',
                                        display: 'block'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeSection !== item.id) {
                                            e.target.style.backgroundColor = '#F3F4F6';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeSection !== item.id) {
                                            e.target.style.backgroundColor = 'transparent';
                                        }
                                    }}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

        </>
    )
};

const DesktopNavigation = ({ activeSection, setActiveSection }) => {

    return (
        <nav className='relative flex flex-row justify-center items-center bg-gray-800 w-full h-[20px]' style={{background:'gray', height:'40px', fontSize:'18px'}}>
            {navigationItems.map(item => (
                <NavLink
                    to={item.id}
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-[40px] nav-link ${ activeSection === item.id ? "active" : ""}`}
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    )

}

const Header = ({ isMobile, activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen }) => {
    return (
        <>
        { isMobile ? ( 
                    <div
                        className="w-full h-[60px] flex items-center justify-between px-4"
                        style={{
                            background: "#341539",
                            color: "white"
                        }}
                    >
                        
                        <MobileNavigation 
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                            mobileMenuOpen={mobileMenuOpen}
                            setMobileMenuOpen={setMobileMenuOpen}
                            isMobile={isMobile}
                        />

                        <div
                            className='font-bold'
                            style = {{
                                fontSize:22,
                                fontWeight:"bold"
                            }}
                        >
                            Quang Tung Dao
                        </div>

                        <img 
                            src='https://i.ibb.co/V0JncNHh/header-img.png'
                            alt='Header Image'
                            className='h-[45px] w-auto object-contain pr-[20px]'
                        />

                    </div>
                ) : (
                    <div
                        className="w-full bg-black h-[150px]"
                        style={{
                            background: "#341539",
                            color: "white"
                        }}
                    >
                    <div className='flex flex-col justify-center items-center'>
                        <img 
                            src='https://i.ibb.co/V0JncNHh/header-img.png'
                            alt='Header Image'
                            className='h-[80px] w-auto object-contain py-[10px]'
                        />
                        <div
                            className='font-bold'
                            style={{
                                fontSize:24,
                                fontWeight:"bold"
                            }}
                        >
                            Quang Tung Dao
                        </div>
                        <div
                            style={{
                                fontSize:20,
                                padding:"3px 0 0 0"
                            }}
                        >
                            Pharmacist | Master Student in AI for Health
                        </div>
                    </div>
                    <div className='w-full h-[10px] pt-[10px]'>
                        <DesktopNavigation
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                        />
                    </div> 
                </div>
                )
            }
        </>
    );
};

export default Header