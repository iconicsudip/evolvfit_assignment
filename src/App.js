import './App.css';
import Dashboard from './components/Dashboard';
import UserData from './components/UserData'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  var users = [
    {
      "userId":1,
      "name":"Charvie Sharma",
      "email":"charviesharma.cs@gmail.com",
      "stepsWalked":"2457",
      "stepsTarget":"4000",
      "performedDate":"2022-10-15",
      "scheduledDate":"2022-10-22",
      "calorieIntake":"2547",
      "calorieTarget":"2500",
      "proteinIntake":"45",
      "proteinTarget":"70",
      "fatIntake":"30",
      "fatTarget":"70",
      "carbIntake":"50",
      "carbTarget":"70",
      "feedBack":true
    },
    {
      "userId":2,
      "name":"Charvie Sharma",
      "email":"charviesharma.cs@gmail.com",
      "stepsWalked":"2457",
      "stepsTarget":"4000",
      "performedDate":"2022-07-15",
      "scheduledDate":"2022-07-23",
      "calorieIntake":"2547",
      "calorieTarget":"2500",
      "proteinIntake":"45",
      "proteinTarget":"70",
      "fatIntake":"30",
      "fatTarget":"70",
      "carbIntake":"50",
      "carbTarget":"70",
      "feedBack":false
    },
    {
      "userId":3,
      "name":"Charvie Sharma",
      "email":"charviesharma.cs@gmail.com",
      "stepsWalked":"2457",
      "stepsTarget":"4000",
      "performedDate":"2022-10-17",
      "scheduledDate":"2022-10-22",
      "calorieIntake":"2547",
      "calorieTarget":"2500",
      "proteinIntake":"45",
      "proteinTarget":"70",
      "fatIntake":"30",
      "fatTarget":"70",
      "carbIntake":"50",
      "carbTarget":"70",
      "feedBack":false
    }
  ]
  
  return(
    <>
    <Router>
      <Routes>
          <Route exact path="/"  element={<Dashboard users={users}/>} />
          <Route exact path="/:userid/workout"  element={<UserData />} />
          <Route exact path="/:userid/nutrition"  element={<UserData />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
