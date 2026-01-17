import React, { useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Globe, FileText, BookOpen, Calendar, Menu, X } from 'lucide-react';

export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const blogPosts = [
        {
            title: "Molecular Docking with Autodock Vina",
            date: "24 December 2025",
            excerpt: "Molecular docking simulation code with Autodock Vina 1.2.5",
            link: "#",
            image: "https://i.ibb.co/qLwywF1z/images.png"
        },
    ];

    const publications = [
        {
            title: "Harmonizing QSAR Machine Learning-Based Models and Docking Approaches for Identifying Novel Histone Deacetylase 2 Inhibitors",
            authors: "Tung D.Q. et al.",
            venue: "Chemistry Select",
            year: 2024,
            abstract: "Machine learning (ML) algorithms have gained widespread application in constructing computational models for predicting the bioactivity and physicochemical properties of numerous compounds, notably HDAC inhibitors. In this work, 2801 unique compounds with confirmed bioassays on HDAC2 were collected and employed to train ML models to virtually screening and possibly design potential inhibitors for HDAC2.",
            link: "https://doi.org/10.1002/slct.202400404",
            image: "https://i.ibb.co/MkrBLMQY/HDAC2.png"
        },
    ];

    const researchInterests = [
        {
            title: "Computer-Aided Drug Design",
            description: "Application of Artificial Intelligence and Pharmaceutical Modelling in Drug Discovery and Development",
            image: "https://i.ibb.co/Kz9CSYGj/cadd-symposium-feature.jpg"
        }
    ];

    const navigationItems = [
        { id: 'home', label: 'Home' },
        { id: 'research', label: 'Research' },
        { id: 'publications', label: 'Publications' },
        { id: 'blog', label: 'Blog' },
        { id: 'contact', label: 'Contact' }
    ];

    const renderContent = () => {
        switch(activeSection) {
            case 'home':
                return (
                    <div className="space-y-8">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome</h2>
                            <p className="text-lg text-gray-300 mb-6">
                                I'm a pharmacist and master student specializing in AI applications for healthcare and drug discovery.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {researchInterests.map((interest, idx) => (
                                <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition">
                                    <img src={interest.image} alt={interest.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                                        <p className="text-gray-400">{interest.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'research':
                return (
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Research Interests</h2>
                        <div className="space-y-6">
                            {researchInterests.map((interest, idx) => (
                                <div key={idx} className="bg-gray-800 rounded-lg p-6">
                                    <h3 className="text-2xl font-bold mb-3">{interest.title}</h3>
                                    <p className="text-gray-300">{interest.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'publications':
                return (
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Publications</h2>
                        <div className="space-y-6">
                            {publications.map((pub, idx) => (
                                <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition">
                                    <div className="md:flex">
                                        <img src={pub.image} alt={pub.title} className="w-full md:w-64 h-48 object-cover" />
                                        <div className="p-6 flex-1">
                                            <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                                            <p className="text-sm text-gray-400 mb-3">{pub.authors} • {pub.venue} ({pub.year})</p>
                                            <p className="text-gray-300 mb-4 line-clamp-3">{pub.abstract}</p>
                                            <a href={pub.link} target="_blank" rel="noopener noreferrer" 
                                               className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                                                Read more <FileText className="ml-2 w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'blog':
                return (
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Blog Posts</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {blogPosts.map((post, idx) => (
                                <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition">
                                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <div className="flex items-center text-sm text-gray-400 mb-2">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {post.date}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                                        <p className="text-gray-300 mb-4">{post.excerpt}</p>
                                        <a href={post.link} className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                                            Read more <BookOpen className="ml-2 w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                        <div className="bg-gray-800 rounded-lg p-8 max-w-2xl">
                            <p className="text-gray-300 mb-6">Feel free to reach out for collaborations or just a friendly chat about AI and healthcare.</p>
                            <div className="space-y-4">
                                <a href="mailto:contact@example.com" className="flex items-center text-blue-400 hover:text-blue-300">
                                    <Mail className="w-5 h-5 mr-3" />
                                    contact@example.com
                                </a>
                                <div className="flex space-x-4 pt-4">
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        <Twitter className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition">
                                        <Globe className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Landscape/Desktop Version */}
            <div className="hidden md:block">
                {/* Header */}
                <header className="bg-black border-b border-gray-800 py-8">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center justify-center mb-4">
                            <img src="https://i.ibb.co/Rp5QyLsP/Gemini-Generated-Image-qs3bbeqs3bbeqs3b-removebg-preview.png" alt="Logo" className="w-16 h-16" />
                        </div>
                        <h1 className="text-4xl font-bold text-center mb-2">Quang Tung Dao</h1>
                        <p className="text-xl text-gray-400 text-center">Pharmacist | Master Student in AI for Health</p>
                    </div>
                </header>

                {/* Navigation */}
                <nav className="bg-gray-900 sticky top-0 z-50">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-center space-x-8 py-4">
                            {navigationItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSection(item.id)}
                                    className={`px-4 py-2 rounded-lg transition ${
                                        activeSection === item.id 
                                            ? 'bg-blue-600 text-white' 
                                            : 'text-gray-300 hover:bg-gray-800'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="container mx-auto px-6 py-12">
                    {renderContent()}
                </main>
            </div>

            {/* Mobile Version */}
            <div className="md:hidden">
                {/* Mobile Header */}
                <header className="bg-black border-b border-gray-800 py-6 px-4">
                    <div className="flex items-center justify-between">
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white p-2"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                        <div className="flex items-center space-x-3">
                            <span className="text-lg font-bold">Q. Tung Dao</span>
                            <img src="https://i.ibb.co/9ZLgY8w/4D-logo.png" alt="Logo" className="w-10 h-10" />
                        </div>
                    </div>
                </header>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-black z-50 pt-20">
                        <div className="flex flex-col items-center space-y-6 p-6">
                            {navigationItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveSection(item.id);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`text-2xl px-6 py-3 rounded-lg transition w-full ${
                                        activeSection === item.id 
                                            ? 'bg-blue-600 text-white' 
                                            : 'text-gray-300 hover:bg-gray-800'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Mobile Content */}
                <main className="px-4 py-6">
                    {renderContent()}
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-12">
                <div className="container mx-auto px-6 text-center text-gray-400">
                    <p>© 2025 Quang Tung Dao. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}