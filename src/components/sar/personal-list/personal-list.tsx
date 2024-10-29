import LayoutSar from "../layout-sar/layout-sar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import DropdownInputSearch from "../dropdown-input-search/dropdown-input-search";
import './personal-list.css'
import { CiSquarePlus } from "react-icons/ci";
import '../search-bar-styles.css'
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

interface Recruiment {
  id: number;
  name: string;
  ci: string;
  stage: string;
  option: string;
}

interface Option {
  value: string;
  label: string;
}

export default function PersonalListComponent() {
  
  const recruiment: Recruiment[] = [
    {
      id: 1,
      name: "Juan Perez",
      ci: "XXXXX",
      stage: "1er año",
      option: "4547",
    },
    {
      id: 2,
      name: "Alberto Gomez",
      ci: "XXXX",
      stage: "2do año",
      option: "4547",
    },
  ];

  const options: Option[] = [
    { value: "apple", label: "1er año" },
    { value: "banana", label: "2do año" },
    { value: "orange", label: "3er año" },
  ];

  const navigate = useNavigate();

  const goTo = (rute:string) => {
    navigate(rute)
  }

  return (
    <LayoutSar selectedOption="Personal">
      <div className="personalList-container">
        <h2>
          <b>LISTA DE PERSONAL</b>
        </h2>
        <div className="personalList-actions">
          <button className="personalList-add" onClick={() => goTo('/sar/personal/filiacion/registro')}><CiSquarePlus /></button>
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
              <th>GRADO</th>
              <th>DETALLES</th>
            </tr>
          </thead>
          <tbody>
            {recruiment.map((recruiments) => (
              <tr key={recruiments.id}>
                <td>{recruiments.name}</td>
                <td>{recruiments.ci}</td>
                <td>{recruiments.stage}</td>
                <td className="personalList-actions-table">
                  <PiDotsThreeCircleVertical  onClick={() => goTo('/sar/personal/filiacion/informacion')}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="personalList-actions-buttons">
          <button onClick={() => goTo('/sar/reclutamiento/lista')}>Ver Reclutamiento</button>
          <button>Ver voluntarios baja</button>
        </div>
      </div>
    </LayoutSar>
  );
}
