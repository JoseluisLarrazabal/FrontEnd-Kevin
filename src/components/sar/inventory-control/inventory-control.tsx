import { useState } from "react";
import LayoutSar from "../layout-sar/layout-sar";
import "./inventory-control.css";
import DropdownInputSearch from '../dropdown-input-search/dropdown-input-search';
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

interface Option {
  value: string;
  label: string;
}

export default function InventoryControl() {
  const [activeTab, setActiveTab] = useState<string>('activos');
  const [selectedType, setSelectedType] = useState<Option | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const goTo = useNavigate()

  const inventoryData = [
    { tipo: 'Silla de madera', cantidad: 2 },
    { tipo: 'Silla de metal', cantidad: 9 },
    { tipo: 'Catre de metal', cantidad: 9 }
  ];
  const inventorySuppliesData = [
    { tipo: 'Casco de plastico', cantidad: 15, almacen: 15},
    { tipo: 'Pala', cantidad: 19, almacen: 7},
    { tipo: 'Carretilla', cantidad: 19,almacen: 5}
  ];
  const typeOptions: Option[] = [
    { value: 'Tipos', label: 'Sillas' },
    { value: 'Tipos', label: 'Catres' }
  ];

  const typeSuppliesOptions: Option[] = [
    { value: 'Tipos', label: 'Casco' },
    { value: 'Tipos', label: 'Pala' },
    { value: 'Tipos', label: 'Carretilla' }
  ];
  const handleTypeSelect = (option: Option) => {
    setSelectedType(option);
    console.log('Selected estado:', selectedType);
  };
  return (
    <LayoutSar selectedOption="Inventario">
      <div className="inventory-container">
        <h2 className="inventory-title">INVENTARIO</h2>
        <div className="inventory-controls-container">
          <div className="inventory-tab-buttons">
            <button className={`inventory-category-button ${activeTab === 'activos' ? 'active' : ''}`} 
              onClick={() => handleTabClick('activos')}>Activos fijos
            </button>
            <button className={`inventory-category-button ${activeTab === 'insumos' ? 'active' : ''}`} 
              onClick={() => handleTabClick('insumos')}
            >
              Insumos
            </button>
          </div>
          <div className="inventory-control-controls-container">
            <DropdownInputSearch label={activeTab === 'activos' ? 'Seleccione tipo de activos' : 'Seleccione tipo de insumos'} options={activeTab === 'activos' ? typeOptions : typeSuppliesOptions} onOptionSelect={handleTypeSelect} />
          </div>
        </div>
        {
          activeTab === 'activos'?
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>TIPO</th>
                  <th>CANTIDAD</th>
                  <th>DETALLE</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.tipo}</td>
                    <td>{item.cantidad}</td>
                    <td>
                      <button className="inventory-btn-options" onClick={()=> goTo('/sar/inventario/activos-fijos')} >
                        <IoEyeOutline />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          :<table className="inventory-table">
            <thead>
              <tr>
                <th>TIPO</th>
                <th>TOTAL</th>
                <th>EN ALMACEN</th>
                <th>DETALLE</th>
              </tr>
            </thead>
            <tbody>
              {inventorySuppliesData.map((item, index) => (
                <tr key={index}>
                  <td>{item.tipo}</td>
                  <td>{item.cantidad}</td>
                  <td>{item.almacen}</td>
                  <td>
                    <button className="inventory-btn-options" >
                      <IoEyeOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>        
          }        
        <div className="inventory-button-group">
          <button className="inventory-action-button" onClick={()=> goTo('/sar/inventario/donaciones')}>Donaciones</button>
          <button className="inventory-action-button" onClick={()=> goTo('/sar/inventario/devoluciones')}>Devoluciones</button>
          <button className="inventory-action-button" onClick={()=> goTo('/sar/inventario/lista-salidas')}>Salidas</button>
        </div>
      </div>
    </LayoutSar>
  );
}