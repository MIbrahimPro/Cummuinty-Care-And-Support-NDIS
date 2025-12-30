// src/App/new/components/Breadcrumb.jsx
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex items-center gap-2 text-sm">
            <a href="/" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Home size={16} />
            </a>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <ChevronRight size={14} className="text-gray-500" />
                    {item.href ? (
                        <a
                            href={item.href}
                            className="text-gray-400 hover:text-yellow-500 transition-colors"
                        >
                            {item.label}
                        </a>
                    ) : (
                        <span className="text-yellow-500 font-medium">{item.label}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;