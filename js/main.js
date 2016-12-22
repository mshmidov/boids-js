var Boids = Boids || {};

Boids.game = new Phaser.Game(800, 600, Phaser.AUTO, '');

Boids.game.state.add('Boot', Boids.Boot);
Boids.game.state.add('Load', Boids.Load);
Boids.game.state.add('Simulation', Boids.Simulation);

Boids.game.state.start('Boot');
