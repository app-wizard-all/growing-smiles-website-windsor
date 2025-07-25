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
            className="inline-flex items-center justify-center gap-2 h-10 px-6 py-2 rounded-md text-sm font-semibold ring-offset-background transition-colors bg-purple-600 text-white hover:bg-purple-700 shadow-sm"
          >
            <Download size={18} />
            Download Form
          </a>
          <Button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 shadow-sm"
          >
            <Printer size={18} />
            Print Form
          </Button>
          <Button 
            onClick={handleEmail}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 shadow-sm"
          >
            <Mail size={18} />
            Email Us
          </Button>
        </div>
        
        {/* Main Content: Side by Side Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side: Instructions */}
          <div className="lg:w-1/3">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg shadow-md sticky top-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500 rounded-full p-2">
                  <Download size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">How to Complete This Form</h3>
              </div>
              
              <div className="space-y-5">
                <div className="flex gap-3">
                  <div className="bg-purple-500 rounded-full h-6 w-6 flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="text-purple-800 font-medium">Download the referral form</p>
                    <p className="text-sm text-purple-700">Click the Download button above to save the form to your computer</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-purple-500 rounded-full h-6 w-6 flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="text-purple-800 font-medium">Complete the form</p>
                    <p className="text-sm text-purple-700">Fill out digitally with a PDF editor or print and complete by hand</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-purple-500 rounded-full h-6 w-6 flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="text-purple-800 font-medium">Submit your completed form</p>
                    <p className="text-sm text-purple-700">Email to <a href="mailto:info@thegrowingsmiles.com" className="font-bold hover:underline text-purple-900">info@thegrowingsmiles.com</a> or bring it to your next appointment</p>
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