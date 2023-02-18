import { cx, styled } from '@fuel-ui/css';

import { createComponent } from '../../utils';

export type FuelLogoProps = {
  size?: number;
};

const Svg = styled('svg');

export const FuelLogo = createComponent<FuelLogoProps>(
  ({ size = 60, className, ...props }) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 852 852"
        css={{ ...props.css, width: size, height: size }}
        className={cx('fuel_Logo', className)}
      >
        <path
          fill="#58c09b"
          d="M638.737 321.745a16.735 16.735 0 0115.33 9.607 17.281 17.281 0 01-1.737 18.127L360.261 715.008a19.368 19.368 0 01-6.229 4.684 16.628 16.628 0 01-15.113-.151 17.057 17.057 0 01-9.192-19.623l52.567-201.191-216.294.664a16.735 16.735 0 01-15.33-9.607c-2.758-5.887-2.056-13.38 1.737-18.127L444.708 106.62a16.178 16.178 0 0120.618-4.793c7.47 3.1 11.376 11.442 9.686 19.394l-52.567 201.19z"
        />
        <path
          fill="none"
          stroke="#58c09b"
          strokeWidth="9"
          d="M639.536 328.815c6.585-.071 58.279 27.655 61.04 33.541a17.291 17.291 0 01-1.741 18.129L406.767 746.012a19.366 19.366 0 01-6.23 4.684 16.628 16.628 0 01-15.113-.151c-6.976-3.332-50.131-38.57-47.946-46.751l94.077-152.613H226.679c-6.585.071-71.974-62.843-68.181-67.59q205.349-262.69 293.209-372.414c9.573-11.955 52.922 17.831 60.122 21.654 7.47 3.1 11.376 11.442 9.686 19.394l-52.567 201.19z"
        />
      </Svg>
    );
  }
);
