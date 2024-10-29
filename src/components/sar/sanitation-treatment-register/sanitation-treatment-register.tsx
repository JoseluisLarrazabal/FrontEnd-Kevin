import './sanitation-treatment-register.css';
import LayoutSar from '../layout-sar/layout-sar';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface RecordTreatment {
    recordTreatmentsID: number;
    attentionDate: Date;
    diagnosis: string;
    treatment: string;
    person: {
        personID: number;
        name: string;
        lastname: string;
    };
}

const TreatmentRegister: React.FC = () => {
    const [formData, setFormData] = useState({
        fecha: '',
        paciente: '',
        diagnostico: '',
        tratamiento: ''
    });

    const [patients, setPatients] = useState<{ id: number; fullName: string }[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

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

    useEffect(() => {
        const fetchPatients = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://localhost:7149/api/RecordTreatments');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data: RecordTreatment[] = await response.json();

                // Extrae los nombres completos únicos de los pacientes
                const uniquePatients = Array.from(
                    new Map(
                        data.map(record => [record.person.personID, { id: record.person.personID, fullName: `${record.person.name} ${record.person.lastname}` }])
                    ).values()
                );

                setPatients(uniquePatients);
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

        fetchPatients();
    }, []);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            AttentionDate: formData.fecha,
            Diagnosis: formData.diagnostico,
            Treatment: formData.tratamiento,
            Person: {
                PersonID: parseInt(formData.paciente)
            },
            Status: 1,
            RegisterDate: new Date().toISOString(),
            LastUpdate: new Date().toISOString(),
            UserID: 1
        };

        try {
            const response = await fetch('https://localhost:7149/api/RecordTreatments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            console.log('Registro exitoso:', result.message);
            // Opcional: agregar navegación o confirmación de éxito
        } catch (error) {
            console.error('Error al registrar el tratamiento:', error);
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
                    {success && <div className="success-message">{success}</div>}
                    {error && <div className="error-message">{error}</div>}
                    <h3>DATOS PERSONALES</h3>
                    <div className="form-group">
                        <label>Fecha de Diagnóstico:</label>
                        <input type="date" name="fecha" onChange={handleChange} value={formData.fecha} />
                    </div>
                    <div className="form-group">
                        <label>Paciente:</label>
                        <select name="paciente" onChange={handleChange} value={formData.paciente}>
                            <option value="">Seleccione...</option>
                            {patients.map((patient) => (
                                <option key={patient.id} value={patient.id}>
                                    {patient.fullName}
                                </option>
                            ))}
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
