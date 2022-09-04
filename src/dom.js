function dragAndDrop() {
  const draggables = document.querySelectorAll('.draggable');
  const containerRows = document.querySelectorAll('.row');
  let currentDraggableId;
  let currentDraggableAlignment;
  let currentX;
  let currentY;

  draggables.forEach((draggable) => {
    draggable.dataset.alignment = 'r';

    draggable.addEventListener('dblclick', () => {
      currentDraggableId = draggable.id;
      currentDraggableAlignment = draggable.dataset.alignment;

      if (
        !possbile(
          currentDraggableId,
          currentX,
          currentY,
          currentDraggableAlignment === 'r' ? 'c' : 'r'
        )
      ) {
        return;
      }
      if ((currentDraggableAlignment = 'r')) {
        draggable.dataset.alignment = 'c';
      } else {
        draggable.dataset.alignment = 'r';
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
        currentX = container.dataset.x;
        currentY = container.dataset.y;
        if (
          container.firstChild ||
          !possible(currentDraggableId, currentX, currentY, currentDraggableAlignment)
        ) {
          return;
        }
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
      });
    });
  });

  function possible(shipId, x, y) {
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
    return shipLength + Number(x) < 11;
  }
}

function domManip() {}

export { dragAndDrop };
