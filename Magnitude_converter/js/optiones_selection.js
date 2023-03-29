const control = document.querySelector(".input_presion");

const input_select = document.querySelector(".sele1");
const output_select = document.querySelector(".sele2");
const intercambiar = document.querySelector(".intercambio")

function obtener(unit_intro, intro) {

  var psi, psf, ksi;

  if (unit_intro == 'psi') {
    psi = 1 * intro;
    psf = 144 * intro;
    ksi = 0.001 * intro;
  }
  if (unit_intro == 'psf') {
    psf = 1 * intro;
    psi = 0.0069444444 * intro;
    ksi = 0.0000069444 * intro;
  }
  if (unit_intro == 'ksi') {
    ksi = 1 * intro;
    psf = 144000.0082737109  * intro;
    psi = 1000 * intro;
  }

  return { psi, psf, ksi }
}


function operacion(input_unit, output_unit){
  const result1 = document.querySelector(".results .uno");
  const result2 = document.querySelector(".results .dos");
  const entrada = control.value;

  var input_unit = input_select.value;
  var output_unit = output_select.value;



  const { psi, psf, ksi } = obtener(input_unit, entrada)

  if (output_unit == 'psi') {

    result1.textContent = `${ new Intl.NumberFormat().format(psi.toFixed()).replaceAll('.', ' ')} psi`;
    result2.textContent = `${ psi.toExponential(3).replace('e+',' ×10^') } psi`;
  }

  if (output_unit == 'psf') {
    result1.textContent = `${ new Intl.NumberFormat().format(psf.toFixed()).replaceAll('.', ' ')} psf`;
    result2.textContent = `${ psf.toExponential(3).replace('e+',' ×10^')} psf`;
  }

  if(output_unit == 'ksi'){
    result1.textContent = `${ new Intl.NumberFormat().format(ksi.toFixed(3)).replaceAll('.', ' ')} ksi`;
    result2.textContent = `${ ksi.toExponential(3).replace('e+',' ×10^')} ksi`;
  }
 
}
  


operacion();

  control.addEventListener("keyup", () => {
    operacion();
  });

  input_select.addEventListener("change", () => {
    operacion();
  });

  output_select.addEventListener("change", () => {
    operacion();
  });

  intercambiar.addEventListener("click", ()=>{
    var input_unit = input_select.value;
    var output_unit = output_select.value;
  
    input_select.value = output_unit;
    output_select.value =  input_unit ;
    operacion();
  });


