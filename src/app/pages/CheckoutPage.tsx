import { useNavigate } from 'react-router';
import CheckoutImport from '../../imports/Checkout';
import { useEffect } from 'react';

export default function CheckoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="relative size-full" onClick={(e) => {
      const target = e.target as HTMLElement;
      
      // Handle "COntinue to Shipping" button
      if (target.textContent?.includes('COntinue to Shipping')) {
        e.preventDefault();
        navigate('/checkout/shipping');
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
      <CheckoutImport />
    </div>
  );
}