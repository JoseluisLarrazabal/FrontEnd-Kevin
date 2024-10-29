import { useState } from 'react';
import './returnslist.css';
import LayoutSar from '../layout-sar/layout-sar';
import '../search-bar-styles.css'
import DropdownInputSearch from "../dropdown-input-search/dropdown-input-search";
import DatePicker from 'react-datepicker';
import { FaAngleLeft, FaCalendarAlt } from "react-icons/fa";
import 'react-datepicker/dist/react-datepicker.css';
import { CiSquarePlus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const options = [
    { value: 'opcion1', label: 'Alcaldía de Cochabamba' },
    { value: 'opcion2', label: 'Fuerza Aérea' },
];

export default function ReturnsList() {
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
        <LayoutSar  selectedOption="Inventario">
            <div className="returnslist-container">
                <h2 className="returnslist-header">
                    <button onClick={() => goTo(-1)}><FaAngleLeft /></button>
                    <b>INVENTARIO &gt; </b> <span>Devoluciones</span>
                </h2>  
                <div className="returnslist-content">
                    <div className="returnslist-actions">
                        <button className="icon-button-list-donation" onClick={() => goTo('/sar/inventario/devolucion')}><CiSquarePlus /></button>
                        <form action="" className="sar-search-bar">
                            <div>
                                <b>Institución</b>
                                <DropdownInputSearch label='Seleccione una institucion' options={options} />
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
                    <table className="returnslist-table">
                        <thead>
                            <tr>
                                <th>INSTITUCIÓN</th>
                                <th>FECHA DE DEVOLUCIÓN</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alcaldía de Cochabamba</td>
                                <td>dd/mm/aaaa</td>
                                <td><button className="icon-button-return-list">👁</button></td>
                            </tr>
                            <tr>
                                <td>Fuerza Aérea</td>
                                <td>dd/mm/aaaa</td>
                                <td><button className="icon-button-return-list">👁</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};
