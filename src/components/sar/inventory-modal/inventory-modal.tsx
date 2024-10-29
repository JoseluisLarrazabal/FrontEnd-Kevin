import { FaAngleLeft } from "react-icons/fa6";
import "./inventory-modal.css"

interface InventoryModalList {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalInventory({ isOpen, onClose } : InventoryModalList ) {
    if (!isOpen) return null;
      
    return (
        <div className="modal-inventory">
            <div className="modal-inventory-content">
                <div className="modal-inventory-header">
                    <h2>
                        <button className="icon-button" onClick={onClose}><FaAngleLeft /></button> DETALLES
                    </h2>                    
                </div>
                <div className="modal-inventory-body">
                    <div className="modal-inventory-row">
                        <div>
                            <b>Tipo:</b> 
                            Silla de madera 
                        </div>
                        <div>
                            <b>Código:</b> 
                            xxxxxxxxxx
                        </div>    
                    </div>
                    <div><b>Detalles:</b> Silla color madera corriente color café</div>
                    <div><b>Área:</b> xxxxxxxx</div>
                    <div><b>Institución:</b> Alcaldia de Cochabamba</div>          
                </div>         
            </div>
        </div>
    );
}