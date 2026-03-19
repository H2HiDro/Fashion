import { useNavigate } from 'react-router';
import CheckoutConfirmationImport from '../../imports/CheckoutConfirmation';
import { useEffect } from 'react';

export default function CheckoutConfirmationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="relative size-full" onClick={(e) => {
      const target = e.target as HTMLElement;
      
      // Handle "i already pay" button
      if (target.textContent?.toLowerCase().includes('i already pay')) {
        e.preventDefault();
        navigate('/success');
        return;
      }
      
      // Handle logo clicks
      if (target.textContent?.includes('odeva') || target.textContent?.includes('M')) {
        const parent = target.closest('p');
        if (parent?.textContent?.includes('Modeva')) {
          e.preventDefault();
          navigate('/');
        }
      }
    }}>
      <CheckoutConfirmationImport />
    </div>
  );
}