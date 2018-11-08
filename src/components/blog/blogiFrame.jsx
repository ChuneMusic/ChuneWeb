import React from 'react';

export const blogiFrame = () => {
  const str = navigator.userAgent;
  let scrl = 'auto';
  if (~str.indexOf('iPhone')) scrl = 'no';
  return (
    <div className="containerBlog">
      <iframe
        title="Blog"
        src="https://blog.chunesupply.com/"
        className="iframe_blog"
        scrolling={scrl}
      />
    </div>
  );
};
