import { pdfjs } from 'react-pdf';

// Set worker source to be compatible with Vite's build process
const pdfjsVersion = '5.3.93'; // Explicitly set to your installed version
pdfjs.GlobalWorkerOptions.workerSrc = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`;

export default pdfjs;