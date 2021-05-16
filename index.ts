class Departamento{
  nombreDeDpto: string

    constructor(nombreDeDpto: string){
      this.nombreDeDpto = nombreDeDpto

    }

getName(){
  return this.nombreDeDpto;
}
}

class Piso{
  nombre: string
  departamentos: Departamento[] = [];
    constructor(nombre){
      this.nombre = nombre;
      
    }

  pushDepartamento(departamentos: Departamento){
    return this.departamentos.push(departamentos);

  }  

  getDepartamentos(){
    return this.departamentos;

  }

}

class Edificio{
  pisos: Piso[]
    constructor(pisos: Piso[]){
        this.pisos = pisos;
    }

  addDepartamentoToPiso(nombreDelPiso: string, departamento: Departamento){
    const pisoEncontrado = this.pisos.find((i)=> {
      if(i.nombre == nombreDelPiso){
        return true;

      }
    })
    return pisoEncontrado.pushDepartamento(departamento);
    
    
  }
  getDepartamentosByPiso(nombreDePiso: string):Departamento[]{
    const pisoEncontrado = this.pisos.find((i)=>{
      if(i.nombre == nombreDePiso){
        return true;

      }
    })
    return pisoEncontrado.getDepartamentos(); 

  }
}

function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
  console.log("Un cambio");
}
main();