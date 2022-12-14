import React from 'react';

import { Box, useTheme } from '@mui/material';
import { IconLinksGroup } from './IconLinksGroup';
import { AttributionLink } from './AttributionLink';
import {
  getFooterSx,
  footerContainerSx,
  footerLinksContainerSx,
} from './FooterStyles';

function Footer() {
  const mode = useTheme().palette.mode;
  const themedFooterSx = getFooterSx(mode);

  return (
    <Box component="footer" sx={themedFooterSx}>
      <Box sx={footerContainerSx}>
        <Box sx={footerLinksContainerSx}>
          <AttributionLink />
          <IconLinksGroup />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
