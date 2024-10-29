import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/user/login/login.tsx';
import MainMenu from './components/main-menu/main-menu.tsx';
import GuardManagement from './components/sar/guard-management/guard-management.tsx';
import RecruitmentInformation from './components/sar/recruitment_Information/recruitment_Information.tsx';
import OperationsList from './components/sar/operations_list/operations_list.tsx';
import OperationsCreate from './components/sar/create_operating/create_operations.tsx';
import InventoryControl from './components/sar/inventory-control/inventory-control.tsx';
import InventoryControlList from './components/sar/inventory-control-list/inventory-control-list.tsx';
import PersonalForm from './components/sar/personal/personal.tsx';
import RecruitmentForm from './components/sar/recruitment/recruitment.tsx';
import ReportGuards from './components/sar/reportguards/reportguards.tsx';
import DonationList from './components/sar/donationlist/donationlist.tsx';
import ReturnsList from './components/sar/returnslist/returnslist.tsx';
import DonationInventory from './components/sar/donationinventory/donationinventory.tsx';
import InventoryDelivery from './components/sar/inventory_delivery/inventory_delivery.tsx';
import InventoryReturn from './components/sar/inventory_return/inventory_return.tsx';
import PersonalAttendanceReport from './components/sar/personal_attendance_report/personal_attendance_report.tsx';
import PersonalOperationsReport from './components/sar/personal_operations_report/personal_operations_report.tsx';
import DepartureList from './components/sar/departure-list/departure-list.tsx';
import InventoryRegisterFixedAsset from './components/sar/inventory-register-fixed-asset/inventory-register-fixed-asset.tsx';
import InventoryReturnFixedAsset from './components/sar/inventory-return-fixed-asset/inventory-return-fixed-asset.tsx';
import PersonalList from './components/sar/personal-list/personal-list.tsx';
import PersonalInformation from './components/sar/personal-information/personal-information.tsx';
import RecruimentList from './components/sar/recruiment-list/recruiment-list.tsx';
import SanationList from './components/sar/sanation-list/sanation-list.tsx';
import TreatmentRegister from './components/sar/sanitation-treatment-register/sanitation-treatment-register.tsx';

const router = createBrowserRouter([
  { path:  "/",  element: <Login /> },
  { path:  "/menu-principal",  element: <MainMenu /> },

  // SAR Personal
  { path:  "/sar/personal/lista",  element: <PersonalList/> },
  { path:  "/sar/personal/filiacion/registro",  element: <PersonalForm /> },
  { path:  "/sar/personal/filiacion/informacion",  element: <PersonalInformation/> },  
  // SAR Personal - Reclutamiento
  { path:  "/sar/reclutamiento/formulario",  element: <RecruitmentForm /> },
  { path:  "/sar/reclutamiento/lista",  element: <RecruimentList/> },
  { path:  "/sar/reclutamiento/informacion",  element: <RecruitmentInformation/> }, 

  // SAR Operaciones
  { path:  "/sar/operaciones/lista",  element: <OperationsList/> },
  { path:  "/sar/operaciones/crear",  element: <OperationsCreate/> },
  
  // SAR Guardias
  { path:  "/sar/guardias/gestion-guardias",  element: <GuardManagement /> },  
  
  // SAR Inventario  
  { path:  "/sar/inventario/control",  element: <InventoryControl/> },
  { path:  "/sar/inventario/activos-fijos",  element: <InventoryControlList/> },
  { path:  "/sar/inventario/lista-salidas",  element: <DepartureList/> },  
  { path:  "/sar/inventario/registro-salida",  element: <InventoryDelivery/> },  
  // SAR Inventario/Donaciones
  { path:  "/sar/inventario/donaciones",  element: <DonationList /> },
  { path:  "/sar/inventario/donaciones/registro",  element: <DonationInventory /> },  
  { path:  "/sar/inventario/donaciones/registro-activo-fijo",  element: <InventoryRegisterFixedAsset/> },
  // SAR Inventario/Devoluciones
  { path:  "/sar/inventario/devoluciones",  element: <ReturnsList /> },
  { path:  "/sar/inventario/devolucion",  element: <InventoryReturn/> },
  { path:  "/sar/inventario/devolucion-activo-fijo",  element: <InventoryReturnFixedAsset/> },
  
  // SAR Sanidad
  { path:  "/sar/sanidad/lista",  element: <SanationList /> },
  { path:  "/sar/sanidad/registro-tratamiento",  element: <TreatmentRegister/> },  

  // SAR Reportes  
  { path:  "/sar/reporte/personal/asistencia",  element: <PersonalAttendanceReport/> },
  { path:  "/sar/reporte/personal/operaciones",  element: <PersonalOperationsReport/> },  
  { path:  "/sar/reporte/guardias",  element: <ReportGuards /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)

