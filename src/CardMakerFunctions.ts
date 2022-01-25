import { Block, Canvas, Card, HistoryChanges, UrlArtObject } from "./CardMakerTypes";

function createCanvas(card: Card): Card {
  return {
      ...card,
      canvas: {
          width: 600,
          height: 900,
          background: {
              color: 'red',
              src: null,
          },
          filter: {
              color: 'white',
              transparency: 0.1,
          },
          listItems: [],
      }
  };
}

function editCanvasSize(card: Card, width: number, height: number): Card {
  return {
      ...card,
      canvas: {
          ...card.canvas,
          width: width,
          height: height,
      }
  };
}

function editFilter(card: Card, saturation: number, color: string): Card {
  return {
      ...card,
      canvas: {
          ...card.canvas,
          filter: {
              transparency: saturation,
              color: color,
          }
      }
  };
}

function highlighObject(card: Card, objectId: number): Card {
  return {
      ...card,
      selectItems: objectId,
  };
}

function editBackgroundColour(card: Card, color: string): Card {
  return {
      ...card,
      canvas: {
          ...card.canvas,
          background: {
              color: color,
              src: null,
          }
      }
  };
}

function addBackgroundImg(card: Card, src: string): Card {
  return {
      ...card,
      canvas: {
          ...card.canvas,
          background: {
              color: null,
              src: src,
          }
      }
  };
}

function resetBackground(card: Card): Card {
  return {
      ...card,
      canvas: {
          ...card.canvas,
          background: {
              color: '#ffffff',
              src: null,
          }
      }
  };
}

function editSizeObject(card: Card, objectId: number, width: number, height: number) {
  let modifiableFields = {
      width: width,
      height: height,
  }
  return {
      ...card,
      canvas: {
          ...card.canvas,
          objectList: setComponentFields(card.canvas.listItems, objectId, modifiableFields)
      }
  };
}

function createTextObject(card: Card, objectId: number): Card {
  return {
      ...card,
      canvas: {
          ...card.canvas,
          listItems: [
              ...card.canvas.listItems,
              {
                  id: objectId,
                  type: 'text',
                  text: 'Hello, world!',
                  size: 12,
                  bold: false,
                  underline: false,
                  italic: false,
                  fontFamily: 'TimesNewRuman',
                  color: '#000000',
                  positionX: card.canvas.width / 2,
                  positionY: card.canvas.height / 2,
              }
          ]
      }
  }
}

function setComponentFields(listBlock: Block[], id: number, modifiableFields: object): Block[] {
  let newlistBlock: Block[] = [];
  listBlock.forEach((component: Block) => {
      if (component.id == id) {
          newlistBlock.push({
              ...component,
              ...modifiableFields,
          });
      } else {
          newlistBlock.push(component);
      }
  });
  return newlistBlock;
}

function setItalicText(card: Card, objectId: number, isItalic: boolean): Card {
  let modifiableFields = {
      italic: isItalic,
  }
  return {
      ...card,
      canvas: {
          ...card.canvas,
          listItems: setComponentFields(card.canvas.listItems, objectId, modifiableFields)
      }
  };
}

function setBoldText(card: Card, objectId: number, isBold: boolean): Card {
  let modifiableFields = {
      bold: isBold,
  }
  return {
      ...card,
      canvas: {
          ...card.canvas,
          listItems: setComponentFields(card.canvas.listItems, objectId, modifiableFields)
      }
  };
}

function editSizeText(card: Card, objectId: number, size: number): Card {
  let modifiableFields = {
      size: size,
  }
  return {
      ...card,
      canvas: {
          ...card.canvas,
          listItems: setComponentFields(card.canvas.listItems, objectId, modifiableFields)
      }
  };
}

function editColourText(card: Card, objectId: number, colour: string): Card {
  let modifiableFields = {
      colour: colour,
  }
  return {
      ...card,
      canvas: {
          ...card.canvas,
          listItems: setComponentFields(card.canvas.listItems, objectId, modifiableFields)
      }
  };
}

function editUnderlineText(card: Card, objectId: number, isUnderline: boolean): Card {
  let modifiableFields = {
      underline: isUnderline,
  }
  return {
      ...card,
      canvas: {
          ...card.canvas,
          listItems: setComponentFields(card.canvas.listItems, objectId, modifiableFields)
      }
  };
}

function createImgObject(card: Card, objectId: number, width: number, height: number, src: string): Card {
  return {
      ...card,
      canvas: {
          ...card.canvas,
          listItems: [
              ...card.canvas.listItems,
              {
                  id: objectId,
                  type: 'img',
                  width: width,
                  height: height,
                  src: src,
                  positionX: card.canvas.width / 2,
                  positionY: card.canvas.height / 2,
              }
          ]
      }
  };
}


function createArtObject(card: Card, objectId: number, name: string): Card {
  let pathSelected: string = '';
  switch (name) {
      case 'carrot':
          pathSelected = UrlArtObject.carrot;
          break;
      case 'papper':
          pathSelected = UrlArtObject.papper;
          break;
  }

  return {
      ...card,
      canvas: {
          ...card.canvas,
          listItems: [
              ...card.canvas.listItems,
              {
                  id: objectId,
                  type: 'artObj',
                  width: 100,
                  height: 100,
                  src: pathSelected,
                  positionX: card.canvas.width / 2,
                  positionY: card.canvas.height / 2,
              }
          ],
      }
  };
}

function deleteObject(card: Card): Card {
  let copyObjectList: Block[] = [...card.canvas.listItems];
  copyObjectList.forEach(function (block, index) {
      if (block.id == card.selectItems) {
          copyObjectList.splice(index, 1);
      }
  });
  return {
      ...card,
      canvas: {
          ...card.canvas,
          listItems: copyObjectList
      }
  };
}

function moveArtObj(card: Card, newX: number, newY: number): Card {
  let modifiableFields = {
      locationX: newX,
      locationY: newY,
  }
  return {
      ...card,
      canvas: {
          ...card.canvas,
          listItems: setComponentFields(card.canvas.listItems, card.selectItems as number, modifiableFields)
      }
  };
}

function addCanvasInHistory(card: Card, newCanvas: Canvas): Card {
  let history: HistoryChanges = card.history;
  let newListState: Canvas[] = [...history.listState];
  if (history.currentIndex != history.listState.length - 1) {
      newListState = newListState.splice(history.currentIndex + 1, history.listState.length - history.currentIndex + 1);
  }
  newListState.push(newCanvas);
  return {
      ...card,
      history: {
        currentIndex: history.currentIndex + 1,
        listState: newListState,
      }
  }
}

function undo(card: Card): Card {
  return {
      ...card,
      history: {
          ...card.history,
          currentIndex: card.history.currentIndex - 1,
      }
  }
}

function redo(card: Card): Card {
  return {
      ...card,
      history: {
          ...card.history,
          currentIndex: card.history.currentIndex + 1,
      }
  }
} 