var Boids = Boids || {};

Boids.Boot = function () {};

Boids.Boot.prototype = {

    preload: function () {

    },
    
    create: function () {
        var loadingText = this.add.text(0, 0, 'loading...', {
            fill: '#8a8a8a',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        });

        loadingText.setTextBounds(0, 0, this.game.width, this.game.height);

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.state.start('Load')
    }
};

