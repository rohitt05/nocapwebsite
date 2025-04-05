import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
    title: string;
    content: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
            <div className="bg-white text-black rounded-xl w-[90%] md:w-[600px] p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-black hover:text-red-500"
                >
                    <X size={20} />
                </button>
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <div className="text-sm text-gray-800 whitespace-pre-wrap">{content}</div>
            </div>
        </div>
    );
};

export default Modal;
