# A modular, flexible, high-performance chess engine

This chess engine exposes a `ChessAPI()` which is used to create a `Game`, an immutable object that holdsl the information required in order to describe a game, including board setup, piece positions, turn, castling info, etc. The API itself doesn't hold the state of the game, so that must be passed as a parameter to any of its methods.

It is decoupled from the UI board element, which is to be implemented separately.
 
### Installation

1. Clone the repo:
    
    `$ git clone https://github.com/ChessCom/typescript-chess.git typescript-chess`
    
2. Install dependencies:

    `$ npm install`

### Usage

To build the library:

    $ npm run build

Then include the `chess.js` script:

    <script src="dist/chess.js"></script>
    
Create a new API and Game object:

    var api = new ChessAPI();
    var game = api.createGame('standard', 'r1bk2nr/p2p1pNp/N2B1Q2/1p1NP2P/6P1/3P4/P1P1K3/q5b1 b - - 2  21');

See the [docs](https://github.com/ChessCom/typescript-chess/wiki/API) for usage of the API methods.
    
### Tests

To run tests with Karma/Mocha/Chai:

    $ npm run test
    
To run a demo:

    $npm run server
    
Then head to `http://localhost:8080/demo/[demo-name]`

### Contributing

There are various tasks that need doing in order to get this into beta - check out the issues. The main ones are to do with tightening up the legal move generator, and implementing one or more event-driven APIs.

The other side to this is the UI (not implemented in this repo) - the idea is to create competing UIs in various frameworks (or non-frameworks). If you'd like to create a board UI element in your chosen framework, please let it be known in [#frontend-future](https://chesscom.slack.com/messages/frontend-future/) so that you're not duplicating the work of someone else.

If you have any suggestions as to how this engine can be improved, please ask in the issues so that we have a handy record of the discussions.

### Documentation

- [Homepage](https://github.com/ChessCom/typescript-chess/wiki)
- [API](https://github.com/ChessCom/typescript-chess/wiki/API)
- [Game Model](https://github.com/ChessCom/typescript-chess/wiki/Game-Object)
- [Variants](https://github.com/ChessCom/typescript-chess/wiki/variants)
- [Legal Move Generator](https://github.com/ChessCom/typescript-chess/wiki/legal-move-generator)
