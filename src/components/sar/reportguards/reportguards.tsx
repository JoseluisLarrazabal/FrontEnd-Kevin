import { useState } from 'react';
import './reportguards.css';
import LayoutSar from '../layout-sar/layout-sar';
import { FaAngleLeft, FaCalendarAlt } from "react-icons/fa";
import '../search-bar-styles.css'
import DropdownInputSearch from "../dropdown-input-search/dropdown-input-search";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CiSquarePlus } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

    const options = [
        { value: 'opcion1', label: 'Manaña' },
        { value: 'opcion2', label: 'Tarde' },
        { value: 'opcion3', label: 'Noche' },
    ];

    const options2 = [
        { value: 'opcion1', label: 'Completada' },
        { value: 'opcion2', label: 'Falta' },
    ];

export default function ReportGuards() {
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
            <div className="reportguards-container">
                <h2 className="reportguards-header">
                    <button onClick={() => goTo(-1)}><FaAngleLeft /></button>
                    <b>PERSONAL &gt; </b> <span>Reporte personal &gt; Guardias &gt; Jose Fernando</span>
                </h2>
                <div className="reportguards-content">
                    <div className="reportguards-actions">
                        <button className="icon-button-reportguards"><CiSquarePlus /></button>
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
                                <b>Turno</b>
                                <DropdownInputSearch label='Seleccione un turno' options={options} />
                            </div>  
                            <div>
                                <b>Estado</b>
                                <DropdownInputSearch label='Seleccione un estado' options={options2} />
                            </div>     
                        </form> 
                    </div>
                    <table className="reportguards-table">
                        <thead>
                            <tr>
                                <th>FECHA</th>
                                <th>TURNO</th>
                                <th>ESTADO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10/10/2024</td>
                                <td>Mañana</td>
                                <td>Completada</td>
                            </tr>
                            <tr>
                                <td>5/10/2024</td>
                                <td>Tarde</td>
                                <td>Completada</td>
                            </tr>
                            <tr>
                                <td>20/9/2024</td>
                                <td>Noche</td>
                                <td>Falto</td>
                            </tr>
                            <tr>
                                <td>15/9/2024</td>
                                <td>Tarde</td>
                                <td>Completada</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

