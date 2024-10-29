
import './sanitation-treatment-register.css';
import LayoutSar from '../layout-sar/layout-sar';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface TreatmentRecord {
    recordTreatmentsID: number; 
    attentionDate: Date; 
    diagnosis: string;
    treatment: string;
    person: string;
    status: number;
    registerDate: Date;
    lastUpdate: Date;
    userID: number; 
}

const TreatmentRegister: React.FC = () => {
    const [formData, setFormData] = useState({
        fecha: '',
        paciente: '',
        diagnostico: '',
        tratamiento: ''
    });

    const [records, setRecords] = useState<TreatmentRecord[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        // Aquí se implementa el código para la obtención de datos
        setLoading(true);
        try {
            const response = await fetch('https://localhost:7149/api/RecordTreatments'); 
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data: TreatmentRecord[] = await response.json();
            setRecords(data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <LayoutSar selectedOption='Sanidad'>
            <div className="sanitation-form-container">
                <form className="sanitation-form" onSubmit={handleSubmit}>
                    <h2 className="sanitation-header">
                        <button type="button" onClick={handleBackClick}><FaAngleLeft /></button>
                        <b>SANIDAD &gt; </b> <span>Crear Tratamiento</span>
                    </h2>
                    <h3>DATOS PERSONALES</h3>
                    <div className="form-group">
                        <label>Fecha de Diagnóstico:</label>
                        <input type="date" name="fecha" onChange={handleChange} value={formData.fecha} />
                    </div>
                    <div className="form-group">
                        <label>Paciente:</label>
                        <select name="paciente" onChange={handleChange} value={formData.paciente}>
                            <option value="">Seleccione...</option>
                            <option value="Paciente 1">Paciente 1</option>
                            <option value="Paciente 2">Paciente 2</option>
                            <option value="Paciente 3">Paciente 3</option>
                        </select>
                    </div>
                    <h3>DATOS MÉDICOS</h3>
                    <div className="form-group">
                        <label>Diagnóstico:</label>
                        <textarea name="diagnostico" onChange={handleChange} value={formData.diagnostico} />
                    </div>
                    <div className="form-group">
                        <label>Tratamiento:</label>
                        <textarea name="tratamiento" onChange={handleChange} value={formData.tratamiento} />
                    </div>
                    <div className="form-group-buttons">
                        <button type="submit" className="registrar-button">Registrar</button>
                    </div>
                </form>
            </div>
        </LayoutSar>
    );
};

export default TreatmentRegister;
