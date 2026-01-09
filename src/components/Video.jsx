import React, { memo } from 'react';

const Video = ({ id, title, iframeProps, wrapperProps }) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const videoSrcUrl = `https://www.youtube-nocookie.com/embed/${id}?origin=${origin}&rel=0`;

  return (
    <div className="video" {...wrapperProps}>
      <iframe
        {...iframeProps}
        src={videoSrcUrl}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; controls"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  );
};
export default memo(Video);
