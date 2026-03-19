import { useNavigate } from 'react-router';
import CheckoutShippingImport from '../../imports/CheckoutShipping';
import { useEffect } from 'react';

export default function CheckoutShippingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="relative size-full" onClick={(e) => {
      const target = e.target as HTMLElement;
      
      // Handle "COntinue to Payment" button
      if (target.textContent?.includes('COntinue to Payment')) {
        e.preventDefault();
        navigate('/checkout/confirmation');
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
      <CheckoutShippingImport />
    </div>
  );
}