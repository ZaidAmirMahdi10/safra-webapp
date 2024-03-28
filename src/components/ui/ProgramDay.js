import { TextareaAutosize } from "@mui/material";

export default function ProgramDay({ dayNum, value, onChange }) {
  console.log(value);
  return (
    <div>
      <label htmlFor={`safraPrograme${dayNum}`}>Day {dayNum}</label>
      <TextareaAutosize
        className="textarea"
        style={{ width: "100%" }}
        placeholder={`Day ${dayNum} Programme`}
        id={`safraPrograme${dayNum}`}
        minRows={3}
        fullWidth
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
