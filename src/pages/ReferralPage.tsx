import { Printer, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/NavBar';

const ReferralPage = () => {
  // Download handled directly via anchor tag with download attribute

  const handlePrint = () => {
    // Use window.open which is more compatible with React
    const printWindow = window.open('/referral-pad-non-fillable.pdf', '_blank');
    
    if (printWindow) {
      // For browsers that support it
      printWindow.addEventListener('load', () => {
        setTimeout(() => {
          printWindow.print();
        }, 500); // Small delay to ensure PDF is fully loaded
      });
    } else {
      // Fallback for browsers that block popups
      alert('Please allow popups to print the referral form.');
    }
  };
  
  const handleEmail = () => {
    window.location.href = 'mailto:info@thegrowingsmiles.com?subject=Referral Form&body=Please find my completed referral form attached.';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-purple-50">
      <Navbar />
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Refer a Patient</h1>
          <p className="text-lg text-gray-600">
            Please review our referral form below. You can download, print, or email it directly from this page.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-4">
          <a 
            href="/referral-pad-non-fillable.pdf" 
            download="Growing_Smiles_Referral_Form.pdf"
            className="inline-flex items-center justify-center gap-2 h-10 px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:from-teal-500 hover:to-cyan-600 shadow-lg hover:shadow-cyan-200/50 transform hover:scale-105"
          >
            <Download size={18} />
            Download Form
          </a>
          <Button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 shadow-lg hover:shadow-blue-200/50 transform hover:scale-105 transition-all duration-300"
          >
            <Printer size={18} />
            Print Form
          </Button>
          <Button 
            onClick={handleEmail}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold px-6 shadow-lg hover:shadow-teal-200/50 transform hover:scale-105 transition-all duration-300"
          >
            <Mail size={18} />
            Email Us
          </Button>
        </div>
        
        {/* Main Content: Side by Side Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side: Instructions */}
          <div className="lg:w-1/3">
            <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-5 rounded-lg shadow-md sticky top-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full p-2 shadow-md">
                  <Download size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">How to Complete This Form</h3>
              </div>
              
              <div className="space-y-5">
                <div className="flex gap-3">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full h-6 w-6 flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5 shadow-sm">1</div>
                  <div>
                    <p className="text-teal-800 font-medium">Download the referral form</p>
                    <p className="text-sm text-teal-700">Click the Download button above to save the form to your computer</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full h-6 w-6 flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5 shadow-sm">2</div>
                  <div>
                    <p className="text-cyan-800 font-medium">Complete the form</p>
                    <p className="text-sm text-cyan-700">Fill out digitally with a PDF editor or print and complete by hand</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-full h-6 w-6 flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5 shadow-sm">3</div>
                  <div>
                    <p className="text-blue-800 font-medium">Submit your completed form</p>
                    <p className="text-sm text-blue-700">Email to <a href="mailto:info@thegrowingsmiles.com" className="font-bold hover:underline text-blue-900">info@thegrowingsmiles.com</a> or bring it to your next appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: PDF Preview */}
          <div className="lg:w-2/3 border rounded-lg overflow-auto bg-gray-50 shadow-md min-h-[600px]">
            <iframe
              src="/referral-pad-non-fillable.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
              className="w-full h-[650px]"
              title="Referral Form Preview"
              loading="lazy"
            />
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default ReferralPage;