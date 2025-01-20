'use client';
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

function Resume() {
  const [numPages, setNumPages] = useState(0); // Total number of pages
  const [width, setWidth] = useState(786); // Default to a reasonable value for initial render

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateWidth = () => setWidth(window.innerWidth);
      updateWidth(); // Set initial width
      window.addEventListener('resize', updateWidth);

      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages); // Set the total number of pages in the state
  };

  // Calculate the scale dynamically based on the screen width
  const calculateScale = () => {
    if (width > 1200) return 2; // Large screens
    if (width > 768) return 1.5; // Medium screens
    return 1; // Small screens
  };

  return (
    <div className="home-page flex flex-col w-[70vw] min-h-[90vh] mx-auto home-section">
      <section className="about-section text-white">
        <div className="container mx-auto px-4 mt-20">
          <Document
            file="/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center"
          >
            {Array.from({ length: numPages }, (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                // scale={calculateScale()} // Dynamically adjust scale
                renderTextLayer={false}
                width={width * 0.7}
              />
            ))}
          </Document>
        </div>
      </section>
    </div>
  );
}

export default Resume;
