function dragAndDrop() {
  const draggables = document.querySelectorAll('.draggable');
  const containerRows = document.querySelectorAll('.row');
  const ship1span = document.getElementById('span1');
  const ship2span = document.getElementById('span2');
  const ship3span = document.getElementById('span3');
  const ship4span = document.getElementById('span4');
  const ship5span = document.getElementById('span5');
  const span1RCss = 'top: 10px;left: 30px;';
  const span1CCss = 'top: -30px;left: -9px;';
  const span2And3RCss = 'padding-top: 10px;padding-right: 76px;top: 10px;left: 30px;';
  const span2And3CCss = 'padding-top: 50px;padding-right: 36px;top: -30px;left: -9px;';
  const span4RCss = 'padding-top: 10px;padding-right: 116px;top: 10px;left: 30px;';
  const span4CCss = 'padding-top: 90px;padding-right: 36px;top: -30px;left: -9px;';
  const span5RCss = 'padding-top: 10px;padding-right: 156px;top: 10px;left: 30px;';
  const span5CCss = 'padding-top: 130px;padding-right: 36px;top: -30px;left: -9px;';
  let ship1path = [];
  let ship2path = [];
  let ship3path = [];
  let ship4path = [];
  let ship5path = [];
  let currentPaths = [];
  let currentDraggableId;
  let currentDraggableAlignment;
  let currentX;
  let currentY;

  draggables.forEach((draggable) => {
    draggable.dataset.alignment = 'r';

    draggable.addEventListener('dblclick', () => {
      currentDraggableId = draggable.id;
      let tempAlign = '';

      if (currentDraggableAlignment === 'r') {
        tempAlign = 'c';
      } else {
        tempAlign = 'r';
      }

      if (currentDraggableId === 'shipone') {
        currentPaths = [...ship2path, ...ship3path, ...ship4path, ...ship5path];
      } else if (currentDraggableId === 'shiptwo') {
        currentPaths = [...ship1path, ...ship3path, ...ship4path, ...ship5path];
      } else if (currentDraggableId === 'shipthree') {
        currentPaths = [...ship1path, ...ship2path, ...ship4path, ...ship5path];
      } else if (currentDraggableId === 'shipfour') {
        currentPaths = [...ship1path, ...ship2path, ...ship3path, ...ship5path];
      } else {
        currentPaths = [...ship1path, ...ship2path, ...ship3path, ...ship4path];
      }

      if (
        !possible(currentDraggableId, Number(currentX), Number(currentY), tempAlign, currentPaths)
      ) {
        return;
      }

      if (currentDraggableAlignment === 'r') {
        draggable.dataset.alignment = 'c';
        currentDraggableAlignment = 'c';

        if (currentDraggableId === 'shipone') {
          ship1span.style.cssText = span1CCss;
        } else if (currentDraggableId === 'shiptwo') {
          ship2span.style.cssText = span2And3CCss;
        } else if (currentDraggableId === 'shipthree') {
          ship3span.style.cssText = span2And3CCss;
        } else if (currentDraggableId === 'shipfour') {
          ship4span.style.cssText = span4CCss;
        } else {
          ship5span.style.cssText = span5CCss;
        }
      } else {
        draggable.dataset.alignment = 'r';
        currentDraggableAlignment = 'r';

        if (currentDraggableId === 'shipone') {
          ship1span.style.cssText = span1RCss;
        } else if (currentDraggableId === 'shiptwo') {
          ship2span.style.cssText = span2And3RCss;
        } else if (currentDraggableId === 'shipthree') {
          ship3span.style.cssText = span2And3RCss;
        } else if (currentDraggableId === 'shipfour') {
          ship4span.style.cssText = span4RCss;
        } else {
          ship5span.style.cssText = span5RCss;
        }
      }
    });

    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
      currentDraggableId = draggable.id;
      currentDraggableAlignment = draggable.dataset.alignment;
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });

  containerRows.forEach((row, gridY) => {
    const containers = row.querySelectorAll('.container');

    containers.forEach((container, gridX) => {
      container.dataset.y = gridY;
      container.dataset.x = gridX;

      container.addEventListener('click', () => {
        currentX = container.dataset.x;
        currentY = container.dataset.y;
      });

      container.addEventListener('dragover', (e) => {
        e.preventDefault();
        currentX = Number(container.dataset.x);
        currentY = Number(container.dataset.y);

        if (currentDraggableId === 'shipone') {
          currentPaths = [...ship2path, ...ship3path, ...ship4path, ...ship5path];
        } else if (currentDraggableId === 'shiptwo') {
          currentPaths = [...ship1path, ...ship3path, ...ship4path, ...ship5path];
        } else if (currentDraggableId === 'shipthree') {
          currentPaths = [...ship1path, ...ship2path, ...ship4path, ...ship5path];
        } else if (currentDraggableId === 'shipfour') {
          currentPaths = [...ship1path, ...ship2path, ...ship3path, ...ship5path];
        } else {
          currentPaths = [...ship1path, ...ship2path, ...ship3path, ...ship4path];
        }

        if (
          !possible(currentDraggableId, currentX, currentY, currentDraggableAlignment, currentPaths)
        ) {
          return;
        }

        if (currentDraggableAlignment === 'r') {
          if (currentDraggableId === 'shipone') {
            ship1path = [
              [currentX, currentY],
              [currentX + 1, currentY],
            ];
          } else if (currentDraggableId === 'shiptwo') {
            ship2path = [
              [currentX, currentY],
              [currentX + 1, currentY],
              [currentX + 2, currentY],
            ];
          } else if (currentDraggableId === 'shipthree') {
            ship3path = [
              [currentX, currentY],
              [currentX + 1, currentY],
              [currentX + 2, currentY],
            ];
          } else if (currentDraggableId === 'shipfour') {
            ship4path = [
              [currentX, currentY],
              [currentX + 1, currentY],
              [currentX + 2, currentY],
              [currentX + 3, currentY],
            ];
          } else {
            ship5path = [
              [currentX, currentY],
              [currentX + 1, currentY],
              [currentX + 2, currentY],
              [currentX + 3, currentY],
              [currentX + 4, currentY],
            ];
          }
        } else {
          if (currentDraggableId === 'shipone') {
            ship1path = [
              [currentX, currentY],
              [currentX, currentY - 1],
            ];
          } else if (currentDraggableId === 'shiptwo') {
            ship2path = [
              [currentX, currentY],
              [currentX, currentY - 1],
              [currentX, currentY - 2],
            ];
          } else if (currentDraggableId === 'shipthree') {
            ship3path = [
              [currentX, currentY],
              [currentX, currentY - 1],
              [currentX, currentY - 2],
            ];
          } else if (currentDraggableId === 'shipfour') {
            ship4path = [
              [currentX, currentY],
              [currentX, currentY - 1],
              [currentX, currentY - 2],
              [currentX, currentY - 3],
            ];
          } else {
            ship5path = [
              [currentX, currentY],
              [currentX, currentY - 1],
              [currentX, currentY - 2],
              [currentX, currentY - 3],
              [currentX, currentY - 4],
            ];
          }
        }

        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
      });
    });
  });

  function possible(shipId, x, y, align, paths) {
    let shipLength = 0;
    if (shipId === 'shipone') {
      shipLength = 2;
    } else if (shipId === 'shiptwo' || shipId === 'shipthree') {
      shipLength = 3;
    } else if (shipId === 'shipfour') {
      shipLength = 4;
    } else {
      shipLength = 5;
    }

    if (align === 'r') {
      for (let i = 0; i < shipLength; i++) {
        if (paths.some((path) => path[0] === x + i && path[1] === y)) {
          return false;
        }
      }

      return shipLength + Number(x) < 11;
    } else {
      for (let i = 0; i < shipLength; i++) {
        if (paths.some((path) => path[0] === x && path[1] === y - i)) {
          return false;
        }
      }

      return Number(y) - shipLength > -2;
    }
  }
}

function domManip() {}

export { dragAndDrop };
