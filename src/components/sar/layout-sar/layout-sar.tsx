import { Link } from "react-router-dom";
import "./layout-sar.css"
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaUsersGear } from "react-icons/fa6";
import { HiOutlineClipboardList } from "react-icons/hi";
import { GiOpenBook } from "react-icons/gi";
import { MdOutlineMedicalServices } from "react-icons/md";
import sarIcon from '/src/assets/FAB.png';
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";

interface LayoutSarProps {
    children: React.ReactNode;
    selectedOption: 'Personal' | 'Operaciones' | 'Guardias' | 'Inventario' | 'Sanidad' | 'Cursos';
}
export default function LayoutSar({children, selectedOption}:LayoutSarProps) {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [showSubMenu, setShowSubMenu] = useState(false);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowDropdown(false);
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return(
        <div className="sar-main-container">
            <div className="sar-menu-vertical">
                <img src={sarIcon} alt="Icono-SARFAB" />
                <h2 className="text-dark">SARFAB</h2>
                <div className="sar-menu-log-out" ref={dropdownRef}>
                    <span>GPR0028293</span>
                    <button onClick={() => setShowDropdown(!showDropdown)} className="sar-dropdown-toggle">
                        <PiDotsThreeCircleVertical />
                    </button>
                    {showDropdown && (
                        <div className="sar-dropdown-menu">
                        <Link to="/" className="sar-dropdown-item"> <CiLogout /> Cerrar sesión</Link>
                        <hr />
                        <Link to="/" className="sar-dropdown-item">Cambiar contraseña</Link>
                        </div>
                    )}
                </div>
                <div className="sar-menu-items-container">
                    <Link to="/sar/personal/lista" className={selectedOption=='Personal'?"sar-menu-item-selected sar-menu-item": "sar-menu-item"} > <BsFillPersonLinesFill /> Personal</Link>
                    <div onClick={() => setShowSubMenu(!showSubMenu)} className={selectedOption=='Operaciones'?"sar-menu-item-selected sar-menu-item": "sar-menu-item"}>
                        <FaUsersGear />
                        <span>
                            Operaciones
                            <IoMdArrowDropdown />  
                        </span>                                                  
                    </div>
                    <div className={`sar-sub-options ${showSubMenu ? 'show' : ''}`}>
                        <Link to="/sar/operaciones/lista" className="sar-sub-menu-item">Operativos</Link>
                        <Link to="/sar/guardias/gestion-guardias" className="sar-sub-menu-item">Guardias</Link>
                    </div>
                    <Link to="/sar/inventario/control" className={selectedOption=='Inventario'?"sar-menu-item-selected sar-menu-item": "sar-menu-item"}> <HiOutlineClipboardList />Logistica - Inventario</Link>
                    <Link to="/sar/sanidad/lista" className={selectedOption=='Sanidad'?"sar-menu-item-selected sar-menu-item": "sar-menu-item"}> <MdOutlineMedicalServices />Sanidad</Link>
                    <Link to="/" className={selectedOption=='Cursos'?"sar-menu-item-selected sar-menu-item": "sar-menu-item"}> <GiOpenBook />Academica</Link>
                </div>             
            </div>
            <main id="modal-root">
                {children}
            </main>
        </div>
    );    
}

