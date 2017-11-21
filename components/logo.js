import React from  'react'
import styled from 'react-emotion'

export default ({ height, width, fill = "black", ...props }) => (
  <Logo xmlns="http://www.w3.org/2000/svg" {...{ height, width, fill }} viewBox="3 3 195 195">
    <path xmlns="http://www.w3.org/2000/svg" fill={fill} stroke="none" strokeWidth="1" d="M 16.46,151.00            C 10.85,141.78 7.43,131.51 5.21,121.00              -4.30,76.01 17.13,31.76 59.00,11.78              73.99,4.63 88.66,2.81 105.00,3.00              125.70,3.25 149.39,12.92 165.00,26.30              168.20,29.04 179.37,38.86 178.97,42.99              178.70,45.77 175.02,48.36 173.00,50.00              173.00,50.00 155.00,64.75 155.00,64.75              152.97,66.42 148.98,70.28 146.17,69.55              143.94,68.97 140.53,63.88 138.83,62.01              134.89,57.71 130.08,54.27 125.00,51.44              101.38,38.25 70.55,46.76 54.56,68.00              41.52,85.80 42.11,109.86 54.56,128.00              60.49,137.08 68.01,141.01 71.65,149.00              76.11,158.79 76.00,183.65 76.00,195.00              51.93,187.97 29.67,172.69 16.46,151.00 Z            M 124.00,89.00            C 124.00,89.00 111.17,103.00 111.17,103.00              111.17,103.00 90.00,124.00 90.00,124.00              90.00,124.00 78.00,85.00 78.00,85.00              78.00,85.00 124.00,89.00 124.00,89.00 Z            M 186.00,147.00            C 184.44,155.20 175.96,165.21 169.99,170.91              151.58,188.46 126.22,198.00 101.00,198.00              101.00,198.00 101.00,152.00 101.00,152.00              119.13,150.53 136.54,142.20 146.00,126.00              146.00,126.00 186.00,147.00 186.00,147.00 Z"/>
  </Logo>
)

const Logo = styled.svg`
  border: ${ ({fill}) => `${fill} 3px solid`};
  border-radius: 120px;
  background: white;
  padding: 15px;
`