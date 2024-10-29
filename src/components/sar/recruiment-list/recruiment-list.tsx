
import LayoutSar from "../layout-sar/layout-sar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import DropdownInputSearch from "../dropdown-input-search/dropdown-input-search";
import { FaAngleLeft } from "react-icons/fa";
import './recruiment-list.css'
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

interface Recruiment {
  id: number;
  name: string;
  ci: string;
  option: string;
}

interface Option {
  value: string;
  label: string;
}

export default function RecruimentListComponent() {
  const recruiment: Recruiment[] = [
    {
      id: 1,
      name: "Juan Perez",
      ci: "XXXXX",
      option: "4547",
    },
    {
      id: 2,
      name: "Alberto Gomez",
      ci: "XXXX",
      option: "4547",
    },
  ];

  const options: Option[] = [
    { value: "apple", label: "Reclutamiento 1 " },
    { value: "banana", label: "Reclutamiento 2" },
    { value: "orange", label: "Reclutamiento 3" },
  ];

  const navigate = useNavigate();

  const goTo = (rute:string) => {
    navigate(rute)
  }

  const back = () => {
    navigate(-1)
  }

  return (
    <>
      <LayoutSar selectedOption="Personal">
        <div className="recruimentList-container">
          <h2 className="recruimentList-header">
            <button onClick={() => back()}><FaAngleLeft /></button>
            <b>LISTA DE RECLUTAMIENTO</b>
          </h2>
          <div className="recruimentList-actions">
            <form action="" className="sar-search-bar">            
              <div className="sar-search-bar-item">
                <input type="text" placeholder="Buscar..." className="sar-search-input" />
                <button className="sar-search-button">
                  <FaMagnifyingGlass />
                </button>
              </div>
              <DropdownInputSearch label='Seleccione un año' options={options} />
            </form> 
          </div>
          <table>
            <thead>
              <tr>
                <th>NOMBRE COMPLETO</th>
                <th>CI</th>
                <th>DETALLES</th>
              </tr>
            </thead>
            <tbody>
              {recruiment.map((recruiments) => (
                <tr key={recruiments.id}>
                  <td>{recruiments.name}</td>
                  <td>{recruiments.ci}</td>
                  <td className="recruimentList-actions-table">
                    <PiDotsThreeCircleVertical  onClick={()=>goTo('/sar/reclutamiento/informacion')}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="recruimentList-actions-buttons">
            <button onClick={() => goTo('/sar/reclutamiento/formulario')}>Ver Formulario</button>
          </div>
        </div>
      </LayoutSar>
    </>
  );
}
