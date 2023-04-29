// type
import type Props from '@/types/icon';

const index = ({
  fill = 'currentColor',
  size = '24',
  ...otherProps
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      {...otherProps}
    >
      <path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path>
      <path d="m11 16 5-4-5-4v3.001H3v2h8z"></path>
    </svg>
  );
};

export default index;
