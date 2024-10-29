import React, { useState, ChangeEvent, FormEvent } from 'react';
import './personal.css';
import LayoutSar from '../layout-sar/layout-sar';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const PersonalForm: React.FC = () => {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        grado: '',
        fechaNacimiento: '',
        departamento: '',
        ci: '',
        domicilio: '',
        telefono: '',
        celular: '',
        ocupacion: '',
        grupoSanguineo: '',
        religion: '',
        correo: '',
        alergias: '',
        senasParticulares: '',
        ultimoCurso: '',
        parentesco: '',
        direccion: '',
        telefonoEmergencia: '',
        celularEmergencia: '',
        chequeoMedico: File 
    });

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : null
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <LayoutSar selectedOption="Personal">
            <div className="personal-form-container">                
                <div className="personal-form-wrapper">
                    <h2 className="personal-header">
                        <button onClick={handleBackClick}><FaAngleLeft /></button>
                        <b>PERSONAL &gt; </b> <span>Filiación personal</span>
                    </h2>
                    <form className="personal-form" onSubmit={handleSubmit}>
                        <h2>DATOS PERSONALES</h2>
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
                                <label>Grado:</label>
                                <select name="grado" onChange={handleChange} value={formData.grado}>
                                    <option value="">Seleccione...</option>
                                    <option value="Grado 1">Grado 1</option>
                                    <option value="Grado 2">Grado 2</option>
                                    <option value="Grado 3">Grado 3</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Fecha de nacimiento:</label>
                                <input type="date" name="fechaNacimiento" onChange={handleChange} value={formData.fechaNacimiento} />
                            </div>
                        </div>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Departamento:</label>
                                <select name="departamento" onChange={handleChange} value={formData.departamento}>
                                    <option value="">Seleccione...</option>
                                    <option value="Departamento 1">Departamento 1</option>
                                    <option value="Departamento 2">Departamento 2</option>
                                    <option value="Departamento 3">Departamento 3</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>C.I.:</label>
                                <input type="text" name="ci" onChange={handleChange} value={formData.ci} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Domicilio:</label>
                            <input type="text" name="domicilio" onChange={handleChange} value={formData.domicilio} />
                        </div>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Teléfono:</label>
                                <input type="text" name="telefono" onChange={handleChange} value={formData.telefono} />
                            </div>
                            <div className="form-group">
                                <label>Celular:</label>
                                <input type="text" name="celular" onChange={handleChange} value={formData.celular} />
                            </div>
                            <div className="form-group">
                                <label>Ocupación:</label>
                                <input type="text" name="ocupacion" onChange={handleChange} value={formData.ocupacion} />
                            </div>
                        </div>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Grupo Sanguíneo:</label>
                                <input type="text" name="grupoSanguineo" onChange={handleChange} value={formData.grupoSanguineo} />
                            </div>
                            <div className="form-group">
                                <label>Religión:</label>
                                <input type="text" name="religion" onChange={handleChange} value={formData.religion} />
                            </div>
                            <div className="form-group">
                                <label>Correo:</label>
                                <input type="email" name="correo" onChange={handleChange} value={formData.correo} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Alergias:</label>
                            <input type="text" name="alergias" onChange={handleChange} value={formData.alergias} />
                        </div>
                        <div className="form-group">
                            <label>Señas Particulares:</label>
                            <input type="text" name="senasParticulares" onChange={handleChange} value={formData.senasParticulares} />
                        </div>
                        <div className="form-group">
                            <label>Último Curso en el que estuvo:</label>
                            <input type="text" name="ultimoCurso" onChange={handleChange} value={formData.ultimoCurso} />
                        </div>
                        <h3>DATOS DEL PADRE, MADRE O TUTOR</h3>
                        <div className="form-group">
                            <label>Parentesco:</label>
                            <input type="text" name="parentesco" onChange={handleChange} value={formData.parentesco} />
                        </div>
                        <div className="form-group">
                            <label>Dirección:</label>
                            <input type="text" name="direccion" onChange={handleChange} value={formData.direccion} />
                        </div>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Teléfono:</label>
                                <input type="text" name="telefonoEmergencia" onChange={handleChange} value={formData.telefonoEmergencia} />
                            </div>
                            <div className="form-group">
                                <label>Celular:</label>
                                <input type="text" name="celularEmergencia" onChange={handleChange} value={formData.celularEmergencia} />
                            </div>
                        </div>
                        <div className='personal-sar-documents'>
                            <div className="form-group file-upload">
                                <label htmlFor="chequeoMedico">
                                    <img src="/subiricon.png" alt="Subir Chequeo Médico" />
                                    Subir Chequeo Médico
                                </label>
                                <input type="file" id="chequeoMedico" name="chequeoMedico" onChange={handleFileChange} />
                            </div>
                            <div className="form-group file-upload">
                                <label htmlFor="chequeoMedico">
                                    <img src="/subiricon.png" alt="Subir Chequeo Médico" />
                                    Subir Seguro contra accidentes
                                </label>
                                <input type="file" id="chequeoMedico" name="chequeoMedico" onChange={handleFileChange} />
                            </div>
                            <div className="form-group file-upload">
                                <label htmlFor="chequeoMedico">
                                    <img src="/subiricon.png" alt="Subir Chequeo Médico" />
                                    Subir salvo de riesgo notariado
                                </label>
                                <input type="file" id="chequeoMedico" name="chequeoMedico" onChange={handleFileChange} />
                            </div>
                        </div>                        
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </LayoutSar>
    );
};

export default PersonalForm;
