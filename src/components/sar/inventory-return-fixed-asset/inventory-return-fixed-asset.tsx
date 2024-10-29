
import React, { useState } from "react";
import { FaAngleLeft, FaTrash } from "react-icons/fa";
import LayoutSar from "../layout-sar/layout-sar";
import './inventory-return-fixed-asset.css'
import { useNavigate } from "react-router-dom";

interface Option {
  value: string;
  label: string;
}
interface Inventory {
  id: number;
  type: string;
  amount: number;
}

export default function InventoryReturnFixedAsset() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [tipo, setTipo] = useState("");
  const [area, setArea] = useState("");

  const handleTipoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipo(e.target.value);
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArea(e.target.value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const options: Option[] = [
    { value: "apple", label: "Colegio" },
    { value: "banana", label: "Universidad" },
    { value: "orange", label: "Alcaldia" },
  ];
  const tableInventory: Inventory[] = [
    {
      id: 1,
      type: "Silla de Madera",
      amount: 2,
    },
    {
      id: 2,
      type: "Catre de metal",
      amount: 1,
    },
  ];

  const goTo = useNavigate();

  return (
    <>
      <LayoutSar  selectedOption="Inventario">
        <div className="InventoryReturnFixedAsset-container">
          <h2 className="InventoryReturnFixedAsset-header">
            <button onClick={() => goTo(-1)}><FaAngleLeft /></button>
            <b>INVENTARIO &gt; </b> <span>Devolución &gt; Activos fijos</span>
          </h2>
          <form className="InventoryReturnFixedAsset-form-container">
            <h3>Institución:</h3>
            <select value={selectedOption || ""} onChange={handleChange} className="form-control" >
              <option value="">Seleccionar</option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <table className="table-inventory-return-fixed-asset">
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {tableInventory.map((tableInventory) => (
                  <tr key={tableInventory.id}>
                    <td>{tableInventory.type}</td>
                    <td>{tableInventory.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Detalles:</h3>
            <div className="inventory-return-fixed-asset-details">
              <div className="form-group">
                <label className="label-grade" htmlFor="tipo">
                  Tipo:
                </label>
                <select className="form-control" id="department" value={tipo} onChange={handleTipoChange} >
                  <option value="department2">Material</option>
                  <option value="department3">Equipamento</option>
                </select>
              </div>  
              <div className="form-group">
                <label className="label-area" htmlFor="area">
                  Código:
                </label>
                <select className="form-control" id="department" value={area} onChange={handleAreaChange} >
                  <option value="department1">001</option>
                  <option value="department2">002</option>
                  <option value="department3">003</option>
                  <option value="department4">004</option>
                  <option value="department5">005</option>
                </select>
              </div> 
            </div>       
            <div className="inventory-return-fixed-asset-add-button">
              <button className="btn btn-light-blue">Agregar</button>  
            </div>         
                      
            <table className="table-inventory-return-fixed-asset inventory-return-fixed-asset">
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Detalles</th>
                  <th>Código</th>
                  <th>Área</th>
                  <th>Estado</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td className="inventory-return-fixed-asset-actions-table">
                    <FaTrash />
                  </td>
                </tr>
                <tr >
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td className="inventory-return-fixed-asset-actions-table">
                    <FaTrash />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="inventory-return-fixed-asset-register-button">
              <button className="btn btn-light-blue">Registrar</button>
            </div>              
          </form>         
        </div>
      </LayoutSar>
    </>
  );
}
