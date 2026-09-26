import React from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="login-page-container">
      {/* Left side hero image for desktop */}
      <div className="login-image-section">
        <img 
          src="/hero-dragon.jpg" 
          alt="Dark Fantasy Dragon" 
          className="login-hero-image"
        />
        <div className="login-image-overlay"></div>
      </div>

      {/* Right side form */}
      <div className="login-form-section">
        <button className="login-back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="login-form-container">
          <h1 className="login-title">Welcome 👏</h1>
          <p className="login-subtitle">Please login to your account to continue</p>
          
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            
            <div className="login-input-group">
              <label className="login-label">Email address</label>
              <div className="login-input-wrapper">
                <Mail className="login-input-icon" size={20} />
                <input 
                  type="email" 
                  className="login-input" 
                  placeholder="Enter your email" 
                  required
                />
              </div>
            </div>

            <div className="login-input-group">
              <label className="login-label">Password</label>
              <div className="login-input-wrapper">
                <Lock className="login-input-icon" size={20} />
                <input 
                  type="password" 
                  className="login-input" 
                  placeholder="Enter your password" 
                  required
                />
              </div>
            </div>

            <a href="#" className="login-forgot-link">Forgot password?</a>

            <button type="submit" className="login-submit-btn">
              Login
            </button>
          </form>

          <div className="login-divider">
            Or login with
          </div>

          <div className="login-social-buttons">
            <button className="login-social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.78 15.68 17.58V20.34H19.25C21.34 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
                <path d="M12 23C14.97 23 17.46 22.02 19.25 20.34L15.68 17.58C14.71 18.23 13.46 18.62 12 18.62C9.17 18.62 6.77 16.7 5.9 14.14H2.22V16.99C4.02 20.57 7.7 23 12 23Z" fill="#34A853"/>
                <path d="M5.9 14.14C5.68 13.48 5.56 12.76 5.56 12C5.56 11.24 5.68 10.52 5.9 9.86V7.01H2.22C1.48 8.49 1 10.19 1 12C1 13.81 1.48 15.51 2.22 16.99L5.9 14.14Z" fill="#FBBC05"/>
                <path d="M12 5.38C13.62 5.38 15.07 5.93 16.22 7.03L19.33 3.92C17.45 2.16 14.97 1 12 1C7.7 1 4.02 3.43 2.22 7.01L5.9 9.86C6.77 7.3 9.17 5.38 12 5.38Z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="login-social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.408 0 22.675 0Z" fill="#1877F2"/>
              </svg>
              Facebook
            </button>
          </div>

          <div className="login-footer">
            Don't have an account? 
            <a href="#" className="login-footer-link">Register now</a>
          </div>
        </div>
      </div>
    </div>
  );
}
