import styled from 'styled-components';
export const ButtonLogout = styled.button `
  display: inline-block;
  margin-right: 10px;
  width: 136px;
  height: 50px;

  color: rgba(255, 255, 255, 1);
  background-color: ${p => p.theme.colors.yellow};
  text-transform: uppercase;

  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 1,25;
  letter-spacing: -0.03em;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    color: ${props => (props.$isHome ? '#F6B83D' : '#FFFFFF')}; 
    background-color: ${props => (props.$isHome ? '#FFF4DF' : '#F9B020')}; 
  }
`;
export const ContainerLogout = styled.div `
display: flex;
gap: 8px;
`;
//# sourceMappingURL=UserNav.styled.js.map