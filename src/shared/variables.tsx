import { keyframes } from 'styled-components';

export const colors = {
  white: '#FFF',
  offWhite: '#E4E1DD',
  purple: '#785EF2',
  darkPurple: '#4e3f8f',
  blueGrey: '#525F7F',
};

export const boxShadow = {
  shadow: '0 3px 5px rgb(0, 0, 0, 0.2)',
  shadowLarge: '0 0 30px 5px  rgb(0, 0, 0, 0.2)',
};

export const mediaQuery = {
  xxSmall: '440px',
  xSmall: '576px',
  small: '768px',
  medium: '992px',
  large: '1200px',
  xLarge: '1500px',
};

export const animation = {
  move: keyframes`
    0% { transform: translatey(0px); }
    50% { transform: translatey(100px); }
    100% { transform: translatey(0px); }
  }`,
  move2: keyframes`
    0% { transform: translatey(0px) rotate(180deg); }
    50% { transform: translatey(100px) rotate(180deg); }
    100% { transform: translatey(0px) rotate(180deg); }
  }`,
  moveInLeft: keyframes`
    0% { opacity: 0; transform: translateX(-10rem); }
    80% { transform: translateX(1rem); }
    100% { opacity: 1; transform: translateX(0);
  }`,
  moveInRight: keyframes`
    0% { opacity: 0; transform: translateX(10rem); }
    80% { transform: translateX(-1rem); }
    100% { opacity: 1; transform: translateX(0);
  }`,
  moveInDown: keyframes`
    0% { opacity: 0; transform: translateY(3rem); }
    100% { opacity: 1; transform: translateY(0); 
  }`,
  slowEffects: '20s ease-in-out infinite',
  defaultEffects: '2s ease-out',
};
