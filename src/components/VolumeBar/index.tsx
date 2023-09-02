import { useState } from 'react'
import { Box } from '@mui/material';

const VolumeBar = () => {
    const [selectedValues, setSelectedValues] = useState<number[]>([5]);
    const [label, setLabel] = useState<string>('Low')
    const handleBarClick = (value: number) => {
        const updatedSelectedValues = [];
        let selectedLabel = '';
    
        for (let i = 5; i >= 1; i--) {
          if (i >= value) {
            updatedSelectedValues.push(i);
            if (i === value) {
              selectedLabel = getLabelForValue(i);
            }
          }
        }
    
        setSelectedValues(updatedSelectedValues);
        setLabel(selectedLabel);
      };
    
      const getLabelForValue = (value: number) => {
        const labelMap: { [key: number]: string } = {
          1: 'High',
          2: 'High',
          3: 'Medium',
          4: 'Low',
          5: 'Low',
        };
        return labelMap[value] || '';
      };
    
    return (
        <Box className="volume-bar">
            <Box my={2}>
                <h4 style={{ fontSize: '1.8rem', color: '#ffff' }}>{label}</h4>
            </Box>
            <Box className="bar-container">
                {[1, 2, 3, 4, 5].map((value) => (
                    <Box
                    key={value}
                    id={`bar-${value}`}
                    className={`bar ${
                      selectedValues.includes(value) ? 'selected' : ''
                    }`}
                    onClick={() => handleBarClick(value)}
                    data-testid={`bar-${value}`} // Add data-testid
                  />
                ))}
            </Box>
        </Box>
    )
}

export default VolumeBar