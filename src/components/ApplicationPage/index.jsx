import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StyledApplicationPage from './styles';

function ApplicationPage() {
  const [application, setApplication] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5050/apps/${id}`).then(({ data }) => {
      setApplication(data);
    });
  }, []);
  return (
    <StyledApplicationPage>
      {application && (
        <>
          <div className="logoBanner">
            <img src={application.logo} alt="" className="logo" />
            <img src={application.banner} alt="" className="banner" />
          </div>
          <div className="nameDesc">
            <h2 className="name">{application.name}</h2>
            <p className="description">{application.description}</p>
          </div>
        </>
      )}
    </StyledApplicationPage>
  );
}

export default ApplicationPage;