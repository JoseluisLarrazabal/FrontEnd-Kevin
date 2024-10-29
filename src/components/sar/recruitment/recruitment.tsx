import React, { useState } from 'react';
import './recruitment.css';
import LayoutSar from '../layout-sar/layout-sar';

const RecruitmentForm: React.FC = () => {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        ci: '',
        fechaNacimiento: '',
        correo: '',
        gruposanguineo: '',
        optarLibretaMilitar: false,
        carnetIdentidad: null,
        certificadoNacimiento: null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const isCheckbox = (e.target as HTMLInputElement).type === 'checkbox';
        setFormData(prevState => ({
            ...prevState,
            [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : null
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <LayoutSar selectedOption="Personal">
            <div className="recruitment-form-container">
                <h3>FORMULARIO DE RECLUTAMIENTO</h3> 
                <form className="recruitment-form" onSubmit={handleSubmit}>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Nombres:</label>
                            <input type="text" name="nombres" onChange={handleChange} value={formData.nombres} />
                        </div>
                        <div className="form-group">
                            <label>Apellidos:</label>
                            <input type="text" name="apellidos" onChange={handleChange} value={formData.apellidos} />
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>CI:</label>
                            <input type="text" name="ci" onChange={handleChange} value={formData.ci} />
                        </div>
                        <div className="form-group">
                            <label>Fecha de nacimiento:</label>
                            <input type="date" name="fechaNacimiento" onChange={handleChange} value={formData.fechaNacimiento} />
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Correo electrónico:</label>
                            <input type="email" name="correo" onChange={handleChange} value={formData.correo} />
                        </div>
                        <div className="form-group">
                            <label>Grupo Sanguineo:</label>
                            <input type="text" name="gruposanguineo" onChange={handleChange} value={formData.gruposanguineo} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>
                            <input type="checkbox" name="optarLibretaMilitar" onChange={handleChange} checked={formData.optarLibretaMilitar} />
                            Optar por libreta militar
                        </label>
                    </div>
                    <div className="form-group-row">
                        <div className="form-group file-upload">
                            <label htmlFor="carnetIdentidad" className="file-upload-label">
                                Fotocopia de carnet de identidad
                                <img src="/subiricon.png" alt="Upload" />
                            </label>
                            <input type="file" id="carnetIdentidad" name="carnetIdentidad" onChange={handleFileChange} />
                        </div>
                        <div className="form-group file-upload">
                            <label htmlFor="certificadoNacimiento" className="file-upload-label">
                                Certificado de nacimiento
                                <img src="/subiricon.png" alt="Upload" />
                            </label>
                            <input type="file" id="certificadoNacimiento" name="certificadoNacimiento" onChange={handleFileChange} />
                        </div>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </LayoutSar>
    );
};

export default RecruitmentForm;
