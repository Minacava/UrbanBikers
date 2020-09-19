var Bicicleta = function (id, color, modelo, ubicacion) {
	this.id = id;
	this.color = color;
	this.modelo = modelo;
	this.ubicacion = ubicacion;
};

Bicicleta.prototype.toString = function () {
	return 'id: ' + this.id + '| color: ' + this.color;
};

Bicicleta.allBicis = [];
Bicicleta.add = function (abici) {
	Bicicleta.allBicis.push(abici);
};

Bicicleta.findById = function (aBiciId) {
	var aBici = Bicicleta.allBicis.find((x) => x.if == aBiciId);
	if (aBici) return aBici;
	else throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
};

Bicicleta.removeById = function (aBiciId) {
	for (var i = 0; i < Bicicleta.allBicis.length; i++) {
		if (Bicicleta.allBicis[i].id == aBiciId) {
			Bicicleta.allBicis.splice(i, 1);
			break;
		}
	}
};

var x = new Bicicleta(1, 'amarillo', 'urbanXtreme', [37.77493, -122.4134]);
var y = new Bicicleta(2, 'rojo', 'urbanRider', [37.77493, -122.4234]);

Bicicleta.add(x);
Bicicleta.add(y);
module.exports = Bicicleta;
