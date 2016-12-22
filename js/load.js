var Boids = Boids || {};

Boids.Load = function () {};

Boids.Load.prototype = {

    preload: function () {

        this.load.image('boid', 'assets/arrow.png');
        this.load.image('target', 'assets/circle.png');
    },

    create: function () {
        this.state.start('Simulation')
    }
};
