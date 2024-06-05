"use client";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;
  height: 110vh; /* Adjusted for full viewport height */
  display: flex;

  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const HalfContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  background: #F4F8FF;

  border: 1px solid blue; /* Added for visual differentiation */
  overflow: auto; /* To handle overflow content */

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border: none;
    justify-content: flex-start; /* Align items at the start on mobile */
  }
`;

const FormContainer = styled.div`
  width: 100%; /* Ensure the form container takes full width */
  max-width: 600px; /* Optional: limit the maximum width */
  margin: 80px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the form elements horizontally */
  @media (max-width: 768px) {
    margin: 20px;
  }
`;

const Heading = styled.h2`
  font-size: 40px;
  margin-bottom: 50px;
  text-align: center; /* Center the heading text */
`;

const InputGroup = styled.div`
  display: flex;
  gap: 22px;
  justify-content: center; /* Center the input group horizontally */
  width: 100%;
  max-width: 900px; /* Ensure the group doesn't exceed a max width */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Center the inputs on mobile */
  }
`;

const InputWrapper = styled.div`
  gap: 12px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align input label and field to start */
  width: 100%;
  max-width: 432px; /* Ensure the wrapper doesn't exceed the input width */
`;

const InputLabel = styled.p`
  font-weight: 700;
  border: none;
`;

const StyledInput = styled.input`
  width: ${(props) => props.width || "432px"};
  height: ${(props) => props.height || "50px"};
  border-radius: 8px;
  border: none;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14);
  transition: box-shadow 0.3s ease;
  &:focus {
    box-shadow: 0px 0px 4px 0px rgba(34, 201, 151, 0.14);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MessageInput = styled(StyledInput)`
  width: 890px;
  height: 150px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BottomText = styled.h3`
  margin: 20px;
  color: black;
`;

const SendMessageButton = styled.button`
  size: lg;
  variant: solid;
  color: #fff;
  isIconOnly: false;
  startIcon: null;
  endIcon: null;
  border: 1px solid #007BFF;
  background: #007BFF;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 50px;
  &:hover {
    background: #0056b3;
  }
`;

function Page() {
  return (
    <PageContainer>
      <HalfContainer>
        <FormContainer>
          <Heading>Send an Inquiry</Heading>
          
          <InputGroup>
            <InputWrapper>
              <InputLabel>Name:*</InputLabel>
              <StyledInput type="text" />
            </InputWrapper>
            <InputWrapper>
              <InputLabel>Phone:*</InputLabel>
              <StyledInput type="text" />
            </InputWrapper>
          </InputGroup>
          <InputWrapper  style={{marginRight:'460px', marginTop:'50px'}}>
            <InputLabel>Message:*</InputLabel>
            <MessageInput type="text" as="textarea" />
          </InputWrapper>
          <SendMessageButton>Send Message</SendMessageButton>
        </FormContainer>
      </HalfContainer>
    </PageContainer>
  );
}

export default Page;
