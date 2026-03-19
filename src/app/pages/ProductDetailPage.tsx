import { useNavigate } from 'react-router';
import ProductDetailImport from '../../imports/ProductDetail';
import { useEffect } from 'react';
import { Header } from '../components/Header';

export default function ProductDetailPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="relative size-full" onClick={(e) => {
      const target = e.target as HTMLElement;
      
      // Handle "Add To Cart" button
      if (target.textContent?.includes('Add To Cart')) {
        e.preventDefault();
        navigate('/cart');
        return;
      }
    }}>
      <style>{`
        /* Hide the original header from Figma import */
        [data-name="Header"] {
          display: none !important;
        }
      `}</style>
      <ProductDetailImport />
      <Header theme="light" />
    </div>
  );
}