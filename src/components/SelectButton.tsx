import { SelectButtonStyling } from "../Styles";

interface SelectButtonProps {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({
  children,
  selected,
  onClick,
}) => {
  // const classes = useSelectButtonStyles({
  //   selected,
  //   children: undefined,
  //   onClick: function (): void {
  //     throw new Error("Function not implemented.");
  //   },
  // });

  return (
    <div></div>
    // <SelectButtonStyling>
    //   <span onClick={onClick}>{children}</span>
    // </SelectButtonStyling>
  );
};

export default SelectButton;
