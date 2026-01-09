import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Toggle = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-700 py-4">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center text-left focus:outline-none"
            >
                <h3 className="text-[16px] font-bold uppercase">{title}</h3>
                {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
            </button>
            {isOpen && (
                <div className="mt-4">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Toggle;
