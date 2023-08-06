import { DatePicker, DatePickerProps } from "@progress/kendo-react-dateinputs";

export type MyDatePickerProps = DatePickerProps & {
    errorMessage?: string;
  };
  

const MyDatePicker = (props: MyDatePickerProps) => {

const { errorMessage, ...datePickerProps} = props;
  return (
    <>
    <DatePicker format="MM-dd-yyyy" {...datePickerProps} />
    {errorMessage ? 
        (<p>{errorMessage}</p>)
        : null
    }
    </>
  )
};

export default MyDatePicker;