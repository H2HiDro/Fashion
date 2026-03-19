import { useNavigate } from 'react-router';
import LoginImport from '../../imports/Login';
import { useEffect } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="relative size-full" onClick={(e) => {
      const target = e.target as HTMLElement;
      
      // Handle button clicks
      if (target.textContent?.toUpperCase().includes('BUTTON')) {
        e.preventDefault();
        // Simulate login and redirect to homepage
        navigate('/');
      }
      
      // Handle "Register here" link
      if (target.textContent?.includes('Register here')) {
        e.preventDefault();
        alert('Registration page would open here');
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
      <LoginImport />
    </div>
  );
}