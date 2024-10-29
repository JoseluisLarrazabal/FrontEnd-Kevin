import { useState } from "react";
import LayoutSar from "../layout-sar/layout-sar";
import "./inventory-control-list.css";
import '../search-bar-styles.css';
import DropdownInputSearch from '../dropdown-input-search/dropdown-input-search';
import { FaAngleLeft, FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import ModalInventory from "../inventory-modal/inventory-modal";

interface Option {
  value: string;
  label: string;
}

export default function InventoryControlList() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedState, setSelectedStatus] = useState<Option | null>(null);
  const [selectedDonation, setSelectedDonation] = useState<Option | null>(null);

  const stateOptions: Option[] = [
    { value: 'Regular', label: 'Regular' },
    { value: 'Bueno', label: 'Bueno' },
    { value: 'Mal', label: 'Mal estado' }
  ];

  const goTo = useNavigate();

  const donationOptions: Option[] = [
    { value: 'Donacion', label: 'Alcaldía' }
  ];

  const handleStateSelect = (option: Option) => {
    setSelectedStatus(option);
    console.log('Selected estado:', selectedState);
  };

  const handleDonationSelect = (option: Option) => {
    setSelectedDonation(option);
    console.log('Selected donación:', selectedDonation);
  };

  const inventoryData = [
    { descripcion: 'Silla color madera corriente color café', estado: 'R', codigo: 'XXXXXXX', area: 'XXXXX' },
    { descripcion: 'Silla color madera corriente color negro', estado: 'M', codigo: 'XXXXXXX', area: 'XXXXX' }
  ];

  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <LayoutSar  selectedOption="Inventario">
      <div className="inventory-list-container">
        <h2 className="inventory-list-header">
            <button onClick={() => goTo(-1)}><FaAngleLeft /></button>
            <b>INVENTARIO &gt; </b> <span>Activos fijos <b>&gt;</b> silla de madera</span>
        </h2>
        <div className="inventory-list-controls-container">
          <div className="sar-search-bar">
            <div className="sar-search-bar-item">
              <input
                type="text"
                className="sar-search-input"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="sar-search-button">
                <FaSearch />
              </button>
            </div>
          </div>
            <DropdownInputSearch label='Seleccione un estado' options={stateOptions} onOptionSelect={handleStateSelect} />
            <DropdownInputSearch label='Seleccione tipo de donacion' options={donationOptions} onOptionSelect={handleDonationSelect} />
        </div>
        <table className="inventory-list-table">
          <thead>
            <tr>
              <th>DESCRIPCIÓN</th>
              <th>ESTADO</th>
              <th>CÓDIGO</th>
              <th>ÁREA</th>
              <th>DETALLE</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index}>
                <td>{item.descripcion}</td>
                <td>{item.estado}</td>
                <td>{item.codigo}</td>
                <td>{item.area}</td>
                <td>
                  <button className="inventory-list-btn-options" onClick={() => setOpenModal(true)}>
                    <IoEyeOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalInventory isOpen={openModal} onClose={() => setOpenModal(false)} />
      </div>      
    </LayoutSar>
  );
}