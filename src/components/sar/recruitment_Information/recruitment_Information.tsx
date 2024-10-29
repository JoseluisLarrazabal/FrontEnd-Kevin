
import { useNavigate } from "react-router-dom";
import "./recruitment_Information.css";
import LayoutSar from "../layout-sar/layout-sar";
import { FaAngleLeft } from "react-icons/fa";

export default function RecruitmentInformation() {

    const goTo = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        goTo("/menu");
    }

    return (
        <LayoutSar selectedOption="Personal">
            <div className="recrutmentInformation-container">
                <h2 className="recrutmentInformation-header">
                    <button onClick={() => goTo(-1)}><FaAngleLeft /></button>
                    <b>RECLUTAMIENTO &gt; </b> <span>Información postulante</span>
                </h2>
                <div className="recrutmentInformation-card-container">
                    <div className="recrutmentInformation-card-content">
                        <div>
                            <b>Nombre completo:</b>
                            <span>Juan Pérez</span>
                        </div>
                        <div className="recrutmentInformation-row">
                            <div>
                                <b>CI:</b>
                                <span>4864545</span>
                            </div>   
                            <div>
                                <b>Fecha de nacimiento:</b>
                                <span>01/16/20</span>
                            </div>                        
                        </div>
                        <div>
                            <b>Correo electrónico:</b>
                            <span>juan@perez123.com</span>
                        </div>
                        <div>
                            <b>¿El postulante opta para la libreta militar?</b>
                            <span>Sí</span>
                        </div>
                        <div className="recrutmentInformation-documents-buttons">
                            <button className="btn btn-blue"> Ver fotocopia de carnet </button>
                            <button className="btn btn-blue"> Ver certificado de nacimiento </button>
                        </div>
                        <form onSubmit={handleSubmit}>

                        </form>
                    </div>
                    <div className="recrutmentInformation-actions">
                        <button className="btn recrutmentInformation-approve"> Aprobar </button>
                        <button className="btn recrutmentInformation-deny" > Rechazar </button>
                    </div>
                </div>
            </div>
        </LayoutSar>
    )

}