import styled from 'styled-components';

const StyledHome = styled.section`
  .home {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: 'roboto', sans-serif;
    background-color: rgba(218, 218, 218, 0.25);
    .profil {
      
      display: flex;
      width: 100%;
      .infos {
      height: 300px;
      display: flex;
      width: 100%;
      justify-content: center;
      .containers {
        padding: 5px;
        margin: 20px;
        width: 25vw;
        height: 300px;
        border-radius: 8px;
        background-color: #ffff;
        box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
        .picto {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 8vh;
          .pic {
          margin: 5px;
          width: 70px;
          height: 70px;
          border-radius: 100%;
          box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        }
        
        .cardName {
          font-size: 20px;
          padding: 15px;
          margin: 0;
          font-weight: normal;
        }
        .card {
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px;
          margin: 0;
          li {
            list-style: none;
            text-align: start;
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
              margin: 0;
              font-weight: bold;
            }
          }
          }
        }
      }
    }

    }
    .parcelle {
      width: 91%;
      height: 400px;
      display: flex;
      justify-content: space-around;
      margin: 70px;
      
      .infos-parcelle {
        width: 250px;
        margin: 30px;
        border-radius: 8px;
        background-color: #ffff;
        box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
        h3 {
          font-size: 20px;
          padding: 15px;
          ul {
            li {
            }
          }
        }
    }
      .parcelleMap {
        width: 800px;
        margin: 30px;
        border-radius: 8px;
        background-color: #ffff;
        box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
        p {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
      }
    }
     
    .helloUser {
      color: rgba(70, 70, 70, 1);
      text-align: center;
      font-size: 15px;
      margin: 30px;
      padding: 10px;
    }
    .welcomeProfil {
      color: rgba(70, 70, 70, 1);
      text-align: center;
      font-size: 40px;
      margin: 30px;
      padding: 10px;
    }
  }
`;

export default StyledHome;
