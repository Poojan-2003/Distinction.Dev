// import React, { useState, useEffect } from 'react';

// function Companies() {
//   const [companies, setCompanies] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingCompany, setEditingCompany] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     built_date: '',
//     ceo: ''
//   });

//   useEffect(() => {
//     fetchCompanies();
//   }, []);

//   const fetchCompanies = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/companies');
//       const data = await response.json();
//       setCompanies(data);
//     } catch (error) {
//       alert('Failed to fetch companies');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = editingCompany
//         ? `http://localhost:5000/api/companies/${editingCompany.id}`
//         : 'http://localhost:5000/api/companies';
      
//       const method = editingCompany ? 'PUT' : 'POST';
      
//       await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       setIsModalOpen(false);
//       setEditingCompany(null);
//       setFormData({ name: '', built_date: '', ceo: '' });
//       fetchCompanies();
//       alert(editingCompany ? 'Company updated successfully' : 'Company created successfully');
//     } catch (error) {
//       alert(editingCompany ? 'Failed to update company' : 'Failed to create company');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this company?')) {
//       try {
//         await fetch(`http://localhost:5000/api/companies/${id}`, {
//           method: 'DELETE',
//         });
//         alert('Company deleted successfully');
//         fetchCompanies();
//       } catch (error) {
//         alert('Failed to delete company');
//       }
//     }
//   };

//   const handleEdit = (company) => {
//     setEditingCompany(company);
//     setFormData({
//       name: company.name,
//       built_date: company.built_date.split('T')[0],
//       ceo: company.ceo
//     });
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <h1>Companies Management</h1>
//         <button onClick={() => {
//           setEditingCompany(null);
//           setFormData({ name: '', built_date: '', ceo: '' });
//           setIsModalOpen(true);
//         }}>
//           Add Company
//         </button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Built Date</th>
//             <th>CEO</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {companies.map((company) => (
//             <tr key={company.id}>
//               <td>{company.id}</td>
//               <td>{company.name}</td>
//               <td>{new Date(company.built_date).toLocaleDateString()}</td>
//               <td>{company.ceo}</td>
//               <td>
//                 <button onClick={() => handleEdit(company)}>Edit</button>
//                 <button onClick={() => handleDelete(company.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>{editingCompany ? 'Edit Company' : 'Add New Company'}</h2>
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
//                 <label>Built Date</label>
//                 <input
//                   type="date"
//                   value={formData.built_date}
//                   onChange={(e) =>
//                     setFormData({ ...formData, built_date: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label>CEO</label>
//                 <input
//                   type="text"
//                   value={formData.ceo}
//                   onChange={(e) =>
//                     setFormData({ ...formData, ceo: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="button-group">
//                 <button type="button" onClick={() => setIsModalOpen(false)}>
//                   Cancel
//                 </button>
//                 <button type="submit">
//                   {editingCompany ? 'Update' : 'Create'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Companies;

// import React, { useState, useEffect } from 'react';

// function Companies() {
//   const [companies, setCompanies] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingCompany, setEditingCompany] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     built_date: '',
//     ceo: ''
//   });

//   useEffect(() => {
//     fetchCompanies();
//   }, []);

//   const fetchCompanies = async () => {
//     try {
//       const response = await fetch('http://backend:5000/api/companies');
//       const data = await response.json();
      
//       // Ensure that the data is an array before trying to map over it
//       if (Array.isArray(data)) {
//         setCompanies(data);
//       } else {
//         console.error('Fetched data is not an array:', data);
//         setCompanies([]); // If data is not an array, set to empty array
//       }
//     } catch (error) {
//       alert('Failed to fetch companies');
//       setCompanies([]); // In case of error, fallback to empty array
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = editingCompany
//         ? `http://backend:5000/api/companies/${editingCompany.id}`
//         : 'http://backend:5000/api/companies';
      
//       const method = editingCompany ? 'PUT' : 'POST';
      
//       await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       setIsModalOpen(false);
//       setEditingCompany(null);
//       setFormData({ name: '', built_date: '', ceo: '' });
//       fetchCompanies();
//       alert(editingCompany ? 'Company updated successfully' : 'Company created successfully');
//     } catch (error) {
//       alert(editingCompany ? 'Failed to update company' : 'Failed to create company');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this company?')) {
//       try {
//         await fetch(`http://backend:5000/api/companies/${id}`, {
//           method: 'DELETE',
//         });
//         alert('Company deleted successfully');
//         fetchCompanies();
//       } catch (error) {
//         alert('Failed to delete company');
//       }
//     }
//   };

