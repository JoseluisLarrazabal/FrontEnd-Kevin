import { useState } from "react";
import "./departure-list.css";
import LayoutSar from "../layout-sar/layout-sar";
import { FaAngleLeft } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

interface Recruiment {
  id: number;
  name: string;
  ci: string;
  stage: string;
  option: string;
}

export default function DepartureList() {

  
  const recruiment: Recruiment[] = [
    {
      id: 1,
      name: "Juan Perez",
      ci: "dd/mm/aaaa",
      stage: "SI",
      option: "4547",
    },
    {
      id: 2,
      name: "Marco Lopez",
      ci: "dd/mm/aaaa",
      stage: "NO",
      option: "4547",
    },
    {
      id: 2,
      name: "Juan Perez",
      ci: "dd/mm/aaaa",
      stage: "INCOMPLETO",
      option: "4547",
    },
  ];

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
    <>
      <LayoutSar  selectedOption="Inventario">
        <div className="departureList-container">
          <h2 className="departureList-header">
            <button onClick={() => goTo(-1)}><FaAngleLeft /></button>
            <b>INVENTARIO &gt; </b> <span>Lista de salidas</span>
          </h2>
          <div className="departureList-actions">
            <button className="departureList-add" onClick={() => goTo('/sar/inventario/registro-salida')}><CiSquarePlus /></button>
            <form action="" className="sar-search-bar">
              <div>
                <b>Responsable</b>
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
          <table>
            <thead>
              <tr>
                <th>RESPONSABLE</th>
                <th>FECHA</th>
                <th>DEVOLUCIÓN</th>
                <th>DETALLES</th>
              </tr>
            </thead>
            <tbody>
              {recruiment.map((recruiments) => (
                <tr key={recruiments.id}>
                  <td>{recruiments.name}</td>
                  <td>{recruiments.ci}</td>
                  <td>{recruiments.stage}</td>
                  <td className="departureList-actions-table">
                    <IoEyeOutline />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </div>
      </LayoutSar>
    </>
  );
}
