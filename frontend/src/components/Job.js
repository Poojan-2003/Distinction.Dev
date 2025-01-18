// import React, { useState, useEffect } from 'react';

// function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingJob, setEditingJob] = useState(null);
//   const [formData, setFormData] = useState({
//     department: '',
//     salary: ''
//   });

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/jobs');
//       const data = await response.json();
//       setJobs(data);
//     } catch (error) {
//       alert('Failed to fetch jobs');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = editingJob
//         ? `http://localhost:5000/api/jobs/${editingJob.id}`
//         : 'http://localhost:5000/api/jobs';
      
//       const method = editingJob ? 'PUT' : 'POST';
      
//       await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           department: formData.department,
//           salary: Number(formData.salary)
//         }),
//       });

//       setIsModalOpen(false);
//       setEditingJob(null);
//       setFormData({ department: '', salary: '' });
//       fetchJobs();
//       alert(editingJob ? 'Job updated successfully' : 'Job created successfully');
//     } catch (error) {
//       alert(editingJob ? 'Failed to update job' : 'Failed to create job');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this job?')) {
//       try {
//         await fetch(`http://localhost:5000/api/jobs/${id}`, {
//           method: 'DELETE',
//         });
//         alert('Job deleted successfully');
//         fetchJobs();
//       } catch (error) {
//         alert('Failed to delete job');
//       }
//     }
//   };

//   const handleEdit = (job) => {
//     setEditingJob(job);
//     setFormData({
//       department: job.department,
//       salary: job.salary.toString()
//     });
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <h1>Jobs Management</h1>
//         <button onClick={() => {
//           setEditingJob(null);
//           setFormData({ department: '', salary: '' });
//           setIsModalOpen(true);
//         }}>
//           Add Job
//         </button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Department</th>
//             <th>Salary</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {jobs.map((job) => (
//             <tr key={job.id}>
//               <td>{job.id}</td>
//               <td>{job.department}</td>
//               <td>${job.salary.toLocaleString()}</td>
//               <td>
//                 <button onClick={() => handleEdit(job)}>Edit</button>
//                 <button onClick={() => handleDelete(job.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>{editingJob ? 'Edit Job' : 'Add New Job'}</h2>
//             <form onSubmit={handleSubmit}>
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
//               <div className="button-group">
//                 <button type="button" onClick={() => setIsModalOpen(false)}>
//                   Cancel
//                 </button>
//                 <button type="submit">
//                   {editingJob ? 'Update' : 'Create'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Jobs;


import React, { useState, useEffect } from 'react';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    department: '',
    salary: ''
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://backend:5000/api/jobs');
      const data = await response.json();
      
      // Ensure that data is an array before calling .map()
      if (Array.isArray(data)) {
        setJobs(data);
      } else {
        console.error('Fetched data is not an array:', data);
        setJobs([]); // Set as empty array if data is not in the expected format
      }
    } catch (error) {
      alert('Failed to fetch jobs');
      setJobs([]); // Fallback to empty array on error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingJob
        ? `http://backend:5000/api/jobs/${editingJob.id}`
        : 'http://backend:5000/api/jobs';
      
      const method = editingJob ? 'PUT' : 'POST';
      
      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          department: formData.department,
          salary: Number(formData.salary) // Ensure salary is a number
        }),
      });

      setIsModalOpen(false);
      setEditingJob(null);
      setFormData({ department: '', salary: '' });
      fetchJobs();
      alert(editingJob ? 'Job updated successfully' : 'Job created successfully');
    } catch (error) {
      alert(editingJob ? 'Failed to update job' : 'Failed to create job');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await fetch(`http://backend:5000/api/jobs/${id}`, {
          method: 'DELETE',
        });
        alert('Job deleted successfully');
        fetchJobs();
      } catch (error) {
        alert('Failed to delete job');
      }
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      department: job.department,
      salary: job.salary.toString()
    });
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Jobs Management</h1>
        <button onClick={() => {
          setEditingJob(null);
          setFormData({ department: '', salary: '' });
          setIsModalOpen(true);
        }}>
          Add Job
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.department}</td>
              <td>${job.salary.toLocaleString()}</td>
              <td>
                <button onClick={() => handleEdit(job)}>Edit</button>
                <button onClick={() => handleDelete(job.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editingJob ? 'Edit Job' : 'Add New Job'}</h2>
            <form onSubmit={handleSubmit}>
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
              <div className="button-group">
                <button type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit">
                  {editingJob ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Jobs;
