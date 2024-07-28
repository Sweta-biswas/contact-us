import React from 'react';
import Header from './components/Header';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
