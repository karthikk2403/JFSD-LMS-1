"use client"; // Add this at the top to enable Client Component functionality

import React from 'react';

const Homepage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px', textAlign: 'center', backgroundColor: '#f7f7f7' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ color: '#6C63FF' }}>Welcome to Open LMS</h1>
        <p style={{ fontSize: '18px' }}>
          Deliver the best remote and blended learning experiences with our secure, scalable learning platform.
        </p>
      </header>

      <section style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '20px 0' }}>
        <div style={{ maxWidth: '300px', padding: '15px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3>Unrivaled Performance</h3>
          <p>Experience top-notch scalability and security at unbeatable value.</p>
        </div>
        <div style={{ maxWidth: '300px', padding: '15px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3>Powered by AWS</h3>
          <p>Our platform ensures reliability with Amazon Web Services.</p>
        </div>
        <div style={{ maxWidth: '300px', padding: '15px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3>Fast Support</h3>
          <p>Get support responses in just 50 minutes to keep your system running smoothly.</p>
        </div>
      </section>

      <section style={{ margin: '20px 0', padding: '20px', backgroundColor: '#6C63FF', color: '#fff', borderRadius: '8px' }}>
        <h2>Open LMS Academy</h2>
        <p>
          Access a collection of professional development resources, training, and teaching courses to help your faculty and admin staff reach their goals.
        </p>
      </section>

      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#ff6f61',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
        onClick={() => window.location.href = '/sign-in'}
      >
        Visit the Site
      </button>
    </div>
  );
};

export default Homepage;
