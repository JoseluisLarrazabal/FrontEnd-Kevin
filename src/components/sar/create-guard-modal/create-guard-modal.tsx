import { FaAngleLeft } from "react-icons/fa6";
import "./create-guard-modal.css"
import { useState } from "react";

interface CreateGuardModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CreateGuardModal({ isOpen, onClose } : CreateGuardModalProps ) {
    const [selectedTime, setSelectedTime] = useState<string>('Mañana');

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTime(event.target.value);
    };

    if (!isOpen) return null;
      
    return (
        <div className="modal-guard">
            <div className="modal-guard-content">
                <div className="modal-guard-header">
                    <h2>
                        <button onClick={onClose}><FaAngleLeft /></button> Registrar guardia
                    </h2>                    
                </div>
                <div className="modal-guard-body">
                    <input className="form-control" type="text" placeholder="Buscar por Nombre o CI" />

                    <div><b>Nombre completo:</b></div>
                    <div><b>CI:</b></div>
                    <div>
                        <b>TURNO:</b>
                        <div className="options-container">
                            <label className="radio-label">
                                <input type="radio" name="time" value="Mañana" checked={selectedTime === 'Mañana'} onChange={handleTimeChange}/> Mañana
                            </label>
                            <label className="radio-label">
                                <input type="radio" name="time" value="Tarde" checked={selectedTime === 'Tarde'} onChange={handleTimeChange}/> Tarde
                            </label>
                            <label className="radio-label">
                                <input type="radio" name="time" value="Noche" checked={selectedTime === 'Noche'} onChange={handleTimeChange}/> Noche
                            </label>
                        </div>                  
                    </div>   
                    <button className="btn btn-blue">Registrar</button>              
                </div>       
            </div>
        </div>
    );
}