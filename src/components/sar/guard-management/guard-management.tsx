import { CiSquarePlus } from "react-icons/ci";
import LayoutSar from "../layout-sar/layout-sar"
import "./guard-management.css"
import { IoEllipsisVerticalCircle } from "react-icons/io5";
import CreateGuardModal from "../create-guard-modal/create-guard-modal";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import DropdownInputSearch from "../dropdown-input-search/dropdown-input-search";
import '../search-bar-styles.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from "react-icons/fa";

const options = [
  { value: 'opcion1', label: 'Mañana' },
  { value: 'opcion2', label: 'Tarde' },
  { value: 'opcion3', label: 'Noche' },
];

export default function GuardManagement() {
  const [modalOpen, setModalOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [isDatePickerOpen, setisDatePickerOpen] = useState<boolean>(false);

  const data = [
    { turno: 'Mañana', ci: '123456', comnre: 'Juan Perez', estado: 'Activo' },
    { turno: 'Tarde', ci: '789012', comnre: 'Maria Lopez', estado: 'Inactivo' },
  ];

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    console.log('Fecha seleccionada:', date);
  };

  return (
    <LayoutSar selectedOption="Operaciones">
      <div className="guard-container">
        <h2 className="guard-title">GUARDIA</h2>
        <div className="guard-header">
          <button className="icon-button-guard" onClick={() => setModalOpen(true)}><CiSquarePlus /></button>
          <form action="" className="sar-search-bar">
            <DropdownInputSearch label='Seleccione turno' options={options} />
            <div className="sar-search-bar-item">
              <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={handleDateChange} onClickOutside={() => setisDatePickerOpen(false)} className="sar-search-input" placeholderText="Seleccionar fecha" onInputClick={() => setisDatePickerOpen(true)} open={isDatePickerOpen} />
              <button className="sar-search-button" type="button" onClick={() => setisDatePickerOpen(!isDatePickerOpen)}>
              <FaCalendarAlt />
              </button>
            </div>
            <div className="sar-search-bar-item">
              <input type="text" placeholder="Buscar..." className="sar-search-input" />
              <button className="sar-search-button">
                <FaMagnifyingGlass />
              </button>
            </div>
          </form> 
        </div>
        <table className="guard-table">
          <thead>
            <tr>
              <th style={{ width: '40%' }}>Turno</th>
              <th style={{ width: '15%' }}>CI</th>
              <th style={{ width: '25%' }}>Nombre</th>
              <th style={{ width: '15%' }}>Estado</th>
              <th style={{ width: '5%' }}>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.turno}</td>
                <td>{item.ci}</td>
                <td>{item.comnre}</td>
                <td>{item.estado}</td>
                <td>
                  <button className="guard options-button"><IoEllipsisVerticalCircle /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CreateGuardModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </LayoutSar>
  );
}