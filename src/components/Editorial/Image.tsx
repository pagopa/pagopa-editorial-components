import Box from '@mui/material/Box';
import { type SystemStyleObject } from '@mui/system/styleFunctionSx';
import { type CSSProperties, type ImgHTMLAttributes } from 'react';
import { type CommonProps } from 'types/components';

export interface EditorialImageProps extends CommonProps {
  image: ImgHTMLAttributes<HTMLImageElement>;
  pattern?: 'dots' | 'solid' | 'none';
}

const translateTopRight = 'translate(40px, -30px)';
const scaleAndTranslateBottomLeft = 'translate(-20px, 10px) scale(0.89)';
const dots = 'radial-gradient(circle at 3px 3px, #EEEEEE 3px, transparent 0)';

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
  dots: {
    backgroundColor: 'transparent',
    backgroundImage: dots,
    backgroundSize: '21px 21px',
    backgroundRepeat: 'repeat',
    transform: scaleAndTranslateBottomLeft,
  },
  solid: {
    backgroundColor: '#C4C4C4',
    transform: scaleAndTranslateBottomLeft,
  },
};
