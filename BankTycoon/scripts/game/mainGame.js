var shownText;
var bankTypeChosen;
var originScene;
var securityTypeChosen;

var config = {
    type: Phaser.WebGL,
    parent: 'phaser-example',
    width: 1600,
    height: 900,
    backgroundColor: 0xffffff,
    scene: [
              mainGameScene,
              nordScene,
              anleitungScene,
              eastScene,
              einkaufenScene,
              southScene,
              westScene,
              WS_kaufenScene,
              shareBuyScene,
              shareBuySpecificScene,
              obligationBuyScene,
              obligationBuySpecificScene,
              houseBuyScene,
              houseBuySpecificScene
            ]
};
var game = new Phaser.Game(config);
