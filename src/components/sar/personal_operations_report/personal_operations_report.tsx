import { useState } from 'react';
import './personal_operations_report.css';
import LayoutSar from '../layout-sar/layout-sar';
import DatePicker from 'react-datepicker';

import DropdownInputSearch from '../dropdown-input-search/dropdown-input-search';
import { FaAngleLeft, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const tipo = [
    { value: 'montana', label: 'Búsqueda y rescate - Montaña' },
    { value: 'estructuras_colapsadas', label: 'Búsqueda y rescate - Estructuras colapsadas' },
    { value: 'con_canes', label: 'Búsqueda y rescate - Con canes' },
    { value: 'aeronautico', label: 'Búsqueda y rescate - Aeronáutico' },
    { value: 'acuatico', label: 'Búsqueda y rescate - Acuático' },
    { value: 'incendios', label: 'Defensa civil - Incendios' },
    { value: 'inundaciones', label: 'Defensa civil - Inundaciones' },
    { value: 'mazamorras', label: 'Defensa civil - Mazamorras' },
    { value: 'deslizamiento', label: 'Defensa civil - Deslizamiento' },
    { value: 'sequias', label: 'Defensa civil - Sequias' },
];

const localidad = [
    { value: 'opcion1', label: 'Cochabamba' },
    { value: 'opcion2', label: 'Tiquipaya' },
];

const PersonalOperationsReport = () => {    
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
            <div className="personalOperationsReport-container">
                <h2 className="personalOperationsReport-header">
                    <button onClick={() => goTo(-1)}><FaAngleLeft /></button>
                    <b>PERSONAL &gt; </b> <span>Reporte personal &gt;  Operaciones &gt; Jose Fernando</span>
                </h2>
                <div>
                    <form action="" className="sar-search-bar personalOperationsReport-actions">
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
                            <b>Tipo</b>
                            <DropdownInputSearch options={tipo} label='Seleccionar tipo'/>
                        </div> 
                        <div>
                            <b>Localidad</b>
                            <DropdownInputSearch options={localidad} label='Seleccionar locatidad'/>
                        </div> 
                    </form>
                    <table className="personalOperationsReport-table">
                        <thead>
                            <tr>
                                <th>TIPO</th>
                                <th>FECHA</th>
                                <th>LOCALIDAD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Búsqueda y rescate - Montaña</td>
                                <td>20/06/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Buqueda y rescate - Estruturas colapsadas</td>
                                <td>10/06/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Búsqueda y rescate - Montaña</td>
                                <td>30/05/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Buqueda y rescate - Incendios</td>
                                <td>25//05/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Buqueda y rescate - Inundaciones</td>
                                <td>27/04/24</td>
                                <td>Cochabamba</td>
                            </tr>
                            <tr>
                                <td>Búsqueda y rescate - Montaña</td>
                                <td>04/02/24</td>
                                <td>Cochabamba</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default PersonalOperationsReport;
