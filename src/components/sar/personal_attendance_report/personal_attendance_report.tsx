import { useState } from 'react';
import './personal_attendance_report.css';
import LayoutSar from '../layout-sar/layout-sar';
import DropdownInputSearch from '../dropdown-input-search/dropdown-input-search';
import { FaAngleLeft, FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';

const estado = [
    { value: 'opcion1', label: 'Asistió' },
    { value: 'opcion2', label: 'Falta' },
    { value: 'opcion3', label: 'Permiso' },
];

const PersonalAttendanceReport = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());   

    const handlestartDateChange = (date: Date | null) => {
        setStartDate(date);
        console.log("Fecha seleccionada:", date);
    };

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
        console.log("Fecha seleccionada:", date);
    };

    const [isStartDatePickerOpen, setisStartDatePickerOpen] = useState<boolean>(false);
    const [isEndDatePickerOpen, setisEndDatePickerOpen] = useState<boolean>(false);

    const goTo = useNavigate();

    return (
        <LayoutSar selectedOption='Personal'>
            <div className="personalAttendanceReport-container">
                <h2 className="personalAttendanceReport-header">
                    <button onClick={() => goTo(-1)}><FaAngleLeft /></button>
                    <b>PERSONAL &gt; </b> <span> Reporte personal &gt; Asistencia &gt; Jose Fernando</span> 
                </h2>
                <div className="personalAttendanceReport-content">
                    <div className="personalAttendanceReport-actions">
                        <form action="" className="sar-search-bar"> 
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
                            <div>
                                <b>Estado</b>
                                <DropdownInputSearch options={estado} />    
                            </div>  
                        </form>  
                    </div>
                    <table className="personalAttendanceReport-table">
                        <thead>
                            <tr>
                                <th>FECHA</th>
                                <th>ESTADO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10/10/24</td>
                                <td>Asistió</td>
                            </tr>
                            <tr>
                                <td>09/10/24</td>
                                <td>Asistió</td>
                            </tr>
                            <tr>
                                <td>08/10/24</td>
                                <td>Falta</td>
                            </tr>
                            <tr>
                                <td>07/10/24</td>
                                <td>Permiso</td>
                            </tr>
                            <tr>
                                <td>06/10/24</td>
                                <td>Asistió</td>
                            </tr>
                            <tr>
                                <td>05/10/34</td>
                                <td>Asistió</td>
                            </tr>
                            <tr>
                                <td>04/10/24</td>
                                <td>Falta</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default PersonalAttendanceReport;
