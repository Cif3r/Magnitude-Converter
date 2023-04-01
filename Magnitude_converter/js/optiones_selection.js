const control = document.querySelector(".input_presion");

const input_select = document.querySelector(".sele1");
const output_select = document.querySelector(".sele2");
const intercambiar = document.querySelector(".intercambio")

function obtener(unit_intro, intro) {

  var Pa, kPa, hPa, MPa, bar, mbar, psi, psf, ksi, mH2O, cmH2O, ftH2O, inH2O, kgf_cm2, kgf_m2, inHg, cmHg, mmHg, torr, atm;

  if (unit_intro == 'Pa') {
    Pa = intro * 1;
    kPa = intro * 0.001;
    hPa = intro * 0.01;
    MPa = intro * 0.000001;
    bar = intro * 0.00001;
    mbar = intro * 0.01;
    psi = intro * 0.000145038;
    psf = intro * 0.0208854342;
    ksi = intro * 1.45038e-7;
    mH2O = intro * 0.000101972;
    cmH2O = intro * 0.0101971621;
    ftH2O = intro * 0.000334552565;
    inH2O = intro * 0.00401463078;
    kgf_cm2 = intro * 0.0000101971621;
    kgf_m2 = intro * 0.101971621;
    inHg = intro * 0.0002953;
    cmHg = intro * 0.00750061683;
    mmHg = intro * 0.7500616827;
    torr = intro * 0.7500616827;
    atm = intro * 9.86923267e-6;
  }
  if (unit_intro == 'kPa') {
    Pa = intro * 1000;
    kPa = intro * 1;
    hPa = intro * 10;
    MPa = intro * 0.001;
    bar = intro * 0.01;
    mbar = intro * 10;
    psi = intro * 0.145037738;
    psf = intro * 20.8854342;
    ksi = intro * 0.000145037738;
    mH2O = intro * 0.101971621;
    cmH2O = intro * 10.1971621;
    ftH2O = intro * 0.334552565;
    inH2O = intro * 4.01463078;
    kgf_cm2 = intro * 0.0101971621;
    kgf_m2 = intro * 101.971621;
    inHg = intro * 0.295299875;
    cmHg = intro * 7.50061579;
    mmHg = intro * 75.0061579;
    torr = intro * 7.50061579;
    atm = intro * 0.00986923267;
  }
  if (unit_intro == 'hPa') {
    Pa = intro * 100;
    kPa = intro * 0.1;
    hPa = intro * 1;
    MPa = intro * 0.0001;
    bar = intro * 0.001;
    mbar = intro * 10;
    psi = intro * 0.0145038;
    psf = intro * 2.08854;
    ksi = intro * 0.000145038;
    mH2O = intro * 0.0101972;
    cmH2O = intro * 1.01972;
    ftH2O = intro * 0.334552;
    inH2O = intro * 4.01424;
    kgf_cm2 = intro * 0.0101971621;
    kgf_m2 = intro * 101.971621;
    inHg = intro * 0.29926;
    cmHg = intro * 7.5958;
    mmHg = intro * 76;
    torr = intro * 7.5958;
    atm = intro * 0.000986923;
  }
  if (unit_intro == 'MPa') {
    Pa = intro * 1000000;
    kPa = intro * 1000;
    hPa = intro * 10000;
    MPa = intro * 1;
    bar = intro * 10;
    mbar = intro * 10000;
    psi = intro * 145.037738;
    psf = intro * 208854.458;
    ksi = intro * 0.145037738;
    mH2O = intro * 10.1971631;
    cmH2O = intro * 1019.71631;
    ftH2O = intro * 33.455258;
    inH2O = intro * 401.463093;
    kgf_cm2 = intro * 10.1971621;
    kgf_m2 = intro * 101971.621;
    inHg = intro * 29.5300588;
    cmHg = intro * 750.061682;
    mmHg = intro * 7500.61682;
    torr = intro * 750.061682;
    atm = intro * 9.86923267;
  }
  if (unit_intro == 'bar') {
    Pa = intro * 100000;
    kPa = intro * 100;
    hPa = intro * 10;
    MPa = intro * 0.1;
    bar = intro * 1;
    mbar = intro * 1000;
    psi = intro * 14.503773773;
    psf = intro * 2116.216623;
    ksi = intro * 0.00014503774;
    mH2O = intro * 10.19716213;
    cmH2O = intro * 1019.716213;
    ftH2O = intro * 33.45529617;
    inH2O = intro * 401.463554;
    kgf_cm2 = intro * 1.019716213;
    kgf_m2 = intro * 10197.16213;
    inHg = intro * 29.52998751;
    cmHg = intro * 750.062;
    mmHg = intro * 7500.62;
    torr = intro * 750.062;
    atm = intro * 0.9869232667;
  }
  if (unit_intro == 'mbar') {
    Pa = intro * 100;
    kPa = intro * 0.1;
    hPa = intro * 0.01;
    MPa = intro * 0.0001;
    bar = intro * 0.001;
    mbar = intro * 1;
    psi = intro * 0.0145037738;
    psf = intro * 2.116216623;
    ksi = intro * 0.00000145037738;
    mH2O = intro * 0.1019716213;
    cmH2O = intro * 10.19716213;
    ftH2O = intro * 0.3345529617;
    inH2O = intro * 4.01463554;
    kgf_cm2 = intro * 0.01019716213;
    kgf_m2 = intro * 101.9716213;
    inHg = intro * 0.2952998751;
    cmHg = intro * 7.50062;
    mmHg = intro * 75.0062;
    torr = intro * 7.50062;
    atm = intro * 0.0009869232667;
  }
  if (unit_intro == 'psi') {
    Pa = intro * 6894.75729;
    kPa = intro * 6.89475729;
    hPa = intro * 68.9475729;
    MPa = intro * 0.00689475729;
    bar = intro * 0.0689475729;
    mbar = intro * 68.9475729;
    psi = intro * 1;
    psf = intro * 144;
    ksi = intro * 0.001;
    mH2O = intro * 0.7030684;
    cmH2O = intro * 70.30684;
    ftH2O = intro * 2.307;
    inH2O = intro * 27.7076;
    kgf_cm2 = intro * 0.0703069578;
    kgf_m2 = intro * 703.069578;
    inHg = intro * 2.03625437;
    cmHg = intro * 51.7149326;
    mmHg = intro * 517.149326;
    torr = intro * 51.7149326;
    atm = intro * 0.0680459639;
  }
  if (unit_intro == 'psf') {
    Pa = intro * 47.8802589;
    kPa = intro * 0.0478802589;
    hPa = intro * 0.00478802589;
    MPa = intro * 0.0000478802589;
    bar = intro * 0.000478802589;
    mbar = intro * 0.478802589;
    psi = intro * 0.00694444444;
    psf = intro * 1;
    ksi = intro * 0.00000694444444;
    mH2O = intro * 0.4911540766;
    cmH2O = intro * 49.11540766;
    ftH2O = intro * 1.60208894;
    inH2O = intro * 19.2250673;
    kgf_cm2 = intro * 0.04911540766;
    kgf_m2 = intro * 491.1540766;
    inHg = intro * 0.142236123;
    cmHg = intro * 3.6131707;
    mmHg = intro * 36.131707;
    torr = intro * 3.6131707;
    atm = intro * 0.000474895875;
  }
  if (unit_intro == 'ksi') {
    Pa = intro * 6894757.29;
    kPa = intro * 6894.75729;
    hPa = intro * 68.9475729;
    MPa = intro * 6.89475729;
    bar = intro * 68.9475729;
    mbar = intro * 68947.5729;
    psi = intro * 1000;
    psf = intro * 144000;
    ksi = intro * 1;
    mH2O = intro * 70306.84;
    cmH2O = intro * 703068.4;
    ftH2O = intro * 230.69;
    inH2O = intro * 2768.13;
    kgf_cm2 = intro * 70.3069578;
    kgf_m2 = intro * 703069.578;
    inHg = intro * 2036.25437;
    cmHg = intro * 51714.9326;
    mmHg = intro * 517149.326;
    torr = intro * 51714.9326;
    atm = intro * 68.0459639;
  }
  if (unit_intro == 'mH2O') {
    Pa = intro * 9806.65;
    kPa = intro * 9.80665;
    hPa = intro * 98.0665;
    MPa = intro * 0.00980665;
    bar = intro * 0.0980665;
    mbar = intro * 98.0665;
    psi = intro * 1.42233;
    psf = intro * 204.885;
    ksi = intro * 0.00142233;
    mH2O = intro * 1;
    cmH2O = intro * 100;
    ftH2O = intro * 3.28084;
    inH2O = intro * 39.3701;
    kgf_cm2 = intro * 0.1;
    kgf_m2 = intro * 1000;
    inHg = intro * 0.0735559;
    cmHg = intro * 1.86833;
    mmHg = intro * 18.6833;
    torr = intro * 1.86833;
    atm = intro * 0.00967841;
  }
  if (unit_intro == 'cmH2O') {
    Pa = intro * 98.0665;
    kPa = intro * 0.0980665;
    hPa = intro * 0.980665;
    MPa = intro * 0.0000980665;
    bar = intro * 0.000980665;
    mbar = intro * 0.980665;
    psi = intro * 0.0142233;
    psf = intro * 2.04885;
    ksi = intro * 0.0000142233;
    mH2O = intro * 0.01;
    cmH2O = intro * 1;
    ftH2O = intro * 0.0328084;
    inH2O = intro * 0.393701;
    kgf_cm2 = intro * 0.00101972;
    kgf_m2 = intro * 10.1972;
    inHg = intro * 0.000750061;
    cmHg = intro * 0.0193368;
    mmHg = intro * 0.193368;
    torr = intro * 0.0193368;
    atm = intro * 0.0001;
  }
  if (unit_intro == 'ftH2O') {
    Pa = intro * 2989.07;
    kPa = intro * 2.98907;
    hPa = intro * 29.8907;
    MPa = intro * 0.00298907;
    bar = intro * 0.0298907;
    mbar = intro * 29.8907;
    psi = intro * 0.433528;
    psf = intro * 62.4275;
    ksi = intro * 0.000433528;
    mH2O = intro * 0.3048;
    cmH2O = intro * 30.48;
    ftH2O = intro * 1;
    inH2O = intro * 12;
    kgf_cm2 = intro * 0.031081;
    kgf_m2 = intro * 310.81;
    inHg = intro * 0.0735559;
    cmHg = intro * 1.86832;
    mmHg = intro * 18.6832;
    torr = intro * 1.86832;
    atm = intro * 0.0245364;
  }
  if (unit_intro == 'inH2O') {
    Pa = intro * 248.84;
    kPa = intro * 0.24884;
    hPa = intro * 2.4884;
    MPa = intro * 0.00024884;
    bar = intro * 0.0024884;
    mbar = intro * 2.4884;
    psi = intro * 0.0360912;
    psf = intro * 5.20217;
    ksi = intro * 0.0000360912;
    mH2O = intro * 0.0254;
    cmH2O = intro * 2.54;
    ftH2O = intro * 0.0833333;
    inH2O = intro * 1;
    kgf_cm2 = intro * 0.00254001;
    kgf_m2 = intro * 25.4001;
    inHg = intro * 0.0598442;
    cmHg = intro * 1.52222;
    mmHg = intro * 15.2222;
    torr = intro * 1.52222;
    atm = intro * 0.0198632;
  }
  if (unit_intro == 'kgf_cm2') {
    Pa = intro * 98066.5;
    kPa = intro * 98.0665;
    hPa = intro * 980.665;
    MPa = intro * 0.0980665;
    bar = intro * 0.980665;
    mbar = intro * 980.665;
    psi = intro * 14.2233;
    psf = intro * 2048.17;
    ksi = intro * 0.0142233;
    mH2O = intro * 10.1972;
    cmH2O = intro * 1019.72;
    ftH2O = intro * 33.4553;
    inH2O = intro * 401.416;
    kgf_cm2 = intro * 1;
    kgf_m2 = intro * 10000;
    inHg = intro * 29.5299;
    cmHg = intro * 750.062;
    mmHg = intro * 7500.62;
    torr = intro * 750.062;
    atm = intro * 0.967844;
  }
  if (unit_intro == 'kgf_m2') {
    Pa = intro * 9.80665;
    kPa = intro * 0.00980665;
    hPa = intro * 0.0980665;
    MPa = intro * 0.00000980665;
    bar = intro * 0.0000980665;
    mbar = intro * 0.0980665;
    psi = intro * 0.142233;
    psf = intro * 20.8854;
    ksi = intro * 0.000142233;
    mH2O = intro * 0.101972;
    cmH2O = intro * 10.1972;
    ftH2O = intro * 0.334553;
    inH2O = intro * 4.01416;
    kgf_cm2 = intro * 0.0000101972;
    kgf_m2 = intro * 1;
    inHg = intro * 0.295299;
    cmHg = intro * 7.50062;
    mmHg = intro * 75.0062;
    torr = intro * 7.50062;
    atm = intro * 0.000967844;
  }
  if (unit_intro == 'inHg') {
    Pa = intro * 3386.389;
    kPa = intro * 3.386389;
    hPa = intro * 33.86389;
    MPa = intro * 0.003386389;
    bar = intro * 0.03386389;
    mbar = intro * 33.86389;
    psi = intro * 0.491154;
    psf = intro * 71.9998;
    ksi = intro * 0.000491154;
    mH2O = intro * 3.376855;
    cmH2O = intro * 337.6855;
    ftH2O = intro * 11.12655;
    inH2O = intro * 133.322;
    kgf_cm2 = intro * 0.03345712;
    kgf_m2 = intro * 334.5712;
    inHg = intro * 1;
    cmHg = intro * 25.4;
    mmHg = intro * 254;
    torr = intro * 25.4;
    atm = intro * 0.0334211;
  }
  if (unit_intro == 'cmHg') {
    Pa = intro * 1333.2239;
    kPa = intro * 1.3332239;
    hPa = intro * 13.332239;
    MPa = intro * 0.0013332239;
    bar = intro * 0.013332239;
    mbar = intro * 13.332239;
    psi = intro * 0.19336637;
    psf = intro * 28.06783;
    ksi = intro * 0.00019336637;
    mH2O = intro * 1.3332237;
    cmH2O = intro * 133.32237;
    ftH2O = intro * 4.3742894;
    inH2O = intro * 52.92208;
    kgf_cm2 = intro * 0.013332206;
    kgf_m2 = intro * 133.32206;
    inHg = intro * 0.39370079;
    cmHg = intro * 1;
    mmHg = intro * 10;
    torr = intro * 1;
    atm = intro * 0.013157895;
  }
  if (unit_intro == 'mmHg') {
    Pa = intro * 133.3223684;
    kPa = intro * 0.1333223684;
    hPa = intro * 1.333223684;
    MPa = intro * 0.0001333223684;
    bar = intro * 0.001333223684;
    mbar = intro * 1.333223684;
    psi = intro * 0.019336773;
    psf = intro * 2.784495;
    ksi = intro * 0.000019336773;
    mH2O = intro * 0.133322368;
    cmH2O = intro * 13.3322368;
    ftH2O = intro * 0.43742895;
    inH2O = intro * 5.292208;
    kgf_cm2 = intro * 0.0013332206;
    kgf_m2 = intro * 13.332206;
    inHg = intro * 0.039370079;
    cmHg = intro * 0.1;
    mmHg = intro * 1;
    torr = intro * 1;
    atm = intro * 0.0013157895;
  }
  if (unit_intro == 'torr') {
    Pa = intro * 133.3223684;
    kPa = intro * 0.1333223684;
    hPa = intro * 1.333223684;
    MPa = intro * 0.0001333223684;
    bar = intro * 0.001333223684;
    mbar = intro * 1.333223684;
    psi = intro * 0.019336773;
    psf = intro * 2.784495;
    ksi = intro * 0.000019336773;
    mH2O = intro * 0.133322368;
    cmH2O = intro * 13.3322368;
    ftH2O = intro * 0.43742895;
    inH2O = intro * 5.292208;
    kgf_cm2 = intro * 0.0013332206;
    kgf_m2 = intro * 13.332206;
    inHg = intro * 0.039370079;
    cmHg = intro * 0.1;
    mmHg = intro * 1;
    torr = intro * 1;
    atm = intro * 0.0013157895;
  }
  if (unit_intro == 'atm') {
    Pa = intro * 101325;
    kPa = intro * 101.325;
    hPa = intro * 1013.25;
    MPa = intro * 0.101325;
    bar = intro * 1.01325;
    mbar = intro * 1013.25;
    psi = intro * 14.6959488;
    psf = intro * 2116.2166237;
    ksi = intro * 0.0146959488;
    mH2O = intro * 10.332274;
    cmH2O = intro * 1033.227453;
    ftH2O = intro * 33.899503;
    inH2O = intro * 406.793;
    kgf_cm2 = intro * 1.033227;
    kgf_m2 = intro * 10332.274;
    inHg = intro * 29.9212598;
    cmHg = intro * 76.0131558;
    mmHg = intro * 760.131;
    torr = intro * 760.131;
    atm = intro * 1;
  }
  return { Pa, kPa, hPa, MPa, bar, mbar, psi, psf, ksi, mH2O, cmH2O, ftH2O, inH2O, kgf_cm2, kgf_m2, inHg, cmHg, mmHg, torr, atm }
}


