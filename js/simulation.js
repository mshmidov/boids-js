var Boids = Boids || {};

Boid = function (game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'boid');

    this.rotation
}

Boid.prototype = Object.create(Phaser.Sprite.prototype);
Boid.prototype.constructor = Boid;

Boids.Simulation = function () {};

Boids.Simulation.prototype = {

    create: function () {
        this.target = this.newTarget();
        this.boids = this.add.group();

        for (var i = 0; i < 10; i++) {
            var boid = this.boids.create(this.game.world.randomX, this.game.world.randomY, 'boid');
        }
    },

    update: function () {

    },

    newTarget: function () {
        return this.add.sprite(this.game.world.randomX, this.game.world.randomY, 'target');
    }
};
