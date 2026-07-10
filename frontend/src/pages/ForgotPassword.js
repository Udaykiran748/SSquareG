import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import '../styles/login.css';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Mock API call to send OTP
      console.log('Sending OTP to:', email);
      setStep(2);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp) {
      // Mock API call to verify OTP
      console.log('Verifying OTP:', otp);
      setStep(3);
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword && newPassword === confirmPassword) {
      // Mock API call to update password
      console.log('Password updated successfully');
      setStep(4);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="login-container">
      <div className="login-bg-shape" />

      <div className="animate-fade-up login-card">
        <div className="login-header">
          <Link to="/" className="login-logo">
            S2G
          </Link>
          
          {step === 1 && (
            <>
              <h1 className="login-title">Reset password</h1>
              <p className="login-subtitle">Enter your email address to receive an OTP.</p>
            </>
          )}
          {step === 2 && (
            <>
              <h1 className="login-title">Verify OTP</h1>
              <p className="login-subtitle">We sent a verification code to {email}.</p>
            </>
          )}
          {step === 3 && (
            <>
              <h1 className="login-title">Create new password</h1>
              <p className="login-subtitle">Your new password must be different from previous used passwords.</p>
            </>
          )}
          {step === 4 && (
            <>
              <h1 className="login-title">Password Reset</h1>
              <p className="login-subtitle" style={{ color: 'var(--secondary-color)' }}>
                Your password has been successfully reset!
              </p>
            </>
          )}
        </div>

        {step === 1 && (
          <form className="login-form" onSubmit={handleEmailSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email address</label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                placeholder="name@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-submit-btn">Send OTP</button>
          </form>
        )}

        {step === 2 && (
          <form className="login-form" onSubmit={handleOtpSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="otp">Enter OTP</label>
              <input 
                type="text" 
                id="otp" 
                className="form-input" 
                placeholder="6-digit code" 
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                required
              />
            </div>
            <button type="submit" className="login-submit-btn">Verify OTP</button>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button 
                type="button" 
                onClick={() => setStep(1)} 
                style={{ background: 'none', border: 'none', color: 'var(--primary-dark)', cursor: 'pointer', fontWeight: '500' }}
              >
                Change Email
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form className="login-form" onSubmit={handlePasswordReset}>
            <div className="form-group">
              <label className="form-label" htmlFor="newPassword">New Password</label>
              <div className="password-input-wrapper">
                <input 
                  type={showPassword ? "text" : "password"}
                  id="newPassword" 
                  className="form-input" 
                  placeholder="••••••••" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <button 
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input-wrapper">
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword" 
                  className="form-input" 
                  placeholder="••••••••" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button 
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="login-submit-btn">Update Password</button>
          </form>
        )}

        {step === 4 && (
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button className="login-submit-btn" style={{ width: '100%' }}>
              Back to Login
            </button>
          </Link>
        )}

        {step !== 4 && (
          <div className="login-footer" style={{ marginTop: '2rem' }}>
            Remember your password? 
            <Link to="/login" className="login-footer-link">
              Back to login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
