import React from 'react';

// Define internal CSS styles as an object
const styles = {
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    textAlign: 'center'
  },
  nav: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center'
  },
  main: {
    padding: '20px',
    backgroundColor: '#8A2BE2',
    fontFamily: 'Arial, sans-serif'
  },
  sectionBlue: {
    marginBottom: '20px',
    backgroundColor: '#87CEEB' // Sky blue color
  },
  sectionGreen: {
    marginBottom: '20px',
    backgroundColor: '#90EE90' // Light green color
  },
  article: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '10px'
  },
  aside: {
    padding: '10px',
    backgroundColor: '#87CEEB', // Sky blue color
    border: '1px solid #ddd',
    borderRadius: '5px'
  },
  figure: {
    margin: '0',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px'
  },
  figcaption: {
    fontStyle: 'italic',
    textAlign: 'center'
  },
  footer: {
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    width: '100%'
  },
  h1: {
    fontSize: '2em'
  },
  h2: {
    fontSize: '1.5em'
  },
  h5: {
    fontSize: '1.5em'
  },
  p: {
    fontSize: '1em',
    lineHeight: '1.6'
  }
};

const App = () => (
  <div>
    <header style={styles.header}>
      <h1 style={styles.h1}>This is the header<br />Welcome to My Website</h1>
    </header>
    <nav style={styles.nav}>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li>This is the navigation bar</li>
        <li style={{ display: 'inline', margin: '0 10px' }}>Home</li>
        <li style={{ display: 'inline', margin: '0 10px' }}>About</li>
        <li style={{ display: 'inline', margin: '0 10px' }}>Services</li>
        <li style={{ display: 'inline', margin: '0 10px' }}>Contact</li>
      </ul>
    </nav>
    <main style={styles.main}>
      <h5>Main section starts here</h5>
      <section style={styles.sectionBlue}>
        <h5>Section starts from here</h5>
        <h2 style={styles.h2}>About Us</h2>
        <article style={styles.article}>
          <p style={styles.p}>
            This is an example of a React component using various HTML5 semantic elements with internal CSS.
          </p>
          <figure style={styles.figure}>
            <h5>This is the figure</h5>
            <img 
              src="data:image/png;base64,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"
              alt="semantic elements structure" 
              style={{ maxWidth: '100%' }} // Ensure image scales appropriately
            />
            <figcaption style={styles.figcaption}>This is a figurecaption.</figcaption>
          </figure>
        </article>
        <aside style={styles.aside}>
          <h5>This is aside element</h5>
          <h3>Related Links</h3>
          <ul>
            <li><a href="#link1">Link 1</a></li>
            <li><a href="#link2">Link 2</a></li>
            <li><a href="#link3">Link 3</a></li>
          </ul>
          <h5>Aside element ends here</h5>
        </aside>
        <h5>Section element ends here</h5>
      </section>
      <section style={styles.sectionGreen}>
        <h5>Again section starts here</h5>
        <h2 style={styles.h2}>Contact</h2>
        <article style={styles.article}>
          <p style={styles.p}>
            This is article element<br />
            Feel free to reach out if you have any questions or comments.
          </p>
          <h5>Article element ends here</h5>
        </article>
        <h5>Section element ends here</h5>
      </section>
      <h5>=======================================================================================================</h5>
      <h5>Main element ends here</h5>
    </main>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <footer style={styles.footer}>
      <h5>This is the footer</h5>
      <p>© 2024 My Website. All rights reserved.</p>
    </footer>
  </div>
);

export default App;
