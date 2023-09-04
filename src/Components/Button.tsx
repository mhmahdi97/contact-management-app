type buttonProps = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
};

const Button = ({onClick, children}: buttonProps) => {
    return (
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 my-10 rounded"
        onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;