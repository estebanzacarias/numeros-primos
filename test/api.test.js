const request = require("supertest");

const app = require("../src/app");


describe("GET /number/:number", () => {
  it("responde con los numeros primos desde el numero ingresado al 2", (done) => {
    request(app)
      .get("/number/10")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("responde error si se ingresa un valor diferente al esperado", (done) => {
    request(app)
      .get("/number/numero")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404)
      .expect('"Debe ingresar un numero"')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

