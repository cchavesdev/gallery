import React from "react";
import "./Users.css";
function Users(props) {
  function calculateAge(birthday) {
    var birthday_arr = birthday.split("/");
    var birthday_date = new Date(
      birthday_arr[2],
      birthday_arr[1] - 1,
      birthday_arr[0]
    );
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  const { userData } = props;
  return (
    <div className="flex-wrap d-flex col-12 justify-content-center">
      <div className="relative-container">
        <div id="banner" className="col-12">
          <div id="blurred"></div>
          <div className="banner-text">
            <h2 className="banner-title">
              HOLA! SOY <span>{userData.fullName.split(/(\s+)/)[0]}</span>
            </h2>
            <p>Esta es mi información en caso de emergencia.</p>
          </div>
        </div>
        <img
          className="profile-picture"
          alt="profile-picture"
          src="https://stgcicloaventura.blob.core.windows.net/endurance/users/116110584.jpeg"
        ></img>
      </div>

      <div id="" className="col-12 pt-3 pb-3 info-container">
        <div className="d-flex  p-1 flex-wrap">
          <span>Nombre:</span> <p>{userData.fullName}</p>
          <hr className="col-12"></hr>
        </div>

        <div className="d-flex flex-wrap p-1 ">
          <div className="col d-flex">
            <span>Tipo Sange:</span> <p>{userData.bloodType}</p>
          </div>
          <div className="col d-flex">
            <span>Lateralidad:</span> <p>{userData.lateral}</p>
          </div>

          <hr className="col-12"></hr>
        </div>

        <div className="d-flex flex-wrap p-1 ">
          <div className="col d-flex">
            <span>Edad:</span> <p>{calculateAge(userData.birthDate)}</p>
          </div>
          <div className="col d-flex">
            <span>Teléfono:</span> <p>{userData.phoneNumber}</p>
          </div>

          <hr className="col-12"></hr>
        </div>

        {/* <div className="d-flex flex-wrap p-1">
          <span>Edad:</span> <p>{calculateAge(userData.birthDate)} años</p>
          <hr className="col-12"></hr>
        </div> */}

        {/* <div className="d-flex  p-1 flex-wrap">
          <span>Lateralidad:</span> <p>{userData.lateral}</p>
          <hr className="col-12"></hr>
        </div> */}

        {/* <div className="d-flex  p-1 flex-wrap">
          <span>Teléfono:</span> <p>{userData.phoneNumber}</p>
          <hr className="col-12"></hr>
        </div> */}

        <div className="d-flex  p-1 flex-wrap">
          <span>Dirección:</span> <p>{userData.address}</p>
          <hr className="col-12"></hr>
        </div>
      </div>
      <div className="col-12 info-container" id="emergencyContacts">
        <h5 className="text-center">Contactos De Emergencia</h5>
        {userData.emergencyContacts.map((contact, index) => {
          return (
            <div>
              <div className="d-flex  p-1 flex-wrap">
                <span>Nombre:</span> <p>{contact.fullName}</p>
              </div>
              <div className="d-flex  p-1 flex-wrap">
                <span>Teléfono:</span> <p>{contact.phoneNumber}</p>
              </div>
              <div className="d-flex  p-1 flex-wrap">
                <span>Relación:</span> <p>{contact.relation}</p>
              </div>
              <hr className="col-12"></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
