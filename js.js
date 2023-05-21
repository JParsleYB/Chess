window.addEventListener("DOMContentLoaded", function() {
    var squares = document.querySelectorAll(".square");
    var pieces = document.querySelectorAll(".piece");
    var selectedPieceId = null;
    var coordinates = {};
  
    squares.forEach(function(square) {
      var id = square.id;
      var rect = square.getBoundingClientRect();
      var x = rect.left;
      var y = rect.top;
  
      coordinates[id] = { x: x, y: y };
  
      square.addEventListener("click", function() {
        if (selectedPieceId) {
          var targetSquareId = this.id;
          var targetSquareCoords = coordinates[targetSquareId];
  
          // Ustawianie współrzędnych dla wybranej figury
          setPieceCoords(selectedPieceId, targetSquareCoords);
  
          var piecePosition = getPiecePosition(selectedPieceId);
          console.log("Figura " + selectedPieceId + " przesunięta na pole " + targetSquareId);
          console.log("Aktualna pozycja figury:", piecePosition);
  
          resetSelection();
        }
      });
    });
  
    pieces.forEach(function(piece) {
      piece.addEventListener("click", function() {
        if (this.classList.contains("selected")) {
            resetSelection();
          } else {
            resetSelection();
  
        piece.classList.add("selected");
        selectedPieceId = piece.id;
  
        console.log("Zaznaczono figurę " + selectedPieceId);
  
        var piecePosition = getPiecePosition(selectedPieceId);
        console.log("Pozycja figury:", piecePosition);
          }
      });
    });

    setPieceStartPosition();

    function setPieceStartPosition(){
        setPieceCoords("wk", coordinates["d1"]);
        setPieceCoords("bk", coordinates["d8"]);
        setPieceCoords("wq", coordinates["e1"]);
        setPieceCoords("bq", coordinates["e8"]);
        setPieceCoords("wb", coordinates["c1"]);
        setPieceCoords("bb", coordinates["c8"]);
        setPieceCoords("wb2", coordinates["f1"]);
        setPieceCoords("bb2", coordinates["f8"]);
        setPieceCoords("wkn", coordinates["b1"]);
        setPieceCoords("bkn", coordinates["b8"]);
        setPieceCoords("wkn2", coordinates["g1"]);
        setPieceCoords("bkn2", coordinates["g8"]);
        setPieceCoords("wr", coordinates["a1"]);
        setPieceCoords("br", coordinates["a8"]);
        setPieceCoords("wr2", coordinates["h1"]);
        setPieceCoords("br2", coordinates["h8"]);
        setPieceCoords("wp", coordinates["a2"]);
        setPieceCoords("wp2", coordinates["b2"]);
        setPieceCoords("wp3", coordinates["c2"]);
        setPieceCoords("wp4", coordinates["d2"]);
        setPieceCoords("wp5", coordinates["e2"]);
        setPieceCoords("wp6", coordinates["f2"]);
        setPieceCoords("wp7", coordinates["g2"]);
        setPieceCoords("wp8", coordinates["h2"]);
        setPieceCoords("bp", coordinates["a7"]);
        setPieceCoords("bp2", coordinates["b7"]);
        setPieceCoords("bp3", coordinates["c7"]);
        setPieceCoords("bp4", coordinates["d7"]);
        setPieceCoords("bp5", coordinates["e7"]);
        setPieceCoords("bp6", coordinates["f7"]);
        setPieceCoords("bp7", coordinates["g7"]);
        setPieceCoords("bp8", coordinates["h7"]);
        console.log("ustawiono pozycje startowe figur");
    }
  
    function setPieceCoords(pieceId, coords) {
      var piece = document.getElementById(pieceId);
      piece.style.left = coords.x + "px";
      piece.style.top = coords.y + "px";
    }
  
    function getPiecePosition(pieceId) {
      var piece = document.getElementById(pieceId);
      var position = piece.getBoundingClientRect();
      return {
        x: position.left,
        y: position.top
      };
    }
  
    function resetSelection() {
      pieces.forEach(function(piece) {
        piece.classList.remove("selected");
      });
      selectedPieceId = null;
    }

    
  });

  
  