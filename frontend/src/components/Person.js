// import React, { useState, useEffect } from 'react';

// function Persons() {
//   const [persons, setPersons] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingPerson, setEditingPerson] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     age: ''
//   });

//   useEffect(() => {
//     fetchPersons();
//   }, []);

//   const fetchPersons = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/persons');
//       const data = await response.json();
//       setPersons(data);
//     } catch (error) {
//       alert('Failed to fetch persons');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = editingPerson
//         ? `http://localhost:5000/api/persons/${editingPerson.id}`
//         : 'http://localhost:5000/api/persons';
      
//       const method = editingPerson ? 'PUT' : 'POST';
      
//       await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           company: formData.company,
//           age: Number(formData.age)
//         }),
//       });

//       setIsModalOpen(false);
//       setEditingPerson(null);
//       setFormData({ name: '', company: '', age: '' });
//       fetchPersons();
//       alert(editingPerson ? 'Person updated successfully' : 'Person created successfully');
//     } catch (error) {
//       alert(editingPerson ? 'Failed to update person' : 'Failed to create person');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this person?')) {
//       try {
//         await fetch(`http://localhost:5000/api/persons/${id}`, {
//           method: 'DELETE',
//         });
//         alert('Person deleted successfully');
//         fetchPersons();
//       } catch (error) {
//         alert('Failed to delete person');
//       }
//     }
//   };

//   const handleEdit = (person) => {
//     setEditingPerson(person);
//     setFormData({
//       name: person.name,
//       company: person.company,
//       age: person.age.toString()
//     });
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <h1>Persons Management</h1>
//         <button onClick={() => {
//           setEditingPerson(null);
//           setFormData({ name: '', company: '', age: '' });
//           setIsModalOpen(true);
//         }}>
//           Add Person
//         </button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Company</th>
//             <th>Age</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {persons.map((person) => (
//             <tr key={person.id}>
//               <td>{person.id}</td>
//               <td>{person.name}</td>
//               <td>{person.company}</td>
//               <td>{person.age}</td>
//               <td>
//                 <button onClick={() => handleEdit(person)}>Edit</button>
//                 <button onClick={() => handleDelete(person.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>{editingPerson ? 'Edit Person' : 'Add New Person'}</h2>
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Company</label>
//                 <input
//                   type="text"
//                   value={formData.company}
//                   onChange={(e) =>
//                     setFormData({ ...formData, company: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Age</label>
//                 <input
//                   type="number"
//                   value={formData.age}
//                   onChange={(e) =>
//                     setFormData({ ...formData, age: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="button-group">
//                 <button type="button" onClick={() => setIsModalOpen(false)}>
//                   Cancel
//                 </button>
//                 <button type="submit">
//                   {editingPerson ? 'Update' : 'Create'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Persons;

// import React, { useState, useEffect } from 'react';

// function Persons() {
//   const [persons, setPersons] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingPerson, setEditingPerson] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     salary: '',
//     department: ''
//   });

//   useEffect(() => {
//     fetchPersons();
//   }, []);

//   const fetchPersons = async () => {
//     try {
//       const response = await fetch('http://backend:5000/api/persons');
//       const data = await response.json();
      
//       // Ensure the data is an array
//       if (Array.isArray(data)) {
//         setPersons(data);
//       } else {
//         console.error('Fetched data is not an array:', data);
//         setPersons([]); // Set as empty array if data is not in expected format
//       }
//     } catch (error) {
//       alert('Failed to fetch persons');
//       setPersons([]); // Fallback to empty array on error
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = editingPerson
//         ? `http://backend:5000/api/persons/${editingPerson.id}`
//         : 'http://backend:5000/api/persons';
      
//       const method = editingPerson ? 'PUT' : 'POST';
      
//       await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           company: formData.company,
//           salary: parseFloat(formData.salary), // Ensure salary is a number
//           department: formData.department
//         }),
//       });

//       setIsModalOpen(false);
//       setEditingPerson(null);
//       setFormData({ name: '', company: '', salary: '', department: '' });
//       fetchPersons();
//       alert(editingPerson ? 'Person updated successfully' : 'Person created successfully');
//     } catch (error) {
//       alert(editingPerson ? 'Failed to update person' : 'Failed to create person');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this person?')) {
//       try {
//         await fetch(`http://backend:5000/api/persons/${id}`, {
//           method: 'DELETE',
//         });
//         alert('Person deleted successfully');
//         fetchPersons();
//       } catch (error) {
//         alert('Failed to delete person');
//       }
//     }
//   };

