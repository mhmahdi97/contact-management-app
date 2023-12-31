type TextFieldProps = {
   label: string;
   inputProps: { type: string; placeholder: string; };
   value: string;
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  };

const TextField = ({label, inputProps, onChange, value}: TextFieldProps) => {
    return (
        <div className="flex flex-col">
            <label className="mb-2 text-lg text-gray-800">{label}</label>
            <input className="bg-gray-200 py-2 px-3 border-2 outline-none" 
                {...inputProps}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default TextField;