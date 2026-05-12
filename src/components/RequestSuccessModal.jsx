import React from 'react';
import { FiCheck, FiHome, FiList, FiX } from 'react-icons/fi';
import './RequestSuccessModal.css';

const RequestSuccessModal = ({ isOpen, onClose, referenceId = "PKG1023", onViewRequests, onGoHome }) => {
  if (!isOpen) return null;

  return (
    <div className="rsm-overlay">
      <div className="rsm-modal">
        <button className="rsm-close" onClick={onClose} aria-label="Close modal">
          <FiX size={24} />
        </button>

        <div className="rsm-content">
          <div className="rsm-icon-wrapper">
            <div className="rsm-icon-circle">
              <FiCheck className="rsm-check-icon" />
            </div>
            {/* Animated particles */}
            <div className="rsm-sparkle s1"></div>
            <div className="rsm-sparkle s2"></div>
            <div className="rsm-sparkle s3"></div>
            <div className="rsm-sparkle s4"></div>
          </div>

          <h2 className="rsm-title">Request Submitted Successfully!</h2>
          <p className="rsm-description">
            Our travel expert will review your requirements and contact you within 30 minutes.
          </p>

          <div className="rsm-reference-box">
            <div className="rsm-ref-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <line x1="8" y1="18" x2="16" y2="18"></line>
                <line x1="8" y1="14" x2="16" y2="14"></line>
                <line x1="8" y1="10" x2="16" y2="10"></line>
              </svg>
            </div>
            <div className="rsm-ref-text">
              <span className="rsm-ref-label">Reference ID</span>
              <span className="rsm-ref-id">{referenceId}</span>
            </div>
          </div>

          <div className="rsm-actions">
            <button className="rsm-btn-outline" onClick={onViewRequests}>
              <FiList className="btn-icon" /> View My Requests
            </button>
            <button className="rsm-btn-solid" onClick={onGoHome}>
              <FiHome className="btn-icon" /> Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestSuccessModal;
