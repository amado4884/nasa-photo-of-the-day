import React, { useState } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const DatePickerStyled = styled.section`
  width: 50rem;
  margin: auto;
`;

const DatePicker = (props) => {
  const [date, setDate] = useState(props.date);
  return (
    <DatePickerStyled>
      <Form
        inline
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(date);
        }}
      >
        <FormGroup style={{ margin: "auto" }}>
          <Label htmlFor="date" className="mr-sm-2">
            Date
          </Label>
          <Input
            type="date"
            className="date form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            name="date"
            id="date"
          />
          <Button color="primary" className="ml-sm-2">
            Go
          </Button>
        </FormGroup>
      </Form>
    </DatePickerStyled>
  );
};
export default DatePicker;
