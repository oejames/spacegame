import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('player', 'assets/player.png');
  this.load.image('enemy', 'assets/enemy.png');
}

function create() {
  this.player = this.add.sprite(config.width / 2, config.height - 50, 'player');
  this.player.setOrigin(0.5, 0.5);

  this.enemy = this.add.sprite(Phaser.Math.Between(0, config.width), 0, 'enemy');
  this.enemy.setOrigin(0.5, 0.5);

  this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (this.cursors.left.isDown) {
    this.player.x -= 5;
  } else if (this.cursors.right.isDown) {
    this.player.x += 5;
  }

  // Move the enemy vertically
  this.enemy.y += 2;

  // Reset the enemy position when it reaches the bottom
  if (this.enemy.y > config.height) {
    this.enemy.y = 0;
    this.enemy.x = Phaser.Math.Between(0, config.width);
  }
}
