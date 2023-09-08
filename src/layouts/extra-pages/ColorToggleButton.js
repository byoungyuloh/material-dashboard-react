import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ColorToggleButton = ({ index, selectedValues, onValueChange }) => {
  const [alignment, setAlignment] = useState(selectedValues[index] || []);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    onValueChange(index, newAlignment);
  };

  return (
    <Box display="flex" flexDirection="column">
      {/* row1 */}
      <Typography variant="h6">항생제</Typography>
      <Box display="flex" flexDirection="row" marginTop={1}>
        <ToggleButtonGroup
          value={alignment}
          onChange={handleChange}
          exclusive
          aria-label={`Platform-${index}`}
        >
          <ToggleButton value="ANTI_B" name={`platform-${index}`} size="small">
          ANTI_B
          </ToggleButton>
          <ToggleButton value="ANTI_F" name={`platform-${index}`} size="small">
          ANTI_F
          </ToggleButton>
          <ToggleButton value="ANTI_V" name={`platform-${index}`}size="small">
          ANTI_V
          </ToggleButton>
          <ToggleButton value="ANTI_T" name={`platform-${index}`}size="small">
          ANTI_T
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {/* row2 */}
      <Typography variant="h6" sx={{mt:2}}>기타약물</Typography>
      <Box display="flex" flexDirection="row" marginTop={1}>
        <ToggleButtonGroup
          value={alignment}
          onChange={handleChange}
          exclusive
          aria-label={`Platform-${index}`}
        >
          <ToggleButton value="Steroid" name={`platform-${index}`} size="small">
          Steroid
          </ToggleButton>
          <ToggleButton value="Albumin" name={`platform-${index}`} size="small">
          Albumin
          </ToggleButton>
          <ToggleButton value="NM_Blocker" name={`platform-${index}`} size="small">
          NM_Blocker
          </ToggleButton>
          <ToggleButton value="Antithrombin" name={`platform-${index}`} size="small">
          Antithrombin
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {/* row3 */}
      <Typography variant="h6" sx={{ mt: 2 }}>
        기타치료
      </Typography>
      <Box display="flex" flexDirection="row" marginTop={1}>
        <ToggleButtonGroup
          value={alignment}
          onChange={handleChange}
          exclusive
          aria-label={`Treatment-${index}`}
        >
          <ToggleButton value="Arterial_SE" name={`treatment-${index}`} size="small">
          Arterial_SE
          </ToggleButton>
          <ToggleButton value="Central_SE" name={`treatment-${index}`} size="small">
          Central_SE
          </ToggleButton>
          <ToggleButton value="ECMO_SE" name={`treatment-${index}`} size="small">
          ECMO_SE
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Typography variant="h6" sx={{ mt: 2 }}>
        미조치
      </Typography>
      <Box display="flex" flexDirection="row" marginTop={1}>
        <ToggleButtonGroup
          value={alignment}
          onChange={handleChange}
          exclusive
          aria-label={`Treatment-${index}`}
        >
          <ToggleButton value="미조치" name={`treatment-${index}`} size="small">
          미조치
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default ColorToggleButton;
