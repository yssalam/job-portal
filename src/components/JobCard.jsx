import { Link } from 'react-router-dom';


const JobCard = ({ id, title, company, location }) => {
    return (
        <div className="job-card">
            <h3>{title}</h3>
            <p><strong>Company:</strong> {company}</p>
            <span className='location-job'>{location}</span>
            <br />
            <Link to={`/jobs/${id}`} className="details-link">
                View Details
            </Link>
        </div>

    )
}
export default JobCard;