//   const handleEdit = (company) => {
//     setEditingCompany(company);
//     setFormData({
//       name: company.name,
//       built_date: company.built_date.split('T')[0], // Ensure date is in correct format
//       ceo: company.ceo
//     });
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <h1>Companies Management</h1>
//         <button onClick={() => {
//           setEditingCompany(null);
//           setFormData({ name: '', built_date: '', ceo: '' });
//           setIsModalOpen(true);
//         }}>
//           Add Company
//         </button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Built Date</th>
//             <th>CEO</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {companies.map((company) => (
//             <tr key={company.id}>
//               <td>{company.id}</td>
//               <td>{company.name}</td>
//               <td>{new Date(company.built_date).toLocaleDateString()}</td>
//               <td>{company.ceo}</td>
//               <td>
//                 <button onClick={() => handleEdit(company)}>Edit</button>
//                 <button onClick={() => handleDelete(company.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>{editingCompany ? 'Edit Company' : 'Add New Company'}</h2>
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
//                 <label>Built Date</label>
//                 <input
//                   type="date"
//                   value={formData.built_date}
//                   onChange={(e) =>
//                     setFormData({ ...formData, built_date: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label>CEO</label>
//                 <input
//                   type="text"
//                   value={formData.ceo}
//                   onChange={(e) =>
//                     setFormData({ ...formData, ceo: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="button-group">
//                 <button type="button" onClick={() => setIsModalOpen(false)}>
//                   Cancel
//                 </button>
//                 <button type="submit">
//                   {editingCompany ? 'Update' : 'Create'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Companies;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Companies() {
  const [companies, setCompanies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    built_date: '',
    ceo: ''
  });

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get('http://backend:5000/api/companies');
      setCompanies(response.data);
    } catch (error) {
      alert('Failed to fetch companies');
      setCompanies([]); // Fallback to empty array on error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingCompany
        ? `http://backend:5000/api/companies/${editingCompany.id}`
        : 'http://backend:5000/api/companies';
      
      const method = editingCompany ? 'PUT' : 'POST';
      
      await axios({
        method,
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: formData,
      });

      setIsModalOpen(false);
      setEditingCompany(null);
      setFormData({ name: '', built_date: '', ceo: '' });
      fetchCompanies();
      alert(editingCompany ? 'Company updated successfully' : 'Company created successfully');
    } catch (error) {
      alert(editingCompany ? 'Failed to update company' : 'Failed to create company');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this company?')) {
      try {
        await axios.delete(`http://backend:5000/api/companies/${id}`);
        alert('Company deleted successfully');
        fetchCompanies();
      } catch (error) {
        alert('Failed to delete company');
      }
    }
  };

  const handleEdit = (company) => {
    setEditingCompany(company);
    setFormData({
      name: company.name,
      built_date: company.built_date.split('T')[0], // Ensure date is in correct format
      ceo: company.ceo
    });
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Companies Management</h1>
        <button onClick={() => {
          setEditingCompany(null);
          setFormData({ name: '', built_date: '', ceo: '' });
          setIsModalOpen(true);
        }}>
          Add Company
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Built Date</th>
            <th>CEO</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.name}</td>
              <td>{new Date(company.built_date).toLocaleDateString()}</td>
              <td>{company.ceo}</td>
              <td>
                <button onClick={() => handleEdit(company)}>Edit</button>
                <button onClick={() => handleDelete(company.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editingCompany ? 'Edit Company' : 'Add New Company'}</h2>
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
                <label>Built Date</label>
                <input
                  type="date"
                  value={formData.built_date}
                  onChange={(e) =>
                    setFormData({ ...formData, built_date: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label>CEO</label>
                <input
                  type="text"
                  value={formData.ceo}
                  onChange={(e) =>
                    setFormData({ ...formData, ceo: e.target.value })
                  }
                  required
                />
              </div>
              <div className="button-group">
                <button type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit">
                  {editingCompany ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Companies;
