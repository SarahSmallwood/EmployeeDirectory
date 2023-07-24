import react, { useContext } from 'react';
import './App.css';
import Search from './components/Search';
import Employee from './context/Employee'




function App() {
  const EmployeeN = [
    {
    name: "Sarah",
    title: "Software Engineer",
    URL: "https://www.linkedin.com/in/sarah-smallwood565/",
    img: "https://media.licdn.com/dms/image/D4E03AQFVbFAvFZ_6aA/profile-displayphoto-shrink_800_800/0/1664043140550?e=1695254400&v=beta&t=2942NvPuI78PVTXOYTT2X6SFy715sOGkVu9RWAmBxsY"
   },
   {
    name: "Niko",
    title: "Dog",
    URL: "https://www.bostonterriersociety.com/boston-terriers-best-in-america/",
    img: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_480/https://www.bostonterriersociety.com/wp-content/uploads/2019/11/Untitled-design-2019-11-27T101413.019.jpg"
   }
   
  ]
  const [employee, setEmployee] = useState("")

    const getEmployee = async(searchTerm) => {
        const response = await fetch(`EmployeeN.${searchTerm}`)
        const data = await response.json()

        setEmployee(data)

    }; 
    useContext(() => {
      getEmployee("Sarah");
    }, []);



  return (
    <div className="App">
     
      <div> Employee Directory 
        <header> Employees </header>
        <Search EmployeeSearch={getEmployee}/>
      
      
      
      
        <Employee employee={employee} />

        
      </div>
      
    </div>
  );
}

export default App;
