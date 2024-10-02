import styled from 'styled-components';

export const Container = styled.div` 
max-width: 100%;

@media (min-width: 1280px) {
  display: flex;
  gap: 20px;
}
`

export const ContainerForm = styled.form` 
padding:  ${p=>p.theme.spacing(4)};

@media (min-width: 768px) {
  padding: 40px 136px;
}

@media (min-width: 1280px) {
  padding: 60px 80px;
}
`

export const Title = styled.label` 
font-family: Manrope;
font-size: 28px;
font-weight: 700;
line-height: 1px;
letter-spacing: -0.03em;
color: #262626;
`

export const TitleSpan = styled.span` 
font-family: Manrope;
font-size: 14px;
font-weight: 700;
line-height: 1,29px;
color: #2B2B2A66;
`

export const RadioGroup = styled.div`
  display: flex;
  gap: ${p=>p.theme.spacing(2)};
  margin-bottom: 16px;
  margin-top: 20px;
`;

export const SvgIcon = styled.svg`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Error = styled.span`
font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,16;
letter-spacing: -0.03em;

  color: #EF2447;
  margin-bottom: 8px;
`;

export const ButtonSubmit = styled.button` 
display: block;
margin: 0 auto;
margin-bottom: 20px;
border-radius: 50%;

&:hover{
   border: 3px solid #FBE7C1;
}
`
export const ContainerInput = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
`;

export const InputWrapper = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
width: 100%;
  margin-bottom: 5px;
  padding: 9px 20px;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid #26262626;
  outline: none;
  
  &::placeholder {
    color: rgba(38, 38, 38, 0.5);
  }

  &:hover {
    border: 1px solid ${p => p.theme.colors.yellow};
  }
`;


export const ButtonLoad = styled.button` 
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: 36px;
padding: 10px;
gap: 5px;
border-radius: 30px;
border:none;

background-color: #FFF4DF;

&:hover{
    background-color: #FBE7C1;
}
`
export const ButtonLoadSpan = styled.span` 
font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,33;
letter-spacing: -0.02em;
color: #262626;
`

export const SuccessMessage = styled.p`
  margin-left: 10px;
  font-family: Manrope;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.03em;
  text-align: left;
  color: #08AA83;
`;

export const WrapperSelect = styled.div`
position: relative;
 width: 100%;
`;

export const SvgCalendar = styled.svg`
position: absolute;
top: 25%;
right: 10px;

`;

export const WrapperButton = styled.div`
display: flex;
gap: ${p => p.theme.spacing(2)};
justify-content: end;
`;

export const Button = styled.button`
width: 100px;
height: 42px;
padding: 12px 34px 12px 34px;
gap: 10px;
border-radius: 30px;
background: #2626260D;

font-family: Manrope;
font-size: 14px;
font-weight: 700;
line-height: 1,29;
letter-spacing: -0.03em;
color: #262626;

&:hover {
  background-color: ${p => p.theme.colors.yellow};
  color: ${p => p.theme.colors.white};
}
`;