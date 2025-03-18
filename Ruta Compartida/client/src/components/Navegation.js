import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//------------------ Importaciones de los modulos principales ------------------//

//Index de Login&Register
import Index from './Index';

//Index de Driver
import Driver from './Driver/Index'

//---------------- Importaciones de los modulos Login&Register ----------------//

//Iniciar sesion
import Login from './Login/Login';

//Registrar
import PersonalData from './Register/PersonalData';
import AccountDetails from './Register/AccountDetails';

//Reiniciar contraseña
import ResetPassword from './Login/Forget_My_Password/ResetPassword';
import VerifyCode from './Login/Forget_My_Password/VerifyCode';
import CreatePassword from './Login/Forget_My_Password/CreatePassword';

//---------------------- Importaciones del modulo Driver ----------------------//

//Crear ruta
import CreateRide from './Driver/Create_Ride/CreateRide';
import DaysOfWeek from './Driver/Create_Ride/DaysOfWeek';

//Perfil
import Profile from './Driver/Profile/Profile';
import EditeProfile from './Driver/Profile/EditeProfile';

//Notificaciones
import Notifications from './Driver/Notifications';

//-------------------- Importaciones de tabBar por modulo --------------------//

//Driver
import TabBarDriver from './Driver/TabBarDriver';

const Navegation = () => {


  //Condiciones de rutas para  el TabBar del modulo Driver
  const location = useLocation();
  const pathname = location.pathname;
  
  // Verificar si estamos en una ruta donde se debe mostrar el TabBar
  const showTabBarDriver = () => {
    // Excluir las rutas de login y registro
    const excludedPaths = [
      '/',
      '/Register/PersonalData',
      '/Register/AccountDetails',
      '/Login/Login',
      '/Forget_My_Password/ResetPassword',
      '/Forget_My_Password/VerifyCode',
      '/Forget_My_Password/CreatePassword'
    ];
    
    return !excludedPaths.includes(pathname);
  };


  return (
    <>
    <Routes>
      {/*------------------------------ Login&Register ------------------------------*/}

      {/* Index */}
      <Route path="/" element={<Index />} />

      
      {/* Registrarse */}
      <Route path="/Register/PersonalData" element={<PersonalData />} />
      <Route path="/Register/AccountDetails" element={<AccountDetails />} />

      {/* Iniciar sesion */}
      <Route path="/Login/Login" element={<Login />} />

      {/* Restaurar contraseña */}
      <Route path="/Forget_My_Password/ResetPassword" element={<ResetPassword />} />
      <Route path="/Forget_My_Password/VerifyCode" element={<VerifyCode />} />
      <Route path="/Forget_My_Password/CreatePassword" element={<CreatePassword />} />

      {/*---------------------------------- Driver ----------------------------------*/}

      {/* Index */}
      <Route path="/Driver/Index" element={<Driver />} />

      {/* Crear una ruta */}
      <Route path="/Create_Ride/CreateRide" element={<CreateRide />} />
      <Route path="/Create_Ride/DaysOfWeek" element={<DaysOfWeek />} />

      {/* Ver perfil y editarlo*/}
      <Route path="/Profile/Profile" element={<Profile />} />
      <Route path="/Profile/EditeProfile" element={<EditeProfile />} />

      <Route path="/Driver/Notifications" element={<Notifications />} />

      {/*--------------------------------- Passenger ---------------------------------*/}
      
    </Routes>

    {showTabBarDriver() && <TabBarDriver />}
    
  </>
  );
};

export default Navegation;