export default function SearchSVG(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.2136 17.4751C17.3036 15.7351 19.2136 11.005 17.4736 6.90503C15.7336 2.80503 11.0036 0.905021 6.90359 2.64502C2.81359 4.38502 0.903608 9.11509 2.64361 13.2151C4.38361 17.3151 9.11358 19.2151 13.2136 17.4751Z"
        stroke={props.color || '#FEFEFE'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7539 15.7539L22.0039 22.0039"
        stroke={props.color || '#FEFEFE'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
