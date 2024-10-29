import React, { useState } from "react";
import LayoutSar from "../layout-sar/layout-sar";
import "./personal-information.css";
import { FaAngleLeft } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function PersonalInformation() {

  const [formData, setFormData] = useState({
    nombres: 'JOSE FERNANDO',
    apellidos: 'PEREZ GONZALEZ',
    grado: '1er año',
    fechaNacimiento: '2001-05-15',
    departamento: 'Cochabamba',
    ci: '12345678',
    domicilio: 'Calle Falsa 123, Zona Central',
    telefono: '8424182',
    celular: '72212345',
    ocupacion: 'Estudiante',
    grupoSanguineo: 'O+',
    religion: 'Católica',
    correo: 'josefernando@example.com',
    alergias: 'Ninguna',
    senasParticulares: 'Lunar en la mejilla derecha',
    ultimoCurso: '6to secundaria',
    parentesco: 'JOSE FERNANDO PEREZ ALMARAZ',
    direccion: 'Calle Falsa 123, Zona Central',
    telefonoEmergencia: '8424182',
    celularEmergencia: '72254321',
    fechaVencimientoChequeoMedico: '2023-05-15',
    fechaVencimientoSeguroAccidentes: '2023-06-15',
    fechaVencimientoSalvoRiesgoNotariado: '2024-05-30',
    chequeoMedico: File 
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isCheckbox = (e.target as HTMLInputElement).type === "checkbox";
    setFormData((prevState) => ({
      ...prevState,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const goTo = useNavigate();

  return (
    <LayoutSar selectedOption="Personal">
      <div className="personal-container">
        <div>
          <h2 className="personal-info-header">
              <button onClick={() => goTo(-1)}><FaAngleLeft /></button>
              <b>PERSONAL &gt; </b> <span>Información</span>
          </h2>
          <form className="personal-info-form">
            <div className="personal-info-counts">
              <label>Faltas: 2</label>
              <label>Permisos: 1</label>
            </div>
            <h2>DATOS PERSONALES</h2>
            <div className="form-group-row">
                <div className="form-group">
                    <label>Nombres:</label>
                    <input type="text" name="nombres" onChange={handleChange} value={formData.nombres} disabled/>
                </div>
                <div className="form-group">
                    <label>Apellidos:</label>
                    <input type="text" name="apellidos" onChange={handleChange} value={formData.apellidos} disabled/>
                </div>
            </div>
            <div className="form-group-row">
                <div className="form-group">
                    <label>Grado:</label>
                    <select name="grado" onChange={handleChange} value={formData.grado} disabled>
                        <option value="">Seleccione...</option>
                        <option value="1er año">1er año</option>
                        <option value="2d0 año">2d0 año</option>
                        <option value="3er año">3er año</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Fecha de nacimiento:</label>
                    <input type="date" name="fechaNacimiento" onChange={handleChange} value={formData.fechaNacimiento} disabled/>
                </div>
            </div>
            <div className="form-group-row">
                <div className="form-group">
                    <label>Departamento:</label>
                    <select name="departamento" onChange={handleChange} value={formData.departamento} disabled>
                        <option value="">Seleccione...</option>
                        <option value="Cochabamba">Cochabamba</option>
                        <option value="Pando">Pando</option>
                        <option value="Tarija">Tarija</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>C.I.:</label>
                    <input type="text" name="ci" onChange={handleChange} value={formData.ci} disabled/>
                </div>
            </div>
            <div className="form-group">
                <label>Domicilio:</label>
                <input type="text" name="domicilio" onChange={handleChange} value={formData.domicilio} disabled/>
            </div>
            <div className="form-group-row">
                <div className="form-group">
                    <label>Teléfono:</label>
                    <input type="text" name="telefono" onChange={handleChange} value={formData.telefono} disabled/>
                </div>
                <div className="form-group">
                    <label>Celular:</label>
                    <input type="text" name="celular" onChange={handleChange} value={formData.celular} disabled/>
                </div>
                <div className="form-group">
                    <label>Ocupación:</label>
                    <input type="text" name="ocupacion" onChange={handleChange} value={formData.ocupacion} disabled/>
                </div>
            </div>
            <div className="form-group-row">
                <div className="form-group">
                    <label>Grupo Sanguíneo:</label>
                    <input type="text" name="grupoSanguineo" onChange={handleChange} value={formData.grupoSanguineo} disabled/>
                </div>
                <div className="form-group">
                    <label>Religión:</label>
                    <input type="text" name="religion" onChange={handleChange} value={formData.religion} disabled/>
                </div>
                <div className="form-group">
                    <label>Correo:</label>
                    <input type="email" name="correo" onChange={handleChange} value={formData.correo} disabled/>
                </div>
            </div>
            <div className="form-group">
                <label>Alergias:</label>
                <input type="text" name="alergias" onChange={handleChange} value={formData.alergias} disabled/>
            </div>
            <div className="form-group">
                <label>Señas Particulares:</label>
                <input type="text" name="senasParticulares" onChange={handleChange} value={formData.senasParticulares} disabled/>
            </div>
            <div className="form-group">
                <label>Último Curso en el que estuvo:</label>
                <input type="text" name="ultimoCurso" onChange={handleChange} value={formData.ultimoCurso} disabled/>
            </div>
            <h3>DATOS DEL PADRE, MADRE O TUTOR</h3>
            <div className="form-group">
                <label>Parentesco:</label>
                <input type="text" name="parentesco" onChange={handleChange} value={formData.parentesco} disabled/>
            </div>
            <div className="form-group">
                <label>Dirección:</label>
                <input type="text" name="direccion" onChange={handleChange} value={formData.direccion} disabled/>
            </div>
            <div className="form-group-row">
                <div className="form-group">
                    <label>Teléfono:</label>
                    <input type="text" name="telefonoEmergencia" onChange={handleChange} value={formData.telefonoEmergencia} disabled/>
                </div>
                <div className="form-group">
                    <label>Celular:</label>
                    <input type="text" name="celularEmergencia" onChange={handleChange} value={formData.celularEmergencia} disabled/>
                </div>
            </div>
            <label className="label-grado" htmlFor="curso">
              Fecha de vencimiento de Chequeo Médico:
            </label>
            <div className="medical-check-personal-info">
              <input value="2001-05-15" type="date" id="archivo"  className="input-archivo" disabled/>
              <button className="personal-info-icon-button">
                <IoEyeOutline />
              </button>
            </div>
            <label className="label-grado" htmlFor="curso">
              Fecha de vencimiento de Seguro contra accidentes:
            </label>
            <div className="medical-check-personal-info">
              <input value="2001-05-15" type="date" id="archivo"  className="input-archivo" disabled/>
              <button className="personal-info-icon-button">
                <IoEyeOutline />
              </button>
            </div>
            <label className="label-grado" htmlFor="curso">
              Fecha de vencimiento de Salvo de riesgo notariado:
            </label>
            <div className="medical-check-personal-info">
              <input value="2001-05-15" type="date" id="archivo"  className="input-archivo" disabled/>
              <button className="personal-info-icon-button">
                <IoEyeOutline />
              </button>
            </div>
            <div>
              <button className="personal-info-report-button" onClick={() => goTo('/sar/reporte/guardias')}>Reporte de Guardias</button>
              <button className="personal-info-report-button" onClick={() => goTo('/sar/reporte/personal/asistencia')}>Reporte de Asistencias</button>
              <button className="personal-info-report-button" onClick={() => goTo('/sar/reporte/personal/operaciones')}>Reporte de Operativos</button>
            </div>
          </form>            
        </div>          
      </div>
    </LayoutSar>
  );
}