import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Adminlogin from './components/admin/Adminlogin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import AdminProfile from './components/admin/AdminProfile';
import AllManagers from './components/admin/AllManagers';
import AllTeamLeaders from './components/admin/AllTeamLeaders';
import AddManager from './components/admin/AddManager';
import AddTeamLeader from './components/admin/AddTeamLeader';
import TeamLeaderlogin from './components/team-leader/TeamLeaderlogin';
import Managerlogin from './components/manager/Managerlogin';
import ManagerProfile from './components/manager/ManagerProfile';
import MAllTeamLeaders from './components/manager/MAllTeamLeaders';
import ViewTeamMember from './components/manager/ViewTeamMember';
import EditTeamMember from './components/manager/EditTeamMember';
import DeleteTeamMember from './components/manager/DeleteTeamMember';
import Logout from './components/home/Logout';
import TeamLeaderProfile from './components/team-leader/TeamLeaderProfile';
import TeamLeaderReports from './components/team-leader/TeamLeaderReports';
import AddTeamLeaderReport from './components/team-leader/AddTeamLeaderReport';
import MReports from './components/manager/MReports';
import AddFeedback from './components/manager/AddFeedback';
import About_depatment from './components/home/About_department';
import Policies from './components/home/Policies';
import AnualReport from './components/home/AnualReport';
import MonthlyReport from './components/home/MonthlyReport';
import Footer from './components/navbar/Footer';
import AddProduct from './components/manager/AddProduct';
import Products from './components/manager/Products';
import AddTask from './components/manager/AddTask';
import AddPayment from './components/manager/AddPaymet';
import Tasks from './components/team-leader/Tasks';
import Payments from './components/team-leader/Payments';
import TForgetPassword from './components/team-leader/TForgetPassword';
import MForgetPassword from './components/manager/MForgetPassword';
import Performance_analysis from './components/team-leader/Performance_analysis';
import TaskAchievement from './components/manager/TaskAchievement';
import Product_and_Applications from './components/home/Product_and_Applications';
import Specifications from './components/home/Specifications';
import Manufacturing_Process from './components/home/Manufacturing_Process';
import Available_Product_Packing from './components/home/Available_Product_Packing';
import Quality_Control_infrastucture from './components/home/Quality_Control_infrastucture';
import GenrateAnualReport from './components/manager/GenrateAnualReport';
import GenrateMonthlyReport from './components/manager/GenrateMonthlyReport';
import SpecialCampaign from './components/home/SpecialCampaign';
import InternationalConvention from './components/home/InternationalConvention';
import PSUsInstitutions from './components/home/PSUsInstitutions';
import ChiefControllerofAccount from './components/home/ChiefControllerofAccount';
import InternationalYogaDay from './components/home/InternationalYogaDay';
import RTI from './components/home/RTI';
import PlasticParks from './components/home/PlasticParks';
import CentresofExcellence from './components/home/CentresofExcellence';
import NationalPetrochemicalsAwards from './components/home/NationalPetrochemicalsAwards';
import ChemicalsPromotionDevelopmentScheme from './components/home/ChemicalsPromotionDevelopmentScheme';
import RecentTenders from './components/home/RecentTenders';
import TenderFinalized from './components/home/TenderFinalized';


