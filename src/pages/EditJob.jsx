import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchJobs, updateJob } from "../api/jobs";

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(null);

  useEffect(() => {
    const loadJob = async () => {
      const jobs = await fetchJobs();
      const foundJob = jobs.find(
        (job) => job.id.toString() === id
      );
      setForm(foundJob);
    };

    loadJob();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form || !form.id) return;

    updateJob(form);
    navigate("/admin");
  };

  if (!form) {
    return <p className="loading">Loading job data...</p>;
  }

  return (
    <div className="edit-job-container">
      <h1>Edit Job</h1>

      <form className="edit-job-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) =>
              setForm({ ...form, company: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={form.location}
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            required
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn cancel"
            onClick={() => navigate("/admin")}
          >
            Cancel
          </button>

          <button type="submit" className="btn save">
            Update Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJob;
