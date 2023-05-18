window.addEventListener("DOMContentLoaded", function() {
    var myPiece = document.getElementById("bk");
    var rect = myPiece.getBoundingClientRect();
    var x = rect.left;
    var y = rect.top;

    console.log("Współrzędne figury: x =", x, ", y =", y);
  });

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
        resetSelection();
  
        piece.classList.add("selected");
        selectedPieceId = piece.id;
  
        console.log("Zaznaczono figurę " + selectedPieceId);
  
        var piecePosition = getPiecePosition(selectedPieceId);
        console.log("Pozycja figury:", piecePosition);
      });
    });
  
    console.log(coordinates);
  
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
  
  
  