function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home setLoginUser={setLoginUser}/>}></Route>
        <Route path="/Adminlogin" element={<Adminlogin setLoginUser={setLoginUser}/>}></Route>
        <Route path="/home" element={<Home setLoginUser={setLoginUser}/>}></Route>  
        <Route path="/AdminProfile" element={<AdminProfile setLoginUser={setLoginUser}/>}></Route>
         <Route path='/AllManagers' element={<AllManagers setLoginUser={setLoginUser}/>}></Route> 
         <Route path='/AllTeamLeaders' element={<AllTeamLeaders setLoginUser={setLoginUser}/>}></Route>
         <Route path='/AddManager' element={<AddManager setLoginUser={setLoginUser}/>}></Route>
         <Route path='/AddTeamLeader' element={<AddTeamLeader setLoginUser={setLoginUser}/>}></Route>
           <Route path="/TeamLeaderLogin" element={< TeamLeaderlogin/>}></Route> 
          <Route path='/ManagerLogin'element={<Managerlogin/>}></Route>      
          <Route path="/ManagerProfile" element={< ManagerProfile/>}></Route>
          <Route path='MAllTeamMembers' element={< MAllTeamLeaders/>}></Route>
          <Route path='ViewTeamMember' element={< ViewTeamMember/>}></Route>
          <Route path='EditTeamMember' element={< EditTeamMember/>}></Route>
          <Route path='DeleteTeamMember' element={< DeleteTeamMember/>}></Route>
          <Route path='Logout' element={<Logout/>}></Route>
          <Route path="TeamLeaderProfile" element={< TeamLeaderProfile/>}></Route>
          <Route path="TeamLeaderReports" element={<TeamLeaderReports/>}></Route>
          <Route path='AddTeamLeaderReport' element={<AddTeamLeaderReport/>}></Route>
          <Route path='MReports' element={<MReports/>}></Route>
          <Route path='AddFeedback' element={<AddFeedback/>}></Route>
          <Route path='About_department' element={<About_depatment/>}></Route>
          <Route path='Policies' element={<Policies/>}></Route>
          <Route path='AnualReports' element={< AnualReport/>}></Route>
          <Route path='MonthlyReports' element={< MonthlyReport/>}></Route>
          <Route path='AddProduct' element={<AddProduct/>}></Route>
          <Route path="Products" element={<Products/>}></Route>
          <Route path='AddTask'element={<AddTask/>}></Route>
          <Route path='AddPayment'element={<AddPayment/>}></Route>
          <Route path="Tasks" element={<Tasks/>}></Route>
          <Route path="Payments" element={<Payments/>}></Route>
          <Route path='TforgetPassword' element={<TForgetPassword/>}></Route>
          <Route path='MforgetPassword' element={<MForgetPassword/>}></Route>
          <Route path='Performance_analysis' element={<Performance_analysis/>}> </Route>
          <Route path='TaskAchievement' element={<TaskAchievement/>}></Route>
          <Route path='Product_and_Applications' element={<Product_and_Applications/>}></Route>
          <Route path='Specifications' element={<Specifications/>}></Route>
          <Route path='Manufacturing_Process' element={<Manufacturing_Process/>}></Route>
          <Route path='Available_Product_Packing' element={<Available_Product_Packing/>}></Route>
          <Route path='Quality_Control_infrastucture' element={<Quality_Control_infrastucture/>}></Route>
          <Route path='GenrateAnualReport' element={<GenrateAnualReport/>}></Route>
          <Route path='GenrateMonthlyReport' element={<GenrateMonthlyReport/>}></Route>
          <Route path='SpecialCampaign' element={<SpecialCampaign/>}></Route>
          <Route path='InternationalConvention' element={<InternationalConvention/>}></Route>
          <Route path='PSUsInstitutions' element={<PSUsInstitutions/>}></Route>
          <Route path='ChiefControllerofAccount' element={<ChiefControllerofAccount/>}></Route>
          <Route path='InternationalYogaDay' element={<InternationalYogaDay/>}></Route>
          <Route path='RTI' element={<RTI/>}></Route>
          <Route path='PlasticParks' element={<PlasticParks/>}></Route>
          <Route path='CentresofExcellence' element={<CentresofExcellence/>}></Route>
          <Route path='NationalPetrochemicalsAwards' element={<NationalPetrochemicalsAwards/>}></Route>
          <Route path='ChemicalsPromotion' element={<ChemicalsPromotionDevelopmentScheme/>}></Route>
          <Route path="RecentTenders" element={<RecentTenders/>}></Route>
          <Route path="TenderFinalized" element={<TenderFinalized/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
