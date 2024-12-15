import { forwardRef } from 'react';

const SvgComponent = (props, ref) => (
  <svg
    width={172}
    height={174}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M80.627 20.39c-2.367.54-5.063 1.648-7.22 2.906-1.677 1.018-5.271 4.283-6.14 5.601-.449.66-1.108.749-15.246 2.456-8.148.959-15.037 1.858-15.337 1.947-.3.12-.719.6-.958 1.079-.39.749-.33 1.707.599 9.615.569 4.822 1.048 9.016 1.048 9.286 0 .449-.27.539-1.318.539-.809 0-1.557.21-1.947.51-.36.299-2.486 3.564-4.732 7.278l-4.074 6.74-2.636 50.771A67979.488 67979.488 0 0 1 20 170.729c0 .569.3 1.168.869 1.737l.868.869h126.526l.868-.869c.569-.569.869-1.168.869-1.737-.03-.449-1.228-23.694-2.666-51.611l-2.636-50.771-4.074-6.74c-2.246-3.714-4.373-6.98-4.732-7.279-.51-.39-1.198-.51-3.325-.51-2.396 0-2.666-.06-2.516-.538.539-1.798 1.677-7.16 1.677-7.968 0-.749-.839-2.217-1.288-2.277-.03 0-5.392-1.258-11.892-2.785l-11.831-2.786-.629-1.977c-2.277-7.01-7.728-12.341-14.947-14.618-2.696-.838-7.908-1.078-10.514-.479Zm8.836 5.452c2.876.809 5.152 2.187 7.399 4.433 1.827 1.827 3.714 4.643 3.714 5.512 0 .15-1.318-.03-2.905-.42-5.512-1.318-5.872-1.108-7.1 4.224-1.917 8.297-1.707 7.728-2.995 8.027-.629.15-1.228.18-1.348.03-.12-.15-.689-4.193-1.228-8.956-.54-4.792-1.168-9.046-1.378-9.465-.629-1.258-1.737-1.468-5.272-.989-1.677.21-3.205.39-3.385.39-.629.03 2.487-1.708 4.224-2.337 3.475-1.288 6.8-1.408 10.274-.45Zm-9.435 15.007c.449 4.104.898 7.638.958 7.908.09.389-2.037.988-12.221 3.414-10.933 2.636-12.46 3.086-13.18 3.775-.479.449-.839 1.078-.839 1.377 0 .33.48 2.487 1.049 4.853.57 2.336 1.048 4.313 1.048 4.403 0 .06-2.815.12-6.26.12h-6.26l-.15-.989c-.54-2.935-3.265-27.497-3.115-27.677.21-.18 35.315-4.493 37.232-4.553l.899-.03.839 7.399ZM111 43.814c8.207 1.917 14.947 3.535 14.977 3.565.06.06-.899 4.403-2.127 9.645l-2.216 9.525-7.519.09-7.518.06-.3-1.108c-.179-.63-1.258-5.122-2.426-9.975-1.168-4.852-2.336-9.136-2.576-9.525-.749-1.169-1.677-1.318-4.313-.69-2.756.63-2.636.78-1.918-2.306.6-2.606.66-2.755.9-2.755.089 0 6.859 1.557 15.036 3.474ZM99.108 58.102c.929 3.924 1.798 7.459 1.887 7.848l.18.749h-38.91l-.3-1.138c-.18-.6-.569-2.217-.868-3.565l-.57-2.456 8.717-2.127c4.793-1.138 12.82-3.115 17.853-4.313 5.032-1.228 9.405-2.217 9.735-2.187.509.06.809.959 2.276 7.19Zm-60.626 3.954c.18 1.648.359 3.355.359 3.804l.03.839h-3.145c-1.737 0-3.145-.06-3.145-.12 0-.09 1.018-1.857 2.276-3.924 2.846-4.733 3.115-4.762 3.625-.599Zm96.661.63c1.258 2.066 2.276 3.803 2.276 3.893 0 .06-2.366.12-5.272.12-4.852 0-5.241-.03-5.092-.54.09-.269.51-2.036.929-3.893l.809-3.355h4.103l2.247 3.774Zm4.673 10.363c0 .54 1.078 21.956 2.396 47.567 1.318 25.611 2.396 46.818 2.396 47.088 0 .509-3.025.539-59.608.539s-59.608-.03-59.608-.539c0-.27 1.078-21.477 2.396-47.088 1.318-25.61 2.396-47.028 2.396-47.567v-.958h109.632v.958Z"
      fill="#1C1B20"
    />
    <path
      d="M69.76 97.767c-1.595 1.564-.521 4.139 1.748 4.139 1.196 0 2.392-1.226 2.392-2.453 0-1.257-1.196-2.453-2.454-2.453-.582 0-1.226.276-1.686.767ZM96.775 97.644c-1.687 1.319-.706 4.262 1.441 4.262 1.227 0 1.932-.46 2.3-1.533.858-2.453-1.717-4.324-3.741-2.73ZM87.934 112.754c4.385-1.472 6.072-3.619 4.324-5.612-.859-1.043-2.576-1.165-3.527-.307-.858.798-2.729 1.38-4.385 1.411-1.073 0-1.931-.276-3.495-1.104-2.208-1.165-3.036-1.196-4.11-.123-1.502 1.503-.275 3.649 2.822 5.06 2.269 1.042 6.286 1.349 8.371.675ZM2.855 118.227c-.217.227-.226.262-.226 1.31v1.082h-1.08c-1.046 0-1.08.009-1.307.227-.323.332-.323.961 0 1.292.226.219.261.227 1.307.227h1.08v1.083c0 1.048.009 1.083.226 1.31.331.323.959.323 1.29 0 .217-.227.226-.262.226-1.31v-1.083h1.08c1.046 0 1.08-.008 1.307-.227.323-.331.323-.96 0-1.292-.226-.218-.261-.227-1.307-.227h-1.08v-1.082c0-1.048-.009-1.083-.226-1.31-.183-.183-.314-.227-.645-.227s-.462.044-.645.227ZM155.855 37.227c-.217.227-.226.262-.226 1.31v1.082h-1.08c-1.046 0-1.081.009-1.307.227-.323.332-.323.96 0 1.292.226.219.261.227 1.307.227h1.08v1.083c0 1.048.009 1.083.226 1.31.331.323.959.323 1.29 0 .217-.227.226-.262.226-1.31v-1.083h1.08c1.046 0 1.081-.008 1.307-.227.323-.331.323-.96 0-1.292-.226-.218-.261-.227-1.307-.227h-1.08v-1.082c0-1.048-.009-1.083-.226-1.31-.183-.183-.314-.227-.645-.227s-.462.044-.645.227ZM30.816.238c-.247.247-.361.655-.361 1.31 0 .618-.285 1.692-.684 2.537-1.207 2.612-3.515 4.151-6.65 4.427-.836.066-1.121.323-1.121.988s.285.921 1.121.988c2.423.219 4.275 1.13 5.643 2.774.874 1.045 1.691 3.069 1.691 4.19 0 1.092.304 1.548 1.045 1.548.741 0 1.045-.456 1.045-1.549 0-1.12.817-3.144 1.691-4.189 1.358-1.634 3.249-2.556 5.643-2.774.836-.066 1.121-.323 1.121-.988s-.285-.921-1.121-.988c-1.264-.114-2.137-.342-3.106-.817-1.635-.798-2.68-1.833-3.468-3.468-.456-.95-.76-2.004-.76-2.679C32.545.456 32.241 0 31.5 0c-.352 0-.503.048-.684.238Zm1.083 5.68c.731 1.236 2.09 2.584 3.306 3.269.257.142.475.285.475.313 0 .028-.266.209-.599.399-1.235.732-2.584 2.09-3.268 3.306-.142.256-.284.475-.313.475-.029 0-.171-.219-.314-.475-.683-1.216-2.032-2.575-3.267-3.306-.333-.19-.599-.37-.599-.399 0-.028.266-.209.599-.399 1.235-.732 2.584-2.09 3.267-3.306.143-.256.285-.475.314-.475.029 0 .209.266.399.598ZM166.104 129.137c-.143.143-.209.38-.209.759 0 .358-.165.979-.396 1.469-.698 1.513-2.035 2.403-3.85 2.563-.484.038-.649.187-.649.572 0 .385.165.533.649.572 1.403.127 2.475.655 3.267 1.606.506.605.979 1.776.979 2.425 0 .633.176.897.605.897s.605-.264.605-.897c0-.649.473-1.82.979-2.425.787-.946 1.881-1.479 3.267-1.606.484-.039.649-.187.649-.572 0-.385-.165-.534-.649-.572-.731-.066-1.237-.198-1.799-.473-.945-.462-1.55-1.062-2.007-2.007-.264-.55-.44-1.161-.44-1.552 0-.632-.176-.896-.605-.896-.203 0-.291.027-.396.137Zm.627 3.289c.424.715 1.21 1.496 1.914 1.892.149.083.275.166.275.182 0 .016-.154.121-.346.231-.715.423-1.496 1.21-1.892 1.914-.083.148-.166.275-.182.275-.016 0-.099-.127-.181-.275-.396-.704-1.177-1.491-1.892-1.914-.193-.11-.347-.215-.347-.231 0-.016.154-.121.347-.231.715-.424 1.496-1.21 1.892-1.914.082-.148.165-.275.181-.275.016 0 .121.154.231.346Z"
      fill="#1C1B20"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export default ForwardRef;
