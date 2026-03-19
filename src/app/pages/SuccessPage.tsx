import { useNavigate } from 'react-router';
import SuccessImport from '../../imports/Success';
import { useEffect } from 'react';

export default function SuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="relative size-full" onClick={(e) => {
      const target = e.target as HTMLElement;
      
      // Handle "Back To Home" button
      if (target.textContent?.includes('Back To Home')) {
        e.preventDefault();
        navigate('/');
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
      <SuccessImport />
    </div>
  );
}