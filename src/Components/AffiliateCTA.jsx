// CTASection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button'

// Styled components for custom styling
const Card = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

// const Button = styled.button`
//   padding: 0.75rem 1.5rem;
//   font-weight: 600;
//   border-radius: 0.5rem;
//   transition: all 0.2s;
  
//   &.primary {
//     background: #2563eb;
//     color: white;
    
//     &:hover {
//       background: #1d4ed8;
//       transform: scale(1.05);
//     }
//   }
  
//   &.secondary {
//     background: transparent;
//     border: 1px solid #111827;
//     color: #111827;
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
    
//     &:hover {
//       background: #f9fafb;
      
//       svg {
//         transform: translateX(0.5rem);
//       }
//     }
    
//     svg {
//       transition: transform 0.2s;
//     }
//   }
// `;

const CTASection = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate rotation based on mouse position relative to center
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 5;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 5;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div style={{ background: '#eff6ff' }}>
      <div style={{ 
        maxWidth: '80rem', 
        margin: '0 auto',
        padding: '6rem 1.5rem'
      }}>
        <div style={{ 
          maxWidth: '42rem',
          margin: '0 auto',
          perspective: '1000px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: 'transform 0.2s ease-out',
              willChange: 'transform',
            }}
          >
            <Card>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h2 style={{
                  fontSize: '2.25rem',
                  fontWeight: 'bold',
                  letterSpacing: '-0.025em',
                  color: '#111827',
                  marginBottom: '1.5rem'
                }}>
                  Ready to get started?
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.75rem',
                  color: '#4b5563',
                  marginBottom: '2.5rem'
                }}>
                  Join thousands of businesses already making the best out of Payscribe.
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1.5rem'
                }}>
                  <Link to="/signup">
                    <Button className="primary" size='lg'>
                      Join now!
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button className="secondary" size='lg'>
                      Contact support
                     <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;