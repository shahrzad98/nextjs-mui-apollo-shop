import React from 'react';

const EmptyBlog = props => {
  return (
    <svg
      width="166"
      height="166"
      viewBox="0 0 166 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="path-1-inside-1_9204_35939" fill="white">
        <path d="M91.6813 0.474823C80.1928 2.12996 69.2884 6.93307 60.0391 14.3974L56.7937 17.0261L55.3982 15.9552C53.7756 14.7219 50.3679 13.5861 48.2909 13.5861C46.9279 13.5861 46.6358 13.4238 44.6237 11.509C42.1896 9.23729 39.4311 7.71198 36.1857 6.90063C33.2325 6.15419 27.975 6.41382 25.3138 7.41989C22.6201 8.42595 19.2774 10.6977 17.5249 12.7098C15.8049 14.657 13.6305 18.7786 13.306 20.6609C13.1112 21.8293 12.9814 21.9915 11.9105 22.1862C8.76246 22.7704 5.28993 25.8211 4.0567 29.0989C3.05064 31.7276 3.24536 35.4598 4.51105 38.0236C5.61447 40.2953 8.08094 42.5346 10.4176 43.4109C12.1052 44.06 12.8841 44.0924 25.7681 44.0924H39.3337L38.4575 47.2404C36.8997 52.8224 36.4454 56.1327 36.2831 63.24C35.991 75.4101 37.9382 84.1726 43.2931 94.6226C44.364 96.7321 45.5973 98.9389 46.0192 99.5556L46.7656 100.659L26.9689 119.644C2.2393 143.271 2.33666 143.206 1.03851 145.932C0.0649071 148.009 0 148.301 0 152.001C0 155.7 0.0649071 155.992 1.03851 158.102C2.40156 160.99 4.9654 163.554 7.85376 164.917C9.96325 165.891 10.2553 165.956 13.955 165.956C17.6547 165.956 17.9468 165.891 20.0239 164.917C22.75 163.619 22.685 163.716 46.3112 138.987L65.2966 119.19L66.4 119.936C68.2499 121.202 74.9028 124.512 78.1157 125.746C82.1724 127.303 87.5273 128.634 92.2006 129.315C98.0098 130.127 108.59 129.802 113.977 128.666C118.942 127.628 122.285 126.557 127.056 124.545L130.788 122.955H144.256C160.093 122.955 159.801 123.019 162.917 119.871C165.286 117.502 166 115.75 166 112.245C166 110.233 165.838 109.454 165.059 107.864C163.988 105.592 161.911 103.547 159.834 102.671C158.536 102.152 158.276 101.86 157.627 100.205L156.913 98.3548L158.211 96.1155C161.035 91.215 163.696 83.7831 165.059 76.9354C166.032 72.0349 166.292 61.3902 165.513 55.9704C161.521 27.1517 138.901 4.46661 110.212 0.474823C105.734 -0.174255 96.0301 -0.1418 91.6813 0.474823ZM105.993 6.90063C107.681 6.99799 110.764 7.41988 112.809 7.84178C135.851 12.7423 153.57 30.6566 158.276 53.8934C158.925 57.0738 159.022 58.5343 159.022 64.8627C159.022 73.1059 158.536 76.4486 156.394 82.9718C155.453 85.8926 151.98 93.7464 151.656 93.7464C151.591 93.7464 150.617 93.4543 149.514 93.0973C148.378 92.7403 147.015 92.4482 146.463 92.4482C145.944 92.4482 145.554 92.3509 145.619 92.1886C145.684 92.0588 146.625 90.144 147.729 87.9047C149.968 83.3612 151.006 80.408 152.11 75.5075C152.759 72.5542 152.856 71.321 152.856 64.8627C152.856 56.6844 152.434 53.9908 150.228 47.5649C145.132 32.9608 133.287 21.0179 118.78 15.8578C112.971 13.8132 109.661 13.2291 102.716 13.0343C97.2958 12.8721 95.8354 12.9695 92.4602 13.5211C87.8194 14.3325 83.2109 15.7604 79.1543 17.6427C75.9089 19.1681 75.13 19.947 75.13 21.7968C75.13 23.4195 75.9089 24.5229 77.3693 24.9773C78.4727 25.3018 78.8622 25.2044 81.8154 23.9712C89.2149 20.7908 94.018 19.7198 100.801 19.7198C108.298 19.7198 114.594 21.1478 120.987 24.3282C125.465 26.5675 128.646 28.8068 132.475 32.539C141.498 41.2365 146.203 52.3356 146.203 64.8302C146.203 69.9904 145.619 74.0146 144.224 78.4283C143.218 81.5763 140.102 88.3591 139.745 88.1319C133.189 84.4971 125.855 84.3997 119.786 87.8723C116.054 90.0142 112.776 94.1683 111.446 98.4197L110.699 100.821L108.914 101.341C105.507 102.314 102.553 105.267 101.645 108.578L101.288 109.973H98.9834C91.8436 109.973 82.3672 106.793 75.4546 102.054C72.0469 99.7178 66.757 94.5253 64.3554 91.1176C60.4285 85.5356 57.5726 78.7204 56.5017 72.3595C55.8201 68.4326 55.8201 61.2928 56.4692 57.5282C57.1507 53.6013 58.027 50.8103 59.9417 46.2019C61.4346 42.632 61.532 42.2426 61.2074 41.1391C60.7531 39.6787 59.6497 38.8998 58.027 38.8998C56.1771 38.8998 55.3982 39.6787 53.8405 42.989C50.6925 49.7393 49.1672 56.8467 49.1672 64.9601C49.1672 80.1159 55.1711 93.5517 66.4974 103.742C75.2923 111.661 88.079 116.788 99.0158 116.788H102.066L102.845 117.989C103.851 119.579 105.117 120.748 106.902 121.786L108.33 122.565L107.162 122.792C106.513 122.922 103.17 122.955 99.7298 122.89C94.9916 122.76 92.59 122.565 89.8964 122.013C66.6596 117.275 48.6479 99.1986 43.9097 75.832C43.2606 72.6516 43.1632 71.1911 43.1632 64.8627C43.1632 58.5343 43.2606 57.0738 43.9097 53.8934C48.6479 30.4944 66.6596 12.4502 89.8964 7.74442C93.2716 7.0629 99.7623 6.47873 101.904 6.67345C102.456 6.7059 104.273 6.80327 105.993 6.90063ZM36.9322 14.3974C38.6847 15.2737 42.3519 18.6813 42.3519 19.4277C42.3519 20.1741 44.364 20.7583 46.1165 20.5311C48.226 20.2715 49.6215 20.5311 51.0495 21.3749L52.1204 22.024L50.4004 24.0686C48.226 26.6648 44.7859 31.9872 43.3255 34.9405L42.1896 37.2772H27.8127C11.9429 37.2772 12.1052 37.3096 10.8719 35.2326C10.0606 33.902 10.0606 32.2144 10.8719 30.8838C11.7806 29.3585 12.7867 28.8392 15.2856 28.6121C16.5189 28.5147 17.7846 28.2875 18.0766 28.1253C18.9529 27.6709 19.537 26.2754 19.7318 24.0361C20.1212 19.4926 23.3341 15.4684 27.8452 13.8457C30.4414 12.937 34.4657 13.1642 36.9322 14.3974ZM134.617 93.3569C136.565 94.3305 140.037 97.4785 140.037 98.3223C140.037 98.4521 140.492 98.8416 141.043 99.1012C141.79 99.4907 142.536 99.588 144.191 99.3933C148.41 99.0039 151.136 101.081 152.077 105.397C152.499 107.377 153.44 108.221 155.55 108.545C157.789 108.87 159.185 110.363 159.185 112.407C159.185 113.705 159.022 114.095 158.114 115.003C157.335 115.782 156.621 116.139 155.582 116.302C154.804 116.399 144.516 116.464 132.735 116.399C112.971 116.302 111.251 116.269 110.277 115.717C108.2 114.614 107.421 112.245 108.395 110.168C109.206 108.48 110.212 107.929 113.068 107.637C116.346 107.344 117.125 106.566 117.417 103.353C118.034 96.7646 123.388 91.9939 129.879 92.2211C132.054 92.3184 132.865 92.5131 134.617 93.3569ZM57.3455 113.024L59.6821 115.101L55.8201 119.028L51.9582 122.987L47.4796 118.508L42.9685 114.03L46.9279 110.168L50.8547 106.273L52.9318 108.61C54.1001 109.876 56.0798 111.855 57.3455 113.024ZM46.1165 129.121C45.4999 129.737 39.1066 136.455 31.837 144.049C22.8473 153.493 18.2065 158.069 17.2328 158.589C13.5656 160.536 8.73001 158.751 7.07488 154.856C6.39335 153.169 6.52317 150.216 7.39941 148.625C7.85376 147.782 13.4682 142.167 23.042 133.015L37.9707 118.736L42.5791 123.344L47.2199 127.952L46.1165 129.121Z" />
      </mask>
      <path
        d="M91.6813 0.474823C80.1928 2.12996 69.2884 6.93307 60.0391 14.3974L56.7937 17.0261L55.3982 15.9552C53.7756 14.7219 50.3679 13.5861 48.2909 13.5861C46.9279 13.5861 46.6358 13.4238 44.6237 11.509C42.1896 9.23729 39.4311 7.71198 36.1857 6.90063C33.2325 6.15419 27.975 6.41382 25.3138 7.41989C22.6201 8.42595 19.2774 10.6977 17.5249 12.7098C15.8049 14.657 13.6305 18.7786 13.306 20.6609C13.1112 21.8293 12.9814 21.9915 11.9105 22.1862C8.76246 22.7704 5.28993 25.8211 4.0567 29.0989C3.05064 31.7276 3.24536 35.4598 4.51105 38.0236C5.61447 40.2953 8.08094 42.5346 10.4176 43.4109C12.1052 44.06 12.8841 44.0924 25.7681 44.0924H39.3337L38.4575 47.2404C36.8997 52.8224 36.4454 56.1327 36.2831 63.24C35.991 75.4101 37.9382 84.1726 43.2931 94.6226C44.364 96.7321 45.5973 98.9389 46.0192 99.5556L46.7656 100.659L26.9689 119.644C2.2393 143.271 2.33666 143.206 1.03851 145.932C0.0649071 148.009 0 148.301 0 152.001C0 155.7 0.0649071 155.992 1.03851 158.102C2.40156 160.99 4.9654 163.554 7.85376 164.917C9.96325 165.891 10.2553 165.956 13.955 165.956C17.6547 165.956 17.9468 165.891 20.0239 164.917C22.75 163.619 22.685 163.716 46.3112 138.987L65.2966 119.19L66.4 119.936C68.2499 121.202 74.9028 124.512 78.1157 125.746C82.1724 127.303 87.5273 128.634 92.2006 129.315C98.0098 130.127 108.59 129.802 113.977 128.666C118.942 127.628 122.285 126.557 127.056 124.545L130.788 122.955H144.256C160.093 122.955 159.801 123.019 162.917 119.871C165.286 117.502 166 115.75 166 112.245C166 110.233 165.838 109.454 165.059 107.864C163.988 105.592 161.911 103.547 159.834 102.671C158.536 102.152 158.276 101.86 157.627 100.205L156.913 98.3548L158.211 96.1155C161.035 91.215 163.696 83.7831 165.059 76.9354C166.032 72.0349 166.292 61.3902 165.513 55.9704C161.521 27.1517 138.901 4.46661 110.212 0.474823C105.734 -0.174255 96.0301 -0.1418 91.6813 0.474823ZM105.993 6.90063C107.681 6.99799 110.764 7.41988 112.809 7.84178C135.851 12.7423 153.57 30.6566 158.276 53.8934C158.925 57.0738 159.022 58.5343 159.022 64.8627C159.022 73.1059 158.536 76.4486 156.394 82.9718C155.453 85.8926 151.98 93.7464 151.656 93.7464C151.591 93.7464 150.617 93.4543 149.514 93.0973C148.378 92.7403 147.015 92.4482 146.463 92.4482C145.944 92.4482 145.554 92.3509 145.619 92.1886C145.684 92.0588 146.625 90.144 147.729 87.9047C149.968 83.3612 151.006 80.408 152.11 75.5075C152.759 72.5542 152.856 71.321 152.856 64.8627C152.856 56.6844 152.434 53.9908 150.228 47.5649C145.132 32.9608 133.287 21.0179 118.78 15.8578C112.971 13.8132 109.661 13.2291 102.716 13.0343C97.2958 12.8721 95.8354 12.9695 92.4602 13.5211C87.8194 14.3325 83.2109 15.7604 79.1543 17.6427C75.9089 19.1681 75.13 19.947 75.13 21.7968C75.13 23.4195 75.9089 24.5229 77.3693 24.9773C78.4727 25.3018 78.8622 25.2044 81.8154 23.9712C89.2149 20.7908 94.018 19.7198 100.801 19.7198C108.298 19.7198 114.594 21.1478 120.987 24.3282C125.465 26.5675 128.646 28.8068 132.475 32.539C141.498 41.2365 146.203 52.3356 146.203 64.8302C146.203 69.9904 145.619 74.0146 144.224 78.4283C143.218 81.5763 140.102 88.3591 139.745 88.1319C133.189 84.4971 125.855 84.3997 119.786 87.8723C116.054 90.0142 112.776 94.1683 111.446 98.4197L110.699 100.821L108.914 101.341C105.507 102.314 102.553 105.267 101.645 108.578L101.288 109.973H98.9834C91.8436 109.973 82.3672 106.793 75.4546 102.054C72.0469 99.7178 66.757 94.5253 64.3554 91.1176C60.4285 85.5356 57.5726 78.7204 56.5017 72.3595C55.8201 68.4326 55.8201 61.2928 56.4692 57.5282C57.1507 53.6013 58.027 50.8103 59.9417 46.2019C61.4346 42.632 61.532 42.2426 61.2074 41.1391C60.7531 39.6787 59.6497 38.8998 58.027 38.8998C56.1771 38.8998 55.3982 39.6787 53.8405 42.989C50.6925 49.7393 49.1672 56.8467 49.1672 64.9601C49.1672 80.1159 55.1711 93.5517 66.4974 103.742C75.2923 111.661 88.079 116.788 99.0158 116.788H102.066L102.845 117.989C103.851 119.579 105.117 120.748 106.902 121.786L108.33 122.565L107.162 122.792C106.513 122.922 103.17 122.955 99.7298 122.89C94.9916 122.76 92.59 122.565 89.8964 122.013C66.6596 117.275 48.6479 99.1986 43.9097 75.832C43.2606 72.6516 43.1632 71.1911 43.1632 64.8627C43.1632 58.5343 43.2606 57.0738 43.9097 53.8934C48.6479 30.4944 66.6596 12.4502 89.8964 7.74442C93.2716 7.0629 99.7623 6.47873 101.904 6.67345C102.456 6.7059 104.273 6.80327 105.993 6.90063ZM36.9322 14.3974C38.6847 15.2737 42.3519 18.6813 42.3519 19.4277C42.3519 20.1741 44.364 20.7583 46.1165 20.5311C48.226 20.2715 49.6215 20.5311 51.0495 21.3749L52.1204 22.024L50.4004 24.0686C48.226 26.6648 44.7859 31.9872 43.3255 34.9405L42.1896 37.2772H27.8127C11.9429 37.2772 12.1052 37.3096 10.8719 35.2326C10.0606 33.902 10.0606 32.2144 10.8719 30.8838C11.7806 29.3585 12.7867 28.8392 15.2856 28.6121C16.5189 28.5147 17.7846 28.2875 18.0766 28.1253C18.9529 27.6709 19.537 26.2754 19.7318 24.0361C20.1212 19.4926 23.3341 15.4684 27.8452 13.8457C30.4414 12.937 34.4657 13.1642 36.9322 14.3974ZM134.617 93.3569C136.565 94.3305 140.037 97.4785 140.037 98.3223C140.037 98.4521 140.492 98.8416 141.043 99.1012C141.79 99.4907 142.536 99.588 144.191 99.3933C148.41 99.0039 151.136 101.081 152.077 105.397C152.499 107.377 153.44 108.221 155.55 108.545C157.789 108.87 159.185 110.363 159.185 112.407C159.185 113.705 159.022 114.095 158.114 115.003C157.335 115.782 156.621 116.139 155.582 116.302C154.804 116.399 144.516 116.464 132.735 116.399C112.971 116.302 111.251 116.269 110.277 115.717C108.2 114.614 107.421 112.245 108.395 110.168C109.206 108.48 110.212 107.929 113.068 107.637C116.346 107.344 117.125 106.566 117.417 103.353C118.034 96.7646 123.388 91.9939 129.879 92.2211C132.054 92.3184 132.865 92.5131 134.617 93.3569ZM57.3455 113.024L59.6821 115.101L55.8201 119.028L51.9582 122.987L47.4796 118.508L42.9685 114.03L46.9279 110.168L50.8547 106.273L52.9318 108.61C54.1001 109.876 56.0798 111.855 57.3455 113.024ZM46.1165 129.121C45.4999 129.737 39.1066 136.455 31.837 144.049C22.8473 153.493 18.2065 158.069 17.2328 158.589C13.5656 160.536 8.73001 158.751 7.07488 154.856C6.39335 153.169 6.52317 150.216 7.39941 148.625C7.85376 147.782 13.4682 142.167 23.042 133.015L37.9707 118.736L42.5791 123.344L47.2199 127.952L46.1165 129.121Z"
        fill="#1C1B20"
        fillOpacity="0.4"
        stroke="white"
        strokeWidth="2"
        mask="url(#path-1-inside-1_9204_35939)"
      />
    </svg>
  );
};

export default EmptyBlog;
