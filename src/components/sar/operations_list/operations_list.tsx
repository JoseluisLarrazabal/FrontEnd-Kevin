import './operations_list.css';
import LayoutSar from '../layout-sar/layout-sar';
import DatePicker from "react-datepicker";
import { CiSquarePlus } from 'react-icons/ci';
import DropdownInputSearch from '../dropdown-input-search/dropdown-input-search';
import { FaCalendarAlt } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categoria = [
    { value: 'busqueda_y_rescate', label: 'Búsqueda y rescate' },
    { value: 'defensa_civil', label: 'Defensa civil' },
];

const tiposBusquedaYRescate = [
    { value: 'montana', label: 'Montaña' },
    { value: 'estructuras_colapsadas', label: 'Estructuras colapsadas' },
    { value: 'con_canes', label: 'Con canes' },
    { value: 'aeronautico', label: 'Aeronáutico' },
    { value: 'acuatico', label: 'Acuático' },
];

const tiposDefensaCivil = [
    { value: 'incendios', label: 'Incendios' },
    { value: 'inundaciones', label: 'Inundaciones' },
    { value: 'mazamorras', label: 'Mazamorras' },
    { value: 'deslizamiento', label: 'Deslizamiento' },
    { value: 'sequias', label: 'Sequias' },
];

const OperationsList = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());   
    const [selectedCategory, setSelectedCategory] = useState<String | null>();
    const [selectedType, setselectedType] = useState<String | null>();
    const [isStartDatePickerOpen, setisStartDatePickerOpen] = useState<boolean>(false);
    const [isEndDatePickerOpen, setisEndDatePickerOpen] = useState<boolean>(false);
    const dropdownRef = useRef<any>(null);

    const clearDropdown = () => {
        if (dropdownRef.current) {
        dropdownRef.current.clear();
        }
    };


    const handlestartDateChange = (date: Date | null) => {
        setStartDate(date);
        console.log("Fecha seleccionada:", date);
    };

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
        console.log("Fecha seleccionada:", date);
    };    

    const goTo = useNavigate()

    const handleCategorySelect = (category:any) => {
        setSelectedCategory(category.value);
        setselectedType(null);
        clearDropdown();
        console.log(category)
    };

    const handleTypeSelect = (type:any) => {
        setselectedType(type.value);
        console.log(selectedType)
    };

    return (
        <LayoutSar selectedOption='Operaciones'>
            <div className="operations_list-container">
                <h2 className="operations_list-header">
                    <b>LISTA DE OPERATIVOS</b>
                </h2>
                <div className="operations_list-content">
                    <div className="operations_list-actions">
                        <button className="operations_list-add" onClick={() => goTo('/sar/operaciones/crear')}><CiSquarePlus /></button>
                        <form action="" className="sar-search-bar">
                            <div>
                                <b>Tipo</b>
                                <div className='operations_list-sar-operative-type'>
                                    <DropdownInputSearch options={categoria} onOptionSelect={handleCategorySelect} />
                                    <DropdownInputSearch ref={dropdownRef} options={selectedCategory === 'busqueda_y_rescate'? tiposBusquedaYRescate : selectedCategory === 'defensa_civil'? tiposDefensaCivil : []} onOptionSelect={handleTypeSelect} />
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
                    <table className="operations_list-table">
                        <thead>
                            <tr>
                                <th>TIPO OPERATIVO</th>
                                <th>FECHA</th>
                                <th>LUGAR</th>
                                <th>ESTADO</th>
                                <th>ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rescate</td>
                                <td>20-06-24</td>
                                <td>Tiquipaya</td>
                                <td>En proceso</td>
                                <td><button className="operations_list-icon-button">👁</button></td>
                            </tr>
                            <tr>
                                <td>Seguridad Médica</td>
                                <td>12-09-24</td>
                                <td>Tiquipaya</td>
                                <td>Finalizado</td>
                                <td><button className="operations_list-icon-button">👁</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};

export default OperationsList;
