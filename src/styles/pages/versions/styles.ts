import styled from 'styled-components';
import Link from 'next/link';

export const VersionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const VersionCard = styled.div`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
`;

export const VersionCardHeader = styled.div`
  padding: 1.5rem;
  background: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
`;

export const VersionCardTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const VersionCardSubtitle = styled.p`
  margin: 0.5rem 0 0 0;
  color: #666;
  font-size: 0.875rem;
`;

export const VersionTag = styled.span`
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid #bbdefb;
`;

export const VersionCardFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid #eee;
  background: #fafafa;
`;

export const VersionLink = styled(Link)<{ $primary?: boolean }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  
  ${props => props.$primary ? `
    background: #1976d2;
    color: white;
    border: 1px solid #1976d2;
  ` : `
    background: #fff;
    color: #1976d2;
    border: 1px solid #1976d2;
  `}
`;