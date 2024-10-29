import './donationlist.css';
import LayoutSar from '../layout-sar/layout-sar';
import '../search-bar-styles.css'
import DropdownInputSearch from "../dropdown-input-search/dropdown-input-search";
import DatePicker from 'react-datepicker';
import { FaAngleLeft, FaCalendarAlt } from "react-icons/fa";
import 'react-datepicker/dist/react-datepicker.css';
import { CiSquarePlus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface DonationList {
    donationID: number;
    institution: {
        name: string;
    };
    registrationDate: string;
}

const options = [
    { value: 'opcion1', label: 'Alcaldía de Cochabamba' },
    { value: 'opcion2', label: 'Fuerza Aérea' },
];

export default function DonationList() {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());

    const handlestartDateChange = (date: Date | null) => {
        setStartDate(date);
        console.log("Fecha inicial seleccionada:", date);
    };

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
        console.log("Fecha final seleccionada:", date);
    };

    const [isStartDatePickerOpen, setisStartDatePickerOpen] = useState<boolean>(false);
    const [isEndDatePickerOpen, setisEndDatePickerOpen] = useState<boolean>(false);

    const goTo = useNavigate();

    // Aquí se implementa el código para la obtención de datos
    const [recruitment, setRecruitment] = useState<DonationList[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDonations = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://localhost:7149/api/Donation');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data: DonationList[] = await response.json();
                console.log("Datos recibidos del API:", data);  // Verificar los datos recibidos
                setRecruitment(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                    console.error("Error al obtener los datos:", err.message);
                } else {
                    setError('An unknown error occurred');
                    console.error("Error desconocido al obtener los datos");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchDonations();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <LayoutSar selectedOption="Inventario">
            <div className="donationlist-container">
                <h2 className="donationlist-header">
                    <button onClick={() => goTo(-1)}><FaAngleLeft /></button>
                    <b>INVENTARIO &gt; </b> <span> Donaciones</span>
                </h2>
                <div>
                    <div className="donationsList-actions">
                        <button className="icon-button-list-donation" onClick={() => goTo('/sar/inventario/donaciones/registro')}><CiSquarePlus /></button>
                        <form action="" className="sar-search-bar">
                            <div>
                                <b>Institución</b>
                                <DropdownInputSearch label='Seleccione una institucion' options={options} />
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
                    <table className="donationlist-table">
                        <thead>
                            <tr>
                                <th>INSTITUCIÓN</th>
                                <th>FECHA DE DONACIÓN</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {recruitment.map((donation) => {
                                console.log("Nombre de la institución:", donation.institution.name);
                                return (
                                    <tr key={donation.donationID}>
                                        <td>{donation.institution.name}</td>  {/* Cambiado para mostrar el nombre de la institución */}
                                        <td>{new Date(donation.registrationDate).toLocaleDateString()}</td>
                                        <td><button className="icon-button-donation-list">👁</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        </LayoutSar>
    );
};
