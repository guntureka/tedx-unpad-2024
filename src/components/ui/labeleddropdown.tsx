import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface LabeledDropdownProps {
  label: string;
  id: string;
  className?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  options: string[];
  selectedOption?: string;
  onSelectChange?: (selectedOption: string) => void;
}

const LabeledDropdown: React.FC<LabeledDropdownProps> = ({
  label,
  id,
  className,
  register,
  error,
  options,
  selectedOption = "",
  onSelectChange,
}) => {
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (onSelectChange) {
      onSelectChange(selectedValue);
    }
  };

  return (
    <div className={`w-full relative ${className}`}>
      <label
        htmlFor={id}
        className="block mb-[13px] font-inter-600 text-[14px] leading-tight text-white"
      >
        {label}
      </label>
      <div className="dropdown" style={{ position: 'relative' }}>
        <select
          style={{MozAppearance: "none" , WebkitAppearance: "none"}}
          id={id}
          className="w-full p-[16px] bg-[#F5F6FA] rounded-[4px] font-inter-400 text-[14px] focus:outline-0 text-[#333333] placeholder-opacity-0 disabled:bg-gray-light"
          {...register}
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="" disabled>Option...</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-[14px] flex items-center pointer-events-none">
          <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.2071 7.70685C8.01957 7.89433 7.76526 7.99964 7.5001 7.99964C7.23493 7.99964 6.98063 7.89433 6.7931 7.70685L1.1361 2.04985C1.04059 1.95761 0.964406 1.84726 0.911997 1.72526C0.859588 1.60326 0.832002 1.47204 0.830848 1.33926C0.829694 1.20648 0.854996 1.0748 0.905277 0.951901C0.955558 0.829005 1.02981 0.717352 1.1237 0.623459C1.2176 0.529567 1.32925 0.455314 1.45214 0.405033C1.57504 0.354752 1.70672 0.32945 1.8395 0.330604C1.97228 0.331758 2.1035 0.359344 2.2255 0.411753C2.34751 0.464162 2.45785 0.540344 2.5501 0.635854L7.5001 5.58586L12.4501 0.635854C12.6387 0.453696 12.8913 0.352902 13.1535 0.35518C13.4157 0.357459 13.6665 0.462628 13.8519 0.648036C14.0373 0.833444 14.1425 1.08426 14.1448 1.34645C14.1471 1.60865 14.0463 1.86125 13.8641 2.04985L8.2071 7.70685Z" fill="black"/>
          </svg>
        </div>
      </div>
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

LabeledDropdown.displayName = 'LabeledDropdown';

export default LabeledDropdown;