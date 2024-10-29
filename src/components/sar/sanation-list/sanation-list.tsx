import React, { useState, useEffect } from 'react';
import './sanation-list.css';
import LayoutSar from '../layout-sar/layout-sar';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { CiSquarePlus } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

interface RecordTreatment {
    recordTreatmentsID: number;
    attentionDate: string;
    diagnosis: string;
    treatment: string;
    person: {
        personID: number;
        name: string;
        lastname: string; // Asegúrate de que el backend envíe este campo
    };
}

const SanationList = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [recordTreatments, setRecordTreatments] = useState<RecordTreatment[]>([]);
    const [isStartDatePickerOpen, setisStartDatePickerOpen] = useState<boolean>(false);
    const [isEndDatePickerOpen, setisEndDatePickerOpen] = useState<boolean>(false);

    const goTo = useNavigate();

    useEffect(() => {
        const fetchRecordTreatments = async () => {
            try {
                const response = await fetch('https://localhost:7149/api/RecordTreatments');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setRecordTreatments(data);
            } catch (err) {
                console.error("Error al obtener tratamientos:", err);
            }
        };
        fetchRecordTreatments();
    }, []);

    const handlestartDateChange = (date: Date | null) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
    };

    return (
        <LayoutSar selectedOption='Sanidad'>
            <div className="sanation-list-container">
                <h2>
                    <b>SANIDAD</b>
                </h2>
                <div>
                    <div className="sanation-list-actions">
                        <button className="sanation-list-add" onClick={() => goTo("/sar/sanidad/registro-tratamiento")}><CiSquarePlus /></button>
                        <form action="" className="sar-search-bar">
                            <div>
                                <b>Paciente</b>
                                <div className="sar-search-bar-item">
                                    <input type="text" placeholder="Buscar..." className="sar-search-input" />
                                    <button className="sar-search-button">
                                        <FaMagnifyingGlass />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <b>Fecha inicial:</b>
                                <div className="sar-search-bar-item">
                                    <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={handlestartDateChange} onClickOutside={() => setisStartDatePickerOpen(false)} className="sar-search-input" placeholderText="Seleccionar fecha" onInputClick={() => setisStartDatePickerOpen(true)} open={isStartDatePickerOpen} />
                                    <button className="sar-search-button" type="button" onClick={() => setisStartDatePickerOpen(!isStartDatePickerOpen)}>
                                        <FaCalendarAlt />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <b>Fecha final</b>
                                <div className="sar-search-bar-item">
                                    <DatePicker selected={endDate} dateFormat="dd/MM/yyyy" onChange={handleEndDateChange} onClickOutside={() => setisEndDatePickerOpen(false)} className="sar-search-input" placeholderText="Seleccionar fecha" onInputClick={() => setisEndDatePickerOpen(true)} open={isEndDatePickerOpen} />
                                    <button className="sar-search-button" type="button" onClick={() => setisEndDatePickerOpen(!isEndDatePickerOpen)}>
                                        <FaCalendarAlt />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <table className="sanation-list-table">
                        <thead>
                            <tr>
                                <th>FECHA</th>
                                <th>NOMBRE PACIENTE</th>
                                <th>DIAGNÓSTICO</th>
                                <th>TRATAMIENTO</th>
                                <th>ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recordTreatments.map((treatment) => (
                                <tr key={treatment.recordTreatmentsID}>
                                    <td>{new Date(treatment.attentionDate).toLocaleDateString()}</td>
                                    <td>{`${treatment.person.name} ${treatment.person.lastname}`}</td> {/* Muestra el nombre y apellido */}
                                    <td>{treatment.diagnosis}</td>
                                    <td>{treatment.treatment}</td>
                                    <td><button className="sanation-list-icon-button">👁</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default SanationList;
