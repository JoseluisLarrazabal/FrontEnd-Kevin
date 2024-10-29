
import React, { useState } from "react";
import { FaAngleLeft, FaTrash } from "react-icons/fa";
import LayoutSar from "../layout-sar/layout-sar";
import './inventory-register-fixed-asset.css'
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

export default function InventoryRegisterFixedAsset() {
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
    <LayoutSar  selectedOption="Inventario">
      <div className="inventoryRegister-container">
        <h2 className="inventoryRegister-header">
          <button onClick={() => goTo(-1)}><FaAngleLeft /></button>
          <b>INVENTARIO &gt; </b> <span>Ingreso &gt; Activos fijos</span>
        </h2>
        <form className="inventoryRegister-form-container">
          <label>
            Institución:
          </label>
          <select value={selectedOption || ""} onChange={handleChange} className="form-control" >
            <option value="">Seleccionar</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <table className="table-inventory-register-fixed-asset">
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
          <div className="inventory-register-fixed-asset-details">
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
                Área:
              </label>
              <select className="form-control" id="department" value={area} onChange={handleAreaChange} >
                <option value="1">Logisticas</option>
                <option value="2">Oficina 1</option>
              </select>
            </div> 
          </div>  
          <div className="inventory-register-fixed-asset-details">
            <div className="form-group">
              <label className="label-grade" htmlFor="tipo">
                Descripción:
              </label>
              <textarea name="" id="" className="form-control"></textarea>
            </div> 
          </div>          
          <div className="inventory-register-fixed-asset-details">
            <div className="form-group">
              <label className="label-grade" htmlFor="tipo">
                Código:
              </label>
              <select className="form-control" id="department" value={tipo} onChange={handleTipoChange} >
              <option value="1">001</option>
                <option value="2">002</option>
                <option value="3">003</option>
                <option value="4">004</option>
                <option value="5">005</option>
              </select>
            </div>  
            <div className="form-group">
              <label className="label-area" htmlFor="area">
                Estado:
              </label>
              <select className="form-control" id="department" value={area} onChange={handleAreaChange} >
                <option value="1">Bueno</option>
                <option value="2">Regular</option>
                <option value="3">Malo</option>
              </select>
            </div> 
            <div className="inventory-register-fixed-asset-add-button">
              <button className="btn btn-light-blue">Agregar</button>  
            </div>
          </div>   
          <table className="table-inventory-register-fixed-asset inventory-register-fixed-asset">
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
                <td className="inventory-register-fixed-asset-actions-table">
                  <FaTrash />
                </td>
              </tr>
              <tr >
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="inventory-register-fixed-asset-actions-table">
                  <FaTrash />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="inventory-register-fixed-asset-register-button">
            <button className="btn btn-light-blue">Registrar</button>
          </div>              
        </form>  
      </div>
    </LayoutSar>
  );
}
