import React from 'react';

export const shopiFrame = () => {
  const str = navigator.userAgent;
  let scrl = 'auto';
  if (~str.indexOf('iPhone')) scrl = 'no';
  return (
    <div className="containerBlog">
      <iframe
        title="Shop"
        src="https://chune-supply.myshopify.com/"
        className="iframe_blog"
        scrolling={scrl}
      />
    </div>
  );
};
