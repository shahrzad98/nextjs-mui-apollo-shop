import Link from 'next/link';

const ThemeLink = props => {
  return (
    <Link
      prefetch={false}
      href={{
        pathname: `${props.href}`,
        query: {
          ...props.query
        }
      }}
      as={props.as}
    >
      <a style={{ textDecoration: 'none' }}>{props.children}</a>
    </Link>
  );
};

export default ThemeLink;
