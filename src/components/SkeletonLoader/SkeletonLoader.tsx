import React from 'react';
import './SkeletonLoader.scss';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  maxHeight?: string;
}

const SkeletonLoader = ({
  width = '100%',
  height = '250px',
  maxHeight = '100%',
}: SkeletonLoaderProps) => {
  return (
    <div
      className="skeleton-loader"
      style={{ width, minWidth: '100%', height, maxHeight }}
    >
      <div className="skeleton-content" />
    </div>
  );
};

export default SkeletonLoader;
