import * as React from 'react';

function BlogSvg(props) {
  return (
    <svg width={20} height={18} fill="none" {...props}>
      <path
        d="M15.06 1.688H2.686c-.623 0-1.125.502-1.125 1.125v12.374c0 .623.502 1.126 1.125 1.126h13.5c.622 0 1.125-.503 1.125-1.125v-6.75M1.56 5.063h9.563"
        stroke="rgba(28, 27, 32, 0.7)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.09 4.845l-4.29 4.29-2.107.42.42-2.107 4.29-4.29a1.18 1.18 0 01.84-.345c.315 0 .615.127.84.345l.008.007a1.186 1.186 0 010 1.68zM4.936 9.563H8.31M4.936 12.938h7.312"
        stroke="rgba(28, 27, 32, 0.7)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BlogSvg;
