import React, { useState } from 'react';
import './inventory_delivery.css';
import LayoutSar from '../layout-sar/layout-sar';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const InventoryDelivery = () => {
    const [formData, setFormData] = useState({
        responsable: '',
        tipo: '',
        cantidad: ''
    });

    const [items, setItems] = useState<{ tipo: string, cantidad: string }[]>([
        { tipo: 'Pala', cantidad: '10' },
        { tipo: 'Pico', cantidad: '5' },
        { tipo: 'Martillo', cantidad: '3' }
    ]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddItem = () => {
        setItems(prevItems => [...prevItems, { tipo: formData.tipo, cantidad: formData.cantidad }]);
        setFormData(prevState => ({ ...prevState, tipo: '', cantidad: '' }));
    };

    const handleRemoveItem = (index: number) => {
        setItems(prevItems => prevItems.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ responsable: formData.responsable, items });
    };

    const goTo = useNavigate();

    return (
        <LayoutSar  selectedOption="Inventario">
            <div className="inventoryDelivery-container">
                <form className="inventoryDelivery-form" onSubmit={handleSubmit}>
                    <h2 className="inventoryDelivery-header">
                        <button onClick={() => goTo(-1)}><FaAngleLeft /></button>
                        <b>INVENTARIO &gt; </b> <span> Entrega de insumos</span> 
                    </h2> 
                    <div className="form-group">
                        <label>Responsable:</label>
                        <select name="responsable" onChange={handleChange} value={formData.responsable}>
                            <option value="">Seleccione...</option>
                            <option value="Juan">Juan Perez</option>
                            <option value="Pedro">Pedro Quispe</option>
                        </select>
                    </div>
                    <h2>Detalles:</h2>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Tipo:</label>
                            <select name="tipo" onChange={handleChange} value={formData.tipo}>
                                <option value="">Seleccione...</option>
                                <option value="Pala">Pala</option>
                                <option value="Pico">Pico</option>
                                <option value="Martillo">Martillo</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Cantidad:</label>
                            <input type="text" name="cantidad" onChange={handleChange} value={formData.cantidad} />
                        </div>
                    </div>
                    <button type="button" onClick={handleAddItem}>Agregar</button>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <table className="inventoryReturn-table">
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Cantidad</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.tipo}</td>
                                        <td>{item.cantidad}</td>
                                        <td  className="inventoryDelivery-button">
                                            <button type="button" className="inventoryDelivery-button" onClick={() => handleRemoveItem(index)}>
                                                🗑️
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="form-buttons">
                        <button type="submit">Registrar</button>
                    </div>
                </form>
            </div>
        </LayoutSar>
    );
};

export default InventoryDelivery;
