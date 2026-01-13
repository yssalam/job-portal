import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchJobs, deleteJob } from "../api/jobs";
import { logout } from "../api/auth";

const Admin = () => {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    // ambil data saat halaman dibuka
    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = async () => {
        const data = await fetchJobs();
        setJobs(data);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this job?"
        );

        if (!confirmDelete) return;

        await deleteJob(id);
        loadJobs(); // refresh data
    };

    const handleEdit = (id) => {
        navigate(`/admin/edit/${id}`);
    };

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="admin-layout">
            {/* SIDEBAR */}
            <aside className="admin-sidebar">
                <h2>Admin</h2>
                <ul>
                    <li>
                        <Link to="/admin">Dashboard</Link>
                    </li>
                    
                    <li>
                        <Link to="/admin/create">Create Job</Link>
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                </ul>
            </aside>

            {/* CONTENT */}
            <main className="admin-content">
                <div className="admin-header">
                    <h1>Job Management</h1>

                </div>

                {jobs.length === 0 ? (
                    <p>No jobs available.</p>
                ) : (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Company</th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job.id}>
                                    <td>{job.title}</td>
                                    <td>{job.company}</td>
                                    <td>{job.location}</td>
                                    <td className="actions">
                                        <button
                                            className="btn edit"
                                            onClick={() => handleEdit(job.id)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="btn delete"
                                            onClick={() => handleDelete(job.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
        </div>
    );
};

export default Admin;
