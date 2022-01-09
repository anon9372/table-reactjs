import logo from './logo.svg';
import react, { useState } from 'react'
import './App.css';
import data from './mock-data.json'

function App() {

  const [contacts, setContact] = useState(data);
  return <div className='app-container'>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Takeoff</th>
          <th>Landing</th>
          <th>Duration</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) =>
          <tr>
            <td>{contact.id}</td>
            <td>{contact.takeoff_timestamp}</td>
            <td>{contact.landing_timestamp}</td>
            <td>{contact.duration}</td>
            <td>{contact.departure_from}</td>
            <td>{contact.arrival_at}</td>
            <td>{contact.flight_ticket_price}</td>
          </tr>
        )}


      </tbody>
    </table>
  </div>;
}

export default App;
