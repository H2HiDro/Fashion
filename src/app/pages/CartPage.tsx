import { useNavigate } from 'react-router';
import CartImport from '../../imports/Cart';
import { useEffect } from 'react';
import { Header } from '../components/Header';

export default function CartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="relative size-full" onClick={(e) => {
      const target = e.target as HTMLElement;
      
      // Handle "PROCEED TO CHECKOUT" button
      if (target.textContent?.includes('PROCEED TO CHECKOUT')) {
        e.preventDefault();
        navigate('/checkout');
        return;
      }
    }}>
      <style>{`
        /* Hide the original header from Figma import */
        [data-name="Header"] {
          display: none !important;
        }
      `}</style>
      <CartImport />
      <Header theme="light" />
    </div>
  );
}