import React from "react";
import QRCode from "react-qr-code";
import "./Users.scss";
function Users(props) {
  const { userData } = props;
  const userUrl = `https://calm-rock-0b795521e.2.azurestaticapps.net/${userData.guid}`;

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
          alt="a representation of the user"
          src={`https://stgcicloaventura.blob.core.windows.net/endurance/users/${userData.id}.jpeg`}
        ></img>
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 64,
            width: "100%",
          }}
        >
          <QRCode
            size={256}
            className="qr-code"
            value={userUrl}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>

      <div id="" className="col-11 pt-3 info-container">
        <div className="d-flex  p-1 flex-wrap">
          <span>Nombre:</span> <p>{userData.fullName}</p>
          <hr className="col-12"></hr>
        </div>

        <div className="d-flex flex-wrap p-1 ">
          <div className="col d-flex">
            <span>Tipo Sangre:</span> <p>{userData.bloodType} </p>
          </div>
          <div className="col d-flex">
            <span>Lateralidad:</span> <p>{userData.lateral}</p>
          </div>

          <hr className="col-12"></hr>
        </div>

        <div className="d-flex flex-wrap p-1 ">
          <div className="col d-flex">
            <span>Edad:</span> <p>{calculateAge(userData.birthDate)} años</p>
          </div>
          <div className="col d-flex">
            <span>Teléfono:</span>{" "}
            <p>
              <a href={`tel:${userData.phoneNumber}`}>{userData.phoneNumber}</a>
            </p>
          </div>

          <hr className="col-12"></hr>
        </div>

        <div className="d-flex  p-1 flex-wrap">
          <span>Dirección:</span> <p>{userData.address}.</p>
          <hr className="col-12"></hr>
        </div>
      </div>
      <div className="col-11">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed ps-0 pe-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Enfermedades
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
               <ul>
                {userData.diseases.map((disease, index)=> {
                  return <li key={index}>{disease}.</li>
                })}
               </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed ps-0 pe-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Alérgias
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
              <ul>
                {userData.allergies.map((disease, index)=> {
                  return <li key={index}>{disease}.</li>
                })}
                </ul>
              </div>
            </div>
          </div>          
        </div>
      </div>
      <div className="col-11 info-container pt-3" id="emergencyContacts">
        <h5 className="text-center pb-3">Contactos De Emergencia</h5>
        {userData.emergencyContacts.map((contact, index) => {
          return (
            <div>
              <div className="d-flex  p-1 flex-wrap">
                <span>Nombre:</span> <p>{contact.fullName}</p>
              </div>
              <div className="d-flex  p-1 flex-wrap">
                <span>Teléfono:</span>{" "}
                <p>
                  <a href={`tel:${contact.phoneNumber}`}>
                    {contact.phoneNumber}
                  </a>
                </p>
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
