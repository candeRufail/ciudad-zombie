/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function (sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);

  this.mover = function () {
    switch (direccion) {
      case "v":
        this.y += this.velocidad;

        break;
      case "h":
        this.x += this.velocidad;

        break;
      default: false;
    }
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX) || (this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
      this.velocidad *= -1;

    }




  }
}
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.atacar = function (jugador) {
  jugador.perderVidas(5);
}
