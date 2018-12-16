import * as React from 'react';

class PersonalData extends React.Component {

    public render() {
        return (
          <div className="row">
              <div className="col">
                  Imagen
              </div>
              <div className="col">
                <form>
                    <div className="form-group">
                        <label htmlFor="medicalRecordNumber" className="font-weight-bold">Nº de Historia Clínica</label>
                        <input type="text" className="form-control form-control-sm" id="medicalRecordNumber" value="2075HF"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="font-weight-bold">Nombre</label>
                        <input type="text" className="form-control form-control-sm" id="name" value="Miguel Ángel"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname" className="font-weight-bold">Apellidos</label>
                        <input type="text" className="form-control form-control-sm" id="surname" value="Núñez-Romero Olmo"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dni" className="font-weight-bold">DNI</label>
                        <input type="text" className="form-control form-control-sm" id="dni" value="85789654M"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="font-weight-bold">Email</label>
                        <input type="text" className="form-control form-control-sm" id="email" value="hola@gmail.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tlfn" className="font-weight-bold">Nº de Teléfono</label>
                        <input type="text" className="form-control form-control-sm" id="tlfn" value="685147862"/>
                    </div>
                </form>
              </div>
          </div>
        );
      }

}

export default PersonalData;