function operacion(input_unit, output_unit) {
  const result1 = document.querySelector(".results .uno");
  const result2 = document.querySelector(".results .dos");
  const entrada = control.value;

  var input_unit = input_select.value;
  var output_unit = output_select.value;

  const { Pa, kPa, hPa, MPa, bar, mbar, psi, psf, ksi, mH2O, cmH2O, ftH2O, inH2O, kgf_cm2, kgf_m2, inHg, cmHg, mmHg, torr, atm } = obtener(input_unit, entrada)
  const units = ['Pa', 'kPa', 'hPa', 'MPa', 'bar', 'mbar', 'psi', 'psf', 'ksi', 'mH2O', 'cmH2O', 'ftH2O', 'inH2O', 'kgf_cm2', 'kgf_m2', 'inHg', 'cmHg', 'mmHg', 'torr', 'atm'];

  for (let i = 0; i < units.length; i++) {
    if (output_unit == units[i]) {
      const unit = units[i];
      const value = eval(unit);


      let valueString = value.toString();

      let partes = valueString.split('.');
      let unidades = partes[0].length; // almacena la longitud de la parte entera (unidades)
      let decimales = partes[1] ? partes[1].length : 0;

      console.log("Uniades: " + unidades + " Decimales: " + decimales);

      if (unidades > 7 || decimales > 7) {
        let separar = value.toExponential(4);
        let part = separar.split('e');
        result1.innerHTML = `${value.toExponential(4).replace('e', ' ×10').replace('+', '').replace(`0${parseInt(part[1])}`, `0<sup>${parseInt(part[1])}</sup>`)} ${output_unit}`;
      }
      if (unidades <= 7 && decimales <= 7) {
        result1.textContent = `${value} ${output_unit}`;
      }
      result2.textContent = `${value.toExponential(6).replace('e', ' ×10^').replace('+', '')} ${output_unit}`;
    }
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

intercambiar.addEventListener("click", () => {
  var input_unit = input_select.value;
  var output_unit = output_select.value;

  input_select.value = output_unit;
  output_select.value = input_unit;
  operacion();
});


