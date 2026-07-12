import React from "react";
import { CiBookmark } from "react-icons/ci";

const Card = () => {

  const jobs = [
    {
      id: 1,
      company: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
      days: "5 days ago",
      position: "Senior UI/UX Designer",
      jobType: "Part Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "San Francisco"
    },
    {
      id: 2,
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
      days: "2 days ago",
      position: "Frontend Developer",
      jobType: "Full Time",
      level: "Mid Level",
      salary: "$100/hr",
      location: "California"
    },
    {
      id: 3,
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      days: "1 day ago",
      position: "React Developer",
      jobType: "Full Time",
      level: "Junior Level",
      salary: "$80/hr",
      location: "New York"
    },
    {
      id: 4,
      company: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      days: "3 days ago",
      position: "Backend Developer",
      jobType: "Remote",
      level: "Senior Level",
      salary: "$150/hr",
      location: "Los Angeles"
    },
    {
      id: 5,
      company: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
      days: "4 days ago",
      position: "Full Stack Developer",
      jobType: "Full Time",
      level: "Mid Level",
      salary: "$130/hr",
      location: "Texas"
    },
    {
      id: 6,
      company: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      days: "6 days ago",
      position: "Software Engineer",
      jobType: "Full Time",
      level: "Senior Level",
      salary: "$160/hr",
      location: "California"
    },
    {
      id: 7,
      company: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
      days: "2 days ago",
      position: "UI Developer",
      jobType: "Full Time",
      level: "Mid Level",
      salary: "$110/hr",
      location: "Seattle"
    },
    {
      id: 8,
      company: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      days: "7 days ago",
      position: "Frontend Engineer",
      jobType: "Remote",
      level: "Junior Level",
      salary: "$90/hr",
      location: "Remote"
    },
    {
      id: 9,
      company: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      days: "3 days ago",
      position: "React JS Developer",
      jobType: "Full Time",
      level: "Mid Level",
      salary: "$125/hr",
      location: "Chicago"
    },
    {
      id: 10,
      company: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      days: "1 day ago",
      position: "MERN Stack Developer",
      jobType: "Full Time",
      level: "Junior Level",
      salary: "$85/hr",
      location: "Boston"
    }
  ];

  return (
    <div className="card-container">

      {jobs.map((job) => (

        <div className="parent" key={job.id}>

          <div className="child">

            <div className="top">

              <img
                src={job.logo}
                alt={job.company}
              />

              <button>
                Save <CiBookmark />
              </button>

            </div>


            <div className="middle">

              <h4>
                {job.company}
                <span> {job.days}</span>
              </h4>

              <h3>
                <b>{job.position}</b>
              </h3>

              <div className="tags">

                <h4>{job.jobType}</h4>

                <h4>{job.level}</h4>

              </div>

            </div>


            <div className="bottom">

              <div className="pricetag">

                {job.salary}

                <h5>{job.location}</h5>

              </div>

              <button>
                Apply Now
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
};

export default Card;