//   const handleEdit = (person) => {
//     setEditingPerson(person);
//     setFormData({
//       name: person.name,
//       company: person.company,
//       salary: person.salary.toString(),
//       department: person.department
//     });
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <h1>Persons Management</h1>
//         <button onClick={() => {
//           setEditingPerson(null);
//           setFormData({ name: '', company: '', salary: '', department: '' });
//           setIsModalOpen(true);
//         }}>
//           Add Person
//         </button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Company</th>
//             <th>Salary</th>
//             <th>Department</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {persons.map((person) => (
//             <tr key={person.id}>
//               <td>{person.id}</td>
//               <td>{person.name}</td>
//               <td>{person.company}</td>
//               <td>{person.salary}</td>
//               <td>{person.department}</td>
//               <td>
//                 <button onClick={() => handleEdit(person)}>Edit</button>
//                 <button onClick={() => handleDelete(person.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>{editingPerson ? 'Edit Person' : 'Add New Person'}</h2>
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Company</label>
//                 <input
//                   type="text"
//                   value={formData.company}
//                   onChange={(e) =>
//                     setFormData({ ...formData, company: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Salary</label>
//                 <input
//                   type="number"
//                   value={formData.salary}
//                   onChange={(e) =>
//                     setFormData({ ...formData, salary: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Department</label>
//                 <input
//                   type="text"
//                   value={formData.department}
//                   onChange={(e) =>
//                     setFormData({ ...formData, department: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="button-group">
//                 <button type="button" onClick={() => setIsModalOpen(false)}>
//                   Cancel
//                 </button>
//                 <button type="submit">
//                   {editingPerson ? 'Update' : 'Create'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Persons;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Persons() {
  const [persons, setPersons] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPerson, setEditingPerson] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    salary: '',
    department: ''
  });

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    try {
      const response = await axios.get('http://backend:5000/api/persons');
      setPersons(response.data);
    } catch (error) {
      alert('Failed to fetch persons');
      setPersons([]); // Fallback to empty array on error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingPerson
        ? `http://backend:5000/api/persons/${editingPerson.id}`
        : 'http://backend:5000/api/persons';
      
      const method = editingPerson ? 'PUT' : 'POST';
      
      await axios({
        method,
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          name: formData.name,
          company: formData.company,
          salary: parseFloat(formData.salary), // Ensure salary is a number
          department: formData.department
        }
      });

      setIsModalOpen(false);
      setEditingPerson(null);
      setFormData({ name: '', company: '', salary: '', department: '' });
      fetchPersons();
      alert(editingPerson ? 'Person updated successfully' : 'Person created successfully');
    } catch (error) {
      alert(editingPerson ? 'Failed to update person' : 'Failed to create person');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this person?')) {
      try {
        await axios.delete(`http://backend:5000/api/persons/${id}`);
        alert('Person deleted successfully');
        fetchPersons();
      } catch (error) {
        alert('Failed to delete person');
      }
    }
  };

  const handleEdit = (person) => {
    setEditingPerson(person);
    setFormData({
      name: person.name,
      company: person.company,
      salary: person.salary.toString(),
      department: person.department
    });
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Persons Management</h1>
        <button onClick={() => {
          setEditingPerson(null);
          setFormData({ name: '', company: '', salary: '', department: '' });
          setIsModalOpen(true);
        }}>
          Add Person
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.company}</td>
              <td>{person.salary}</td>
              <td>{person.department}</td>
              <td>
                <button onClick={() => handleEdit(person)}>Edit</button>
                <button onClick={() => handleDelete(person.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editingPerson ? 'Edit Person' : 'Add New Person'}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label>Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label>Salary</label>
                <input
                  type="number"
                  value={formData.salary}
                  onChange={(e) =>
                    setFormData({ ...formData, salary: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label>Department</label>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  required
                />
              </div>
              <div className="button-group">
                <button type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit">
                  {editingPerson ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Persons;
