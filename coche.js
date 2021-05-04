'use strict'

class Coche{
	marca='';
	modelo='';
	anyo_fabricacion= 0;

	constructor(_marca, _modelo, _anyo_fabricacion){
		this.marca=marca;
		this.modelo=modelo;
		this.anyo_fabricacion=_anyo_fabricacion;
	}
	getMarca(){
		return this.marca;
	}
	getModelo(){
		return this.modelo;
	}
	getAnyo(){
		return this.anyo_fabricacion;
	}
}
