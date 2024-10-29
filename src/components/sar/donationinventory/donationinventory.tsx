import React, { useState, useEffect } from 'react';
import './donationinventory.css';
import LayoutSar from '../layout-sar/layout-sar';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Institution {
    institutionID: number;
    name: string;
}

const DonationInventory = () => {
    const [formData, setFormData] = useState({
        institucion: '',
        tipo: '',
        cantidad: ''
    });

    const [items, setItems] = useState<{ tipo: string, cantidad: string }[]>([
        { tipo: 'Pala', cantidad: '10' },
        { tipo: 'Pico', cantidad: '5' },
        { tipo: 'Martillo', cantidad: '3' }
    ]);

    const [institutions, setInstitutions] = useState<Institution[]>([]); // Estado para instituciones

    // UseEffect para obtener las donaciones y filtrar las instituciones únicas
    useEffect(() => {
        const fetchInstitutions = async () => {
            try {
                const response = await fetch('https://localhost:7149/api/donation');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                
                // Filtra solo las instituciones únicas por nombre
                const uniqueInstitutions = Array.from(new Set(data.map((donation: any) => donation.institution.name)))
                    .map(name => {
                        const institution = data.find((donation: any) => donation.institution.name === name);
                        return { institutionID: institution.institution.institutionID, name: institution.institution.name };
                    });
                
                setInstitutions(uniqueInstitutions);
            } catch (err) {
                console.error("Error al obtener las instituciones:", err);
            }
        };
    
        fetchInstitutions();
    }, []);
    

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
        console.log({ institucion: formData.institucion, items });
    };

    const goTo = useNavigate();

    return (
        <LayoutSar selectedOption="Inventario">
            <div className="donationinventory-container">
                <form className="donationinventory-form" onSubmit={handleSubmit}>
                    <h2 className="donationinventory-header">
                        <button onClick={() => goTo(-1)}><FaAngleLeft /></button>
                        <b>INVENTARIO &gt; </b> <span> Donación</span> 
                    </h2> 
                    <div className="form-group">
                        <label>Institución:</label>
                        <select name="institucion" onChange={handleChange} value={formData.institucion}>
                            <option value="">Seleccione una institución...</option>
                            {institutions.map(inst => (
                                <option key={inst.institutionID} value={inst.institutionID}>
                                    {inst.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <h2>Detalles:</h2>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Tipo:</label>
                            <select name="tipo" onChange={handleChange} value={formData.tipo}>
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
                        <table className="donationinventory-table">
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Cantidad</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.tipo}</td>
                                        <td>{item.cantidad}</td>
                                        <td>
                                            <button type="button" className="icon-button-trash" onClick={() => handleRemoveItem(index)}>
                                                🗑️
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="form-buttons">
                        <button type="submit" onClick={() => goTo('/sar/inventario/donaciones/registro-activo-fijo')}>Registrar</button>
                    </div>
                </form>
            </div>
        </LayoutSar>
    );
};

export default DonationInventory;
