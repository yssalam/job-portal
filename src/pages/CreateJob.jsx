import { useState } from "react";
import { createJob } from "../api/jobs";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    description: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // guard
    if (!form.title || !form.company) return;

    createJob(form);
    navigate("/admin");
  };

  return (
    <div className="create-job-container">
      <h1>Create New Job</h1>

      <form className="create-job-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            placeholder="Frontend Developer"
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
            placeholder="Google"
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
            placeholder="Remote / Jakarta"
            value={form.location}
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            placeholder="Job description..."
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
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
            Create Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
