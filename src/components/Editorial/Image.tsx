import Box from '@mui/material/Box';
import { type SystemStyleObject } from '@mui/system/styleFunctionSx';
import { type CSSProperties, type ImgHTMLAttributes } from 'react';
import { type CommonProps } from 'types/components';
import wave from '../../assets/Editorial/wave.svg';

export interface EditorialImageProps extends CommonProps {
  image: ImgHTMLAttributes<HTMLImageElement>;
  pattern?: 'polka' | 'solid' | 'waves' | 'none';
}

const translateTopRight = 'translate(40px, -30px)';
const scaleAndTranslateBottomLeft = 'translate(-20px, 10px) scale(0.89)';
const polka =
  'radial-gradient(#EEEEEE 25%, transparent 0), radial-gradient(#EEEEEE 25%, transparent 0)';
const waves = `url(${wave as string})`;

export const Image = ({ image, pattern = 'none' }: EditorialImageProps) => (
  <Box
    sx={{
      ...styles.img,
      ...patterns[pattern],
    }}
  >
    <img
      style={{
        ...styles.img,
        transform: pattern && pattern !== 'none' ? translateTopRight : '',
      }}
      {...image}
    />
  </Box>
);

const styles: Record<string, CSSProperties> = {
  img: {
    objectFit: 'contain',
    objectPosition: 'center',
    height: 'auto',
    maxWidth: '100%',
    userSelect: 'none',
  },
};

const patterns: Record<string, SystemStyleObject> = {
  polka: {
    backgroundColor: 'transparent',
    backgroundImage: polka,
    backgroundSize: '15px 15px',
    backgroundRepeat: 'repeat',
    transform: scaleAndTranslateBottomLeft,
  },
  solid: {
    backgroundColor: '#C4C4C4',
    transform: scaleAndTranslateBottomLeft,
  },
  waves: {
    backgroundImage: waves,
    backgroundRepeat: 'no-repeat',
    transform: scaleAndTranslateBottomLeft,
  },
};
