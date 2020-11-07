import React, { FC } from 'react';

type CustomButtonProps = {
    label: string;
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export const CustomButton: FC<CustomButtonProps> = ({ label, handleClick }) => {
    return (
        <button className="button" type="submit" onClick={handleClick}>
            {label}
        </button>
    );
};
