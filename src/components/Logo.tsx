interface IProps extends React.SVGProps<SVGSVGElement> {
  color: string;
}
const Logo = ({ color, ...rest }: IProps) => (
  <svg
    {...rest}
    width="220"
    height="36"
    viewBox="0 0 220 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_554)">
      <path
        d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
        fill={color}
      />
    </g>
    <path
      d="M48.9199 31V3H60.0399C61.7466 3 63.2666 3.34667 64.5999 4.04C65.9599 4.70667 67.0133 5.66667 67.7599 6.92C68.5333 8.14667 68.9199 9.62667 68.9199 11.36V11.88C68.9199 13.6133 68.5199 15.1067 67.7199 16.36C66.9466 17.6133 65.8933 18.5733 64.5599 19.24C63.2266 19.9067 61.7199 20.24 60.0399 20.24H53.2399V31H48.9199ZM53.2399 16.32H59.5999C61.1199 16.32 62.3333 15.92 63.2399 15.12C64.1466 14.32 64.5999 13.2267 64.5999 11.84V11.44C64.5999 10.0267 64.1466 8.92 63.2399 8.12C62.3333 7.32 61.1199 6.92 59.5999 6.92H53.2399V16.32Z"
      fill={color}
    />
    <path
      d="M81.8346 31.56C79.8613 31.56 78.1013 31.16 76.5546 30.36C75.0346 29.5333 73.8346 28.36 72.9546 26.84C72.0746 25.32 71.6346 23.52 71.6346 21.44V20.84C71.6346 18.76 72.0746 16.9733 72.9546 15.48C73.8346 13.96 75.0346 12.7867 76.5546 11.96C78.1013 11.1333 79.8613 10.72 81.8346 10.72C83.8079 10.72 85.5679 11.1333 87.1146 11.96C88.6613 12.7867 89.8746 13.96 90.7546 15.48C91.6346 16.9733 92.0746 18.76 92.0746 20.84V21.44C92.0746 23.52 91.6346 25.32 90.7546 26.84C89.8746 28.36 88.6613 29.5333 87.1146 30.36C85.5679 31.16 83.8079 31.56 81.8346 31.56ZM81.8346 27.88C83.6479 27.88 85.1146 27.3067 86.2346 26.16C87.3813 24.9867 87.9546 23.3733 87.9546 21.32V20.96C87.9546 18.9067 87.3946 17.3067 86.2746 16.16C85.1546 14.9867 83.6746 14.4 81.8346 14.4C80.0479 14.4 78.5813 14.9867 77.4346 16.16C76.3146 17.3067 75.7546 18.9067 75.7546 20.96V21.32C75.7546 23.3733 76.3146 24.9867 77.4346 26.16C78.5813 27.3067 80.0479 27.88 81.8346 27.88Z"
      fill={color}
    />
    <path
      d="M105.284 31.56C102.777 31.56 100.697 31 99.044 29.88C97.3907 28.76 96.3773 27.0667 96.004 24.8L99.844 23.88C100.057 24.9733 100.417 25.84 100.924 26.48C101.431 27.12 102.057 27.5733 102.804 27.84C103.577 28.1067 104.404 28.24 105.284 28.24C106.591 28.24 107.591 27.9867 108.284 27.48C109.004 26.9733 109.364 26.32 109.364 25.52C109.364 24.72 109.031 24.1333 108.364 23.76C107.697 23.3867 106.711 23.08 105.404 22.84L104.044 22.6C102.711 22.36 101.497 22.0133 100.404 21.56C99.3106 21.1067 98.444 20.48 97.804 19.68C97.164 18.88 96.844 17.8533 96.844 16.6C96.844 14.7333 97.5373 13.2933 98.924 12.28C100.311 11.24 102.151 10.72 104.444 10.72C106.657 10.72 108.471 11.2267 109.884 12.24C111.324 13.2267 112.257 14.5733 112.684 16.28L108.844 17.36C108.604 16.16 108.097 15.32 107.324 14.84C106.551 14.3333 105.591 14.08 104.444 14.08C103.324 14.08 102.444 14.2933 101.804 14.72C101.164 15.12 100.844 15.6933 100.844 16.44C100.844 17.24 101.151 17.8267 101.764 18.2C102.404 18.5733 103.257 18.8533 104.324 19.04L105.724 19.28C107.137 19.52 108.431 19.8533 109.604 20.28C110.777 20.7067 111.697 21.32 112.364 22.12C113.057 22.92 113.404 23.9867 113.404 25.32C113.404 27.2933 112.671 28.8267 111.204 29.92C109.737 31.0133 107.764 31.56 105.284 31.56Z"
      fill={color}
    />
    <path
      d="M118.22 31V11.28H122.34V31H118.22ZM120.3 8.6C119.5 8.6 118.82 8.34667 118.26 7.84C117.726 7.30667 117.46 6.62667 117.46 5.8C117.46 4.97333 117.726 4.30667 118.26 3.8C118.82 3.26667 119.5 3 120.3 3C121.126 3 121.806 3.26667 122.34 3.8C122.873 4.30667 123.14 4.97333 123.14 5.8C123.14 6.62667 122.873 7.30667 122.34 7.84C121.806 8.34667 121.126 8.6 120.3 8.6Z"
      fill={color}
    />
    <path
      d="M135.854 31C134.654 31 133.694 30.64 132.974 29.92C132.281 29.2 131.934 28.24 131.934 27.04V14.76H126.494V11.28H131.934V4.76H136.054V11.28H141.934V14.76H136.054V26.32C136.054 27.12 136.427 27.52 137.174 27.52H141.294V31H135.854Z"
      fill={color}
    />
    <path
      d="M146.774 31V11.28H150.894V31H146.774ZM148.854 8.6C148.054 8.6 147.374 8.34667 146.814 7.84C146.281 7.30667 146.014 6.62667 146.014 5.8C146.014 4.97333 146.281 4.30667 146.814 3.8C147.374 3.26667 148.054 3 148.854 3C149.681 3 150.361 3.26667 150.894 3.8C151.428 4.30667 151.694 4.97333 151.694 5.8C151.694 6.62667 151.428 7.30667 150.894 7.84C150.361 8.34667 149.681 8.6 148.854 8.6Z"
      fill={color}
    />
    <path
      d="M161.569 31L154.929 11.28H159.289L164.529 27.96H165.169L170.409 11.28H174.769L168.129 31H161.569Z"
      fill={color}
    />
    <path
      d="M186.326 31.36C184.833 31.36 183.5 31.0267 182.326 30.36C181.153 29.6933 180.233 28.7467 179.566 27.52C178.9 26.2933 178.566 24.8267 178.566 23.12V11.28H182.686V22.84C182.686 24.5467 183.113 25.8133 183.966 26.64C184.82 27.44 186.006 27.84 187.526 27.84C189.206 27.84 190.553 27.28 191.566 26.16C192.606 25.0133 193.126 23.3733 193.126 21.24V11.28H197.246V31H193.206V28.04H192.566C192.193 28.84 191.526 29.6 190.566 30.32C189.606 31.0133 188.193 31.36 186.326 31.36Z"
      fill={color}
    />
    <path
      d="M211.417 31.56C208.91 31.56 206.83 31 205.177 29.88C203.523 28.76 202.51 27.0667 202.137 24.8L205.977 23.88C206.19 24.9733 206.55 25.84 207.057 26.48C207.563 27.12 208.19 27.5733 208.937 27.84C209.71 28.1067 210.537 28.24 211.417 28.24C212.723 28.24 213.723 27.9867 214.417 27.48C215.137 26.9733 215.497 26.32 215.497 25.52C215.497 24.72 215.163 24.1333 214.497 23.76C213.83 23.3867 212.843 23.08 211.537 22.84L210.177 22.6C208.843 22.36 207.63 22.0133 206.537 21.56C205.443 21.1067 204.577 20.48 203.937 19.68C203.297 18.88 202.977 17.8533 202.977 16.6C202.977 14.7333 203.67 13.2933 205.057 12.28C206.443 11.24 208.283 10.72 210.577 10.72C212.79 10.72 214.603 11.2267 216.017 12.24C217.457 13.2267 218.39 14.5733 218.817 16.28L214.977 17.36C214.737 16.16 214.23 15.32 213.457 14.84C212.683 14.3333 211.723 14.08 210.577 14.08C209.457 14.08 208.577 14.2933 207.937 14.72C207.297 15.12 206.977 15.6933 206.977 16.44C206.977 17.24 207.283 17.8267 207.897 18.2C208.537 18.5733 209.39 18.8533 210.457 19.04L211.857 19.28C213.27 19.52 214.563 19.8533 215.737 20.28C216.91 20.7067 217.83 21.32 218.497 22.12C219.19 22.92 219.537 23.9867 219.537 25.32C219.537 27.2933 218.803 28.8267 217.337 29.92C215.87 31.0133 213.897 31.56 211.417 31.56Z"
      fill={color}
    />
    <defs>
      <clipPath id="clip0_1_554">
        <rect width="36" height="36" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Logo;
