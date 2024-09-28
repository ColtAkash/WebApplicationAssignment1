/*Akash Sukumaran
301359421 
28-09-2024*/
import React from 'react';
import './services.css';

const Services = () => {
    return (
        <section className="servicesSection">
            <h1>Services I Offer</h1>
            <p>
            As a passionate full stack developer, I specialize in bringing your ideas to life with dynamic web solutions.
             Whether you need a sleek website or a robust application, I craft tailored experiences that meet your needs and elevate your vision.</p>
            <ul>
                <li>
                    <h2>API Development</h2>
                    <p>
                    I design and implement robust APIs that enable seamless communication between your applications and external services, 
                    ensuring smooth data exchange and functionality.
                    </p>
                </li>
                <li>
                    <h2>Responsive Design</h2>
                    <p>
                    I create visually appealing and user-friendly interfaces that adapt flawlessly to various devices,
                     providing an optimal experience for all users, whether on desktop or mobile.
                    </p>
                </li>
                <li>
                    <h2>Database Management</h2>
                    <p>
                    I handle the architecture and optimization of databases to ensure efficient data storage, 
                    retrieval, and management, supporting the performance and scalability of your applications
                    </p>
                </li>
                <li>
                    <h2>E-commerce Solutions</h2>
                    <p>
                    I develop customized e-commerce platforms that enhance user experience, 
                    streamline transactions, and integrate payment gateways, helping businesses expand their online presence.
                    </p>
                </li>
                <li>
                    <h2>Content Management Systems (CMS)</h2>
                    <p>
                    I build and customize user-friendly CMS solutions that empower you to manage your
                     website’s content easily, allowing for seamless updates and scalability as your needs grow.
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